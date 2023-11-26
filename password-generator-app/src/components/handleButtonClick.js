export const handleButtonClick = (password) => {
    if(password){
        navigator.clipboard.writeText(password)
    }
}