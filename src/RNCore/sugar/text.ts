export function zfill(string, length = 2) {
    let new_str = String(string)
    while (new_str.length < length) new_str = '0' + new_str
    return new_str
}

export function replaceAll(string, what, to) {
    while (string.includes(what)) string.replace(what, to)
    return string
}

export function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

export function formatPhone(string) {
    let phone = string
    if (phone[0] === '+') phone = phone.slice(1, phone.length)
    phone = replaceAll(phone, ' ', '')
    phone = replaceAll(phone, '(', '')
    phone = replaceAll(phone, ')', '')
    if (phone.length === 11 && +phone) {
        if (phone[0] === '8') phone = '7' + phone.slice(1, phone.length)
        return phone
    }
}
