import axios, {AxiosResponse} from "axios";
import {storage} from "./storage";


export enum token {
    refresh = 'refresh_token',
    access = 'access_token'
}

let hosts = [
    '//api-watchdog.placebo25.ru/',
    '//127.0.0.1:8000/',
]

export const baseUrl = hosts[1]

async function simpleRequest(
    url: string,
    method: string,
    headers: { Authorization: string; 'Content-Type': string; Accept: string;},
    body: object,
    reAuth = false
) {
    url = baseUrl + url
    try {
        if (method === 'get') return await axios.get(url, {headers})
        if (method === 'delete') return await axios.delete(url, {headers})
        // @ts-ignore
        return await axios[method](url, body, {headers})
    } catch (e) {
        // @ts-ignore
        console.log(e?.response, '________')
        // @ts-ignore
        if (reAuth && e?.response.status === 401) {
            // @ts-ignore
            return e?.response
        }
        // @ts-ignore
        if (!e.response.status) {
            throw 503
        }
        // @ts-ignore
        throw e.response.status
    }
}

async function requestWithReAuth(
    url: string,
    methods: string,
    headers: { Authorization: any; "Content-Type"?: string; Accept?: string; },
    body: object
) {
    //@ts-ignore
    let response = await simpleRequest(url, methods, headers, body, true)
    if (response.status === 401) {
        const refresh = await storage.get(token.refresh, false)

        if (!refresh) throw 401
        headers.Authorization = ''
        //@ts-ignore
        response = await simpleRequest('refresh_token/', 'post', headers, {refresh})

        if (response.status === 200) {
            await storage.set(token.refresh, response.data['refresh'], false)
            await storage.set(token.access, response.data['access'], false)
            headers.Authorization = 'JWT ' + response.data['access']
            //@ts-ignore
            response = await simpleRequest(url, methods, headers, body)
        } else throw 401
    }
    return response
}

export interface IApiError {
    error: { message: string }
}


async function request(url: string, method: string, body: object, useJWT: boolean) {
    url = url.toLowerCase()
    if (method === 'get') url += bodyToString(body)
    const headers = await getHeaders(useJWT)
    if (useJWT) return await requestWithReAuth(url, method, headers, body)
    //@ts-ignore
    return await simpleRequest(url, method, headers, body)
}

async function getHeaders(useJWT: boolean) {
    const headers = {
        Authorization: '',
        'Content-Type': 'application/json;charset=UTF-8',
        Accept: 'application/json'
    }
    if (useJWT) {
        const access = await storage.get(token.access, false)
        headers.Authorization = 'JWT ' + access
    }
    return headers
}

function bodyToString(body: object) {
    let url = ''
    if (body) {
        url += '?'
        const array = []
        for (let key in body) { // @ts-ignore
            array.push(`${key}=${body[key]}`)
        }
        url += array.join('&')
    }
    return url
}

export async function GET<T = any, R = AxiosResponse<T>, D = any>
(url: string, body: object | null = null, useJWT: boolean = true): Promise<R> {
    // @ts-ignore
    return await request(url, 'get', body, useJWT)
}

export async function PATCH<T = any, R = AxiosResponse<T>, D = any>
(url: string, body: object, useJWT: boolean = true): Promise<R> {
    return await request(url, 'patch', body, useJWT)
}

export async function POST<T = any, R = AxiosResponse<T>, D = any>
(url: string, body: object, useJWT: boolean = true): Promise<R> {
    return await request(url, 'post', body, useJWT)
}

export const DELETE = async (url: string, useJWT: boolean = true) => {
    //@ts-ignore
    return await request(url, 'delete', null, useJWT)
}
