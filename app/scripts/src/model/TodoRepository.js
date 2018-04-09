// Todo store
import Todo from "./Todo";

export default class TodoRepository{
  constructor(){
    this.store = [];
  }

  add(todo){
    this.store.push(todo);
  }

  getAll(){
    return this.store.map(e => e);
  }

  remove(todo){
    this.store = this.store.filter( td => td.description !== todo.description);
  }

  removeByIndex(index){
    this.store = this.store.filter( (e, i) => i !== index);
  }

  findByIndex(index){
    return this.store[index];
  }

  contains(todo){
    return this.store.filter(td => td.description === todo.description).length > 0;
  }

  size(){ return this.store.length; }

  showContent(){
    console.log(this.store);
  }
}
