export const userValidation = (str) => {
    if(str.length<=25 && str.length >= 4 &&
        (/[a-zA-Z]/).test(str.charAt(0)) &&
        (/^\w+$/).test(str) &&
        /[a-zA-Z0-9]/.test(str.slice(-1)))
    {
        return true
    }else {
        return false
    }
}