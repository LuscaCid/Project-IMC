import {Modal} from './modal.js' 
import { Alert } from './alert-error.js';

Modal.calcButton.addEventListener('click', calculatesIMC)/**como esta dentro do objeto modal, preciso referenciar */
Modal.closeBtn.addEventListener('click', Modal.closesScreen)

function calculatesIMC(event){
    event.preventDefault()

    let results = (Number(Modal.weight.value) /  (Number(Modal.height.value) **2))*10000;
    if(notNumber(Modal.weight.value) || (notNumber(Modal.height.value))){
        Alert.alertErrorOpens()
    }
    else{
        Alert.alertErrorCloses()
        Modal.modalOpen()
        document.querySelector(".modal h2").innerText = `O IMC é de ${results.toFixed(2)}`
    }
}

function notNumber(value){
    return isNaN(value) || value == ""
    //por algum motivo o javascript trata strings vazias, ou seja, espacos em branco como numeros
}
/**
 * 
 * funcao acima se trata de uma funcao padrao javascript para validacao de dados
 * onde apenas serao executados se forem numeros
 */