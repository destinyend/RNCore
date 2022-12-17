export function getObjectIndexById(array: any[], id: number): number {
    if (!array) return -1
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) return i
    }
    return -1
}

export function getObjectById(array: any[], id: number) {
    const index = getObjectIndexById(array, id)
    if (index === -1) return
    return array[index]
}
