import { ADD, DELETE } from "../constants/todos";

export const add = (data) => {
  return {
    data,
    type: ADD
  }
}

export const del = (id) => {
  // console.log("del--actions");
  return {
    id,
    type: DELETE
  }
}