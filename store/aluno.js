//INCIALIZANDO CONSTANTES
const INCREMENTAR = 'aluno/ INCREMENTAR_TEMPO'
const REDUZIR = 'aluno/ REDUZIR_TEMPO'
const MODIFICAR_EMAIL = 'aluno/ MODIFICAR_EMAIL'


// ESTADO INICIAL
const aluno = {
    nome = 'Thállen Kettyllen',
    email: 'thallen@email.com',
    diasRestantes: 120
}

//ACTIONS
export const incrementar = () => ({type: INCREMENTAR});
export const reduzir = () => ({type: REDUZIR});
export const modidicarEmail = (payload) => ({type: MODIFICAR_EMAIL, payload});

// Reducer
const reducer = immer.producer((state = aluno, action) => {
    switch(action.type){
        case INCREMENTAR: 
        state.diasRestantes + 1
        break
        case REDUZIR: 
        state.diasRestantes - 1
        break
        case MODIFICAR_EMAIL: 
        state.email = action.payload
        break
    }
})