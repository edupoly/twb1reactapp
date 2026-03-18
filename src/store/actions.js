import { ADDTODO, DEC, DELETETODO, INC } from "./constants";

export function incAction() {
  return { type: INC };
}

export function decAction() {
  return { type: DEC };
}

export function addTodoAction(ntd) {
  return { type: ADDTODO, payload: ntd };
}
export function deleteTodoAction(i) {
  return { type: DELETETODO, payload: i };
}
