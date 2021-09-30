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
export const completar_aula = () => ({type: COMPLETAR_AULA, payload});
export const completar_curso = () => ({type: COMPLETAR_CURSO});
export const resetar_curso = (payload) => ({type: RESETAR_CURSO});

// Reducer
 const aulas = immer.producer((state = initialState, action) => {
    switch(action.type){
        case COMPLETAR_AULA: 
            state.filter(s => s.id === s.payload).completa = true
        break
        case COMPLETAR_AULA: 
            state.map(s => s.completa = true)
        break
        case RESETAR_CURSO: 
            state.map(s => s.completa = false)
        break
    }
})

export default aulas