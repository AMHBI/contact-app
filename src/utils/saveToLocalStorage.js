const saveToLocalStorage = (contacts) =>{
    localStorage.setItem("contacts", JSON.stringify(contacts));
}
export default saveToLocalStorage