import {
  INPUT_ONCLICK,
  OPTION_ONCLICK,
  INPUT_VALUE,
  ADD_TODO_ITEM,
  CLEAR_ALL,
  TODO_ITEM_TOGGLE,
  TODO_ITEM_EDIT,
  DELETE_TODO_ITEM,
  TODO_FILTER,
} from "../actions/actionTypes";
import { v4 as uuidv4 } from "uuid";
import Priority4 from '../img/priority4.svg';

const defaultState = {
  showOption: "",
  category: { title: "Category", value: "Work", img: "fas fa-briefcase" },
  priority: { title: "Priority", value: "4", img: Priority4 },
  time: { title: "Time", value: "< 1 hour", img: "fas fa-briefcase" },
  inputValue: "",
  list: [],
  editItem: {},
  showState: "All",
};

//state = defaultState
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case INPUT_ONCLICK: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.showOption = action.inputType.toLowerCase();
      return newState;
    }
    case OPTION_ONCLICK: {
      const newState = JSON.parse(JSON.stringify(state));
      const option = action.item.title.toLowerCase();
      newState[option] = action.item;
      newState.showOption = "";
      return newState;
    }

    case INPUT_VALUE: {
      const newState = { ...state, inputValue: action.inputValue };
      return newState;
    }

    case ADD_TODO_ITEM: {
      const newState = JSON.parse(JSON.stringify(state));
      if (state.editItem.id) {
        newState.list.map((itemList) => {
          if (itemList.addDate === newState.editItem.date) {
            itemList.listByDate.map((item) => {
              if (item.id === newState.editItem.id) {
                //这样不行？？？？
                // item = {
                //   ...item,
                //   options: { ...newState.options },
                //   todo: newState.inputValue,
                // };
                item.category = { ...newState.category };
                item.priority = { ...newState.priority };
                item.time = { ...newState.time };
                item.todo = newState.inputValue;
              }
              return item;
            });
          }
          return itemList;
        });
        newState.editItem = {};
        newState.category = {
          title: "Category",
          value: "Work",
          img: "fas fa-briefcase",
        };
        newState.priority = {
          title: "Priority",
          value: "4",
          img: Priority4,
        };
        newState.time = {
          title: "Time",
          value: "< 1 hour",
          img: "fas fa-briefcase",
        };
        newState.inputValue = "";
        return newState;
      } else if (newState.inputValue) {
        const newDate = new Date();
        const addNewDate = `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`;
        const newTodo = {
          id: uuidv4(),
          date: addNewDate,
          finish: false,
          category: {
            ...newState.category,
          },
          priority: {
            ...newState.priority,
          },
          time: {
            ...newState.time,
          },
          todo: newState.inputValue,
        };
        //newState.list[0] 别忘判断存在
        newState.list[0] && newState.list[0].addDate === addNewDate
          ? (newState.list[0] = {
              ...newState.list[0],
              // 先++
              todoUndone: ++newState.list[0].todoUndone,
              listByDate: [newTodo, ...newState.list[0].listByDate],
            })
          : (newState.list = [
              {
                addDate: addNewDate,
                todoDone: 0,
                todoUndone: 1,
                listByDate: [newTodo],
              },
              ...newState.list,
            ]);
        newState.category = {
          title: "Category",
          value: "Work",
          img: "fas fa-briefcase",
        };
        newState.priority = {
          title: "Priority",
          value: "4",
          img: Priority4,
        };
        newState.time = {
          title: "Time",
          value: "< 1 hour",
          img: "fas fa-briefcase",
        };
        newState.inputValue = "";
        return newState;
      } else {
        return state;
      }
    }

    case CLEAR_ALL: {
      const newState = {
        ...state,
        options: {
          category: {
            title: "Category",
            value: "Work",
            img: "fas fa-briefcase",
          },
          priority: { title: "Priority", value: "4", img: Priority4 },
          time: { title: "Time", value: "< 1 hour", img: "fas fa-briefcase" },
        },
        inputValue: "",
        list: [],
        editItem: {},
      };
      return newState;
    }

    case TODO_ITEM_TOGGLE: {
      const newState = JSON.parse(JSON.stringify(state));
      //愚蠢 map不用 {开始就 return} if可以用 ？：或者 && 替换呀
      newState.list.map((itemList) => {
        if (itemList.addDate === action.date) {
          itemList.listByDate.map((item) => {
            if (item.id === action.id) {
              item.finish = !item.finish;
              item.finish
                ? // 三元不能写代码块？ 先++ --
                  ++itemList.todoDone && --itemList.todoUndone
                : ++itemList.todoUndone && --itemList.todoDone;
            }
            return item;
          });
        }
        return itemList;
      });
      return newState;
    }

    case TODO_ITEM_EDIT: {
      const editItem = state.list
        .find((item) => item.addDate === action.date)
        .listByDate.find((item) => item.id === action.id);
      const newState = {
        ...state,
        inputValue: editItem.todo,
        category: { ...editItem.category },
        priority: { ...editItem.priority },
        time: { ...editItem.time },
        editItem,
      };
      return newState;
    }

    case DELETE_TODO_ITEM: {
      const newState = JSON.parse(JSON.stringify(state));
      const newList = newState.list
        .map((itemList) => {
          if (itemList.addDate === action.date) {
            action.finish ? --itemList.todoDone : --itemList.todoUndone;
            const newListByDate = itemList.listByDate.filter(
              (item) => item.id !== action.id
            );
            return {
              addDate: itemList.addDate,
              todoDone: itemList.todoDone,
              todoUndone: itemList.todoUndone,
              listByDate: newListByDate,
            };
          }
          return itemList;
        })
        .filter((itemList) => itemList.listByDate.length > 0);
      return { ...newState, list: newList };
    }

    case TODO_FILTER: {
      const newState = {
        ...state,
        showState: action.filter,
      };
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
