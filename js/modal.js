/*desta forma eu organizo melhor o codigo com um object literals*/
export const Modal = {/*objeto modal que tem as propiedades para acessoa aos elementos html*/
    calcButton: document.querySelector("#send"),
    closeBtn: document.querySelector("#close"),
    weight : document.querySelector("#weight"),
    height : document.querySelector("#height"),

    closesScreen(){
        document.querySelector(".modal-wrapper").classList.remove("open") 
    },
    modalOpen(){
        document.querySelector(".modal-wrapper").classList.add("open")
    }
}

window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(event){
    if(event.key === 'Escape'){
        Modal.closesScreen()/*referenciando o objeto pois ele se encontra dentro do objeto Modal*/ 
    }
}
