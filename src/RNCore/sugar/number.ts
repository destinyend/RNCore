export const randInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

export function round(num: number, decimal: number) {
    decimal = Math.pow(10, decimal)
    return Math.round((num + Number.EPSILON) * decimal) / decimal
}


export function numberWithSpaces(x: string|number|null|undefined, decimal: number=2):string {
    if (!x) return '0'
    x = round(+x, decimal)
    let parts = String(x).toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}
