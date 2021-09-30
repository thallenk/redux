//INCIALIZANDO CONSTANTES
const INCREMENTAR = 'aluno/INCREMENTAR_TEMPO'
const REDUZIR = 'aluno/REDUZIR_TEMPO'
const MODIFICAR_EMAIL = 'aluno/MODIFICAR_EMAIL'


// ESTADO INICIAL
const inicialState = {
    nome: 'Thállen Kettyllen',
    email: 'thallen@email.com',
    diasRestantes: 120
}

//ACTIONS
export const incrementar = () => ({type: INCREMENTAR});
export const reduzir = () => ({type: REDUZIR});
export const modificarEmail = (payload) => ({type: MODIFICAR_EMAIL, payload});

// Reducer
 const reducer = immer.produce((state, action) => {
    switch(action.type){
        case INCREMENTAR: 
        state.diasRestantes++
        break
        case REDUZIR: 
        state.diasRestantes--
        break
        case MODIFICAR_EMAIL: 
        state.email = action.payload
        break
    }
}, inicialState)

export default reducer