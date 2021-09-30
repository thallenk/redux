//INCIALIZANDO CONSTANTES
const FETCH_STARTED = 'token/FETCH_STARTED'
const FETCH_SUCCESS = 'token/FETCH_SUCCESS'
const FETCH_ERROR = 'token/FETCH_ERROR'



//middlewares
function getLocalStorage(key, inicial){
    try{
        return JSON.parse(window.localStorage.getItem(key))
    } catch (error) {
        return inicial
    }
}


// ESTADO INICIAL
const inicialState = {
    loading: false,
    data: getLocalStorage('data', null),
    error: null
}

//ACTIONS
export const fetchStarted = () => ({type: FETCH_STARTED});
export const fetchSuccess = () => ({type:FETCH_SUCCESS});
export const fetchError = (payload) => ({type: FETCH_ERROR});

// Reducer
 const token = immer.produce((state, action) => {
    switch(action.type){
        case FETCH_STARTED: 
            state.loading = true
        break
        case FETCH_SUCCESS: 
            state.data = action.payload, state.loading = false, state.error = null
        break
        case FETCH_ERROR: 
        state.data = null, state.loading = false, state.error = action.payload
        break
    }
}, inicialState)

export default token