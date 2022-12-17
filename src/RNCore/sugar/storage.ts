import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";
 const storage = {
    async get(key: string) {
        const jsonValue = await asyncStorage.getItem(key)
        const obj = JSON.parse(jsonValue)
        switch (obj.type) {
            case 'number':
                return Number(obj.value)
            default: return obj.value
        }
    },

    async set(key: string, value: any) {
        let type = typeof value
        const obj = {
            value,
            type
        }
        const jsonValue = JSON.stringify(obj)
        await asyncStorage.setItem(key, jsonValue)
    },
    async remove(key: string) {
        await asyncStorage.removeItem(key)
    },
    async clear() {
        await asyncStorage.clear()
    }
}

export default storage
