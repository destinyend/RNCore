export function isPhoneCorrect(phone:string) {
    try {
        let value = String(+phone.replace(/[^0-9]/g, ''))
        if (!Boolean(value)) return
        if (value.length === 11) value = '7' + value.slice(1)
        if (value.length === 10) value = '7' + value
        if (value.length !== 11) return
        return value
    } catch (e) {
        return null
    }
}

export function isEmailCorrect(email:string) {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
