import { atom, selector } from 'recoil';
export const todoListState = atom({
   key: 'todoList',
   default:[]
})
export const todoListFilterState = atom({
    key: 'TodoListFilter',
    default: 'Show All',
  });
  export const todoListSearchState = atom({
    key: 'TodoListSearch',
    default:'',
  });
export const filteredTodoListState  = selector({
    key: 'FilteredTodoList',
    get: ({get}) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);
        const search = get(todoListSearchState);
        if(search.length){
            console.log(search)
            return list.filter((item) => !item.text.search(search)) 
        }
    
        switch (filter) {
          case 'Show Completed':
            return list.filter((item) => item.isComplete);
          case 'Show Uncompleted':
            return list.filter((item) => !item.isComplete);
          default:
            return list;
        }
      },
})

export const todoListStatusState = selector({
    key : 'todoListStatusState',
    get:({get})=>{
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
        const totalUncompletedNum = totalNum - totalCompletedNum;
        const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;
    
        return {
          totalNum,
          totalCompletedNum,
          totalUncompletedNum,
          percentCompleted,
        };


    }
})