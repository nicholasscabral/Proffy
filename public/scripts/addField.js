document.querySelector('#add-time')
.addEventListener('click', clonefield)

document.querySelector('#rm-time')
.addEventListener('click', removeField)

// executar uma acao
function clonefield() {
    // duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach( (field) => {
        field.value = ""
    })

    // colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}

function removeField() {
    const containers = document.querySelectorAll('.schedule-item') // selecting all the items

    if (containers.length == 1) {
        return
    }
    else {
        document.querySelector('#schedule-items').removeChild(containers[containers.length - 1])
    }
}