// assembles the app
import Todo from "./model/Todo"; // imports someText in addition to default.
import TodoRepository from "./model/TodoRepository"; // imports someText in addition to default.


class App{
  constructor(){
    this.repo = new TodoRepository();
    this.todo = new Todo("first todo argument");
    this.repo.add(this.todo);
    console.log("contains? ",this.repo.contains(this.todo))
    console.log("size ", this.repo.size());
    this.repo.showContent();
    this.repo.remove(this.todo);
    console.log("contains? ",this.repo.contains(this.todo))
    console.log("size ", this.repo.size());
    this.repo.showContent();
  }
}

export default App;
