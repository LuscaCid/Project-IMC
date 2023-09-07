export const Alert = {
    element : document.querySelector(".alert-error"),
    alertErrorOpens,
    alertErrorCloses
}
function alertErrorOpens(){
    Alert.element.classList.add("open")
}
function alertErrorCloses(){
    Alert.element.classList.remove("open")
}