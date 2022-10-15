function getFromLocalStorage(key) {
    try {
        const localData = localStorage.getItem(key);
        let localbazaZadan = JSON.parse(localData);
        return localbazaZadan
    }
    catch (error) {
        console.log(error.name + ": " + error.message);
    }

};

export default getFromLocalStorage;