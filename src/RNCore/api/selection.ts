import {Model} from "./models";
import {GET, POST} from "./axios";

export enum EApiStatus  {
    initial,
    loading,
    error,
    ready
}
export  class Selection extends Object {
    private readonly url: string;
    private readonly model: Model;
    private status: EApiStatus;
    constructor(url: string, model: Model) {
        super();
        this.url = url
        this.model = model
        this.status = EApiStatus.initial
    }

    async filter(args: object) {
        this.status = EApiStatus.loading
        const response = await GET(this.url, args)
        if (response.status === 200) {
            for (const obj of response.data) { // @ts-ignore
                this[obj.id] = obj
            }
        }
    }
    static async all() {
        await this.filter({})
    }
    async create(args: object) {
        const response = await POST(this.url, args)
        if (response.status === 201) { // @ts-ignore
            this[response.data.id] = response.data
        }
    }
}



