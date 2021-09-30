//INCIALIZANDO CONSTANTES
const COMPLETAR_AULA = 'aulas/COMPLETAR_AULA'
const COMPLETAR_CURSO = 'aulas/COMPLETAR_CURSO'
const RESETAR_CURSO = 'aulas/RESETAR_AULAS'


// ESTADO INICIAL
const initialState = [
    {
      id: 1,
      nome: 'Design',
      completa: true,
    },
    {
      id: 2,
      nome: 'HTML',
      completa: false,
    },
    {
      id: 3,
      nome: 'CSS',
      completa: false,
    },
    {
      id: 4,
      nome: 'JavaScript',
      completa: false,
    },
  ];
//ACTIONS
export const completarAula = (payload) => ({type: COMPLETAR_AULA, payload});
export const completarCurso = () => ({type: COMPLETAR_CURSO});
export const resetarCurso = () => ({type: RESETAR_CURSO});

// Reducer
 const reducer = immer.produce((state, action) => {
    switch(action.type){
        case COMPLETAR_AULA: 
        const index = state.findIndex((x) => x.id === action.payload);
        if (!isNaN(index) && state[index]) state[index].completa = true;
        break
        case COMPLETAR_CURSO: 
            state.map(s => s.completa = true)
        break
        case RESETAR_CURSO: 
            state.map(s => s.completa = false)
        break
    }
}, initialState)

export default reducer