//INCIALIZANDO CONSTANTES
const FETCH_STARTED = 'user/FETCH_STARTED'
const FETCH_SUCCESS = 'user/FETCH_SUCCESS'
const FETCH_ERROR = 'user/FETCH_ERROR'




//ESTADO INICIAL
const inicialState = {
  loading: false,
  data: null,
  error: null,
}

//ACTIONS
export const fetchStarted = () => ({type: FETCH_STARTED});
export const fetchSuccess = (payload) => ({type:FETCH_SUCCESS, payload});
export const fetchError = (payload) => ({type: FETCH_ERROR, payload});


export const userFetch = (token) => async (dispatch) => {
  try {
      dispatch(fetchStarted());
      const response = await fetch(
        'https://dogsapi.origamid.dev/json/api/user',
          {
            method: 'GET',
            headers: {
              Authorization: 'Bearer' + token,
            },
          },
      );
      const data = await response.json();
      dispatch(fetchSuccess(data));
  } catch(error){
      dispatch(fetchError(error.message))
  }
};

//Reducer
function user(state = inicialState, action) {
  switch (action.type) {
    case FETCH_STARTED:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case FETCH_ERROR:
      return { data: null, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default user