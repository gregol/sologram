import { createReducer } from "@reduxjs/toolkit";
import { Post } from "../../../../posts/domain/post.entity";
import {loadState} from "../../manageLocalStorage";
import { actionCreators } from "./actions";


const data = loadState();

const initialState =  { 
  items: data?.items ?? [],
  isLogged: data?.isLogged ?? false, 
  user: data?.user ?? {} 
}


export default createReducer(initialState, {
  
  [actionCreators.addToList]: (state: any, action: any) => {
    state.items.push(action.payload)
  },

  [actionCreators.like]: (state: any, action: any) => {
    const index = state.items.findIndex((post: Post) => post.id === action.payload); //finding index of the item
    const newArray = [...state.items]; //making a new array
    if(newArray[index]){
      newArray[index].isLiked = true; //changing value in the new array
      newArray[index].likeCount = newArray[index].likeCount + 1; //changing value in the new array
      state.items = newArray;
    }
    
  },
  [actionCreators.removeItem]: (state: any, action: any) => {
    state.items = state.items.filter((item: any, index: any) => index !== action.payload);
  },
  [actionCreators.clearItems]: (state: any, action: any) => {
    state.items = [];
  },
  [actionCreators.login]: (state: any, action: any) => {
    state.isLogged = true;
    state.user.email = action.payload.email;
    state.user.name = action.payload.name;
    state.user.age = action.payload.age;
  },
  [actionCreators.logout]: (state: any, action: any) => {
    state.isLogged = false;
    state.user = {};
  },
});

const fakeUser = {
  name: 'Gregorio',
  lastName: 'Escalona',
  email: 'escalona@gmail.com',
  age: 36,

}
export const fakeLoginRequest = (username: string, password: string) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      (username === "gregol" && password === "123456") ? resolve(fakeUser) : reject("User or password incorrect");
    }, 1000),
  );