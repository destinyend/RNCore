export const storage = {
    async get(key: string, useJSON = true) {
        try {
            const jsonValue = await localStorage.getItem(key)
            if (!useJSON) return jsonValue
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.log('local storage error:', e)
        }
    },

    async set(key:string, value: any, useJSON = true) {
        if (!useJSON) {
            await localStorage.setItem(key, value)
            return
        }
        try {
            const jsonValue = JSON.stringify(value)
            await localStorage.setItem(key, jsonValue)
        } catch (e) {
            console.log('local storage error:', e)
        }
    },
    async remove(key:string) {
        await localStorage.removeItem(key)
    },
    async clear() {
        await localStorage.clear()
    }
}


