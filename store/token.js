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
function token(state = initialState, action) {
    switch (action.type) {
      case TOKEN_FETCH_STARTED:
        return { ...state, loading: true };
      case TOKEN_FETCH_SUCCESS:
        return { data: action.payload, loading: false, error: null };
      case TOKEN_FETCH_ERROR:
        return { data: null, loading: false, error: action.payload };
      default:
        return state;
    }
  }

export default token