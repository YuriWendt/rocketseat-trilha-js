let aceitar = false;
console.log('Pedir Uber')

const promessa = new Promise((resolve, reject) => {
    if (aceitar === true) {
        return resolve('Uber Chegou!')
    } else {
        return reject('Uber Falhou')
    }
})

console.log('Aguardando')

promessa.then(result => console.log(result)).catch(erro => console.log(erro)).finally(() => console.log('Finalizado'))