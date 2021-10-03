//INCIALIZANDO CONSTANTES
const FETCH_STARTED = 'token/FETCH_STARTED'
const FETCH_SUCCESS = 'token/FETCH_SUCCESS'
const FETCH_ERROR = 'token/FETCH_ERROR'


// ESTADO INICIAL
const inicialState = {
    loading: false,
    data: getLocalStorage('token', null),
    error: null
}

//ACTIONS
export const fetchStarted = () => ({type: FETCH_STARTED});
export const fetchSuccess = (payload) => ({type:FETCH_SUCCESS, payload, localStorage:'token'});
export const fetchError = (payload) => ({type: FETCH_ERROR, payload});




export const tokenFetch = (user) => async(dispatch) => {
    try {
        dispatch(fetchStarted());
        const response = await fetch(
            'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(user),
            },
        );
        const { token } = await response.json();
        dispatch(fetchSuccess(token));
    } catch(error){
        dispatch(fetchError(error.message))
    }
};



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