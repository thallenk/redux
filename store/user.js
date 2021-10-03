//INCIALIZANDO CONSTANTES
const FETCH_STARTED = 'user/FETCH_STARTED'
const FETCH_SUCCESS = 'user/FETCH_SUCCESS'
const FETCH_ERROR = 'user/FETCH_ERROR'


//middlewares



//ESTADO INICIAL
const inicialState = {
  loading: false,
  data: getLocalStorage('data', null),
  error: null
}

//ACTIONS
export const fetchStarted = () => ({type: FETCH_STARTED});
export const fetchSuccess = (payload) => ({type:FETCH_SUCCESS, payload});
export const fetchError = (payload) => ({type: FETCH_ERROR, payload});


export const userFetch = (token) => async(dispatch) => {
  try {
      dispatch(fetchStarted());
      const response = await fetch(
          'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
          {
            method: 'GET',
            headers: {
              Authorization: 'Bearer' + token,
            },
            body: JSON.stringify(user),
          },
      );
      const { data } = await response.json();
      dispatch(fetchSuccess(data));
  } catch(error){
      dispatch(fetchError(error.message))
  }
};

//Reducer
function user(state = initialState, action) {
  switch (action.type) {
    case USER_FETCH_STARTED:
      return { ...state, loading: true };
    case USER_FETCH_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case USER_FETCH_ERROR:
      return { data: null, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default user