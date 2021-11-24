const initialState = [];

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'RemoveTodo':
    
    return [state.filter(td=> td.id!==action.payload)]

    case 'AddTodo':return [...state, {
        ...action.payload,
        id:state.length +1
       // title:action.payload.title,
       // description:action.payload.description,
       // place:action.payload.place,
       // date:action.payload.date,

       // status:action.payload.status
     }]

     case 'ToInProgress':
        return [
          {
             ...state[action.payload-1],
             status: "InProgress"
           }

           ]
    case "ToDone":
       return [

         {
             ...state[action.payload-1],
            status:"Done"
          }
       ]


    default:
       return [...state]



  }
}

export default rootReducer;
