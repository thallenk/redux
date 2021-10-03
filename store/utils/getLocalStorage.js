function getLocalStorage(key, inicial){
    try{
        return JSON.parse(window.localStorage.getItem(key))
    } catch (error) {
        return inicial
    }
}

export default getLocalStorage