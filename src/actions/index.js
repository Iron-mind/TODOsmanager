// Podes usar esta variable para generar un ID por cada Todo.
let todoId = 1
export const addTodo =  (td)=>{
  return{
    type: "AddTodo",
    payload: {

      "id": todoId,
      "status": "Todo",
       //'description': td.description? td.description:""
       ...td
    }

    }
  };

export const removeTodo =  (n)=>{
  return {
    type: "RemoveTodo",
    payload: n,
  }
}

export const toInProgress = (n)=>{
  return {
    type: "ToInProgress",
    payload: n,
  }
};

export const toDone = (n)=>{
  return {
    type: "ToDone",
    payload: n,
  }
};
