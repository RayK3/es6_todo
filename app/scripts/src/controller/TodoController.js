import Todo from "../model/Todo"; // imports someText in addition to default.
import TodoRepository from "../model/TodoRepository"; // imports someText in addition to default.

export default class TodoController{
  constructor(repository){
    this.repo = repository;
  }

  create(taskDescription){
    let todo = new Todo(taskDescription);
    this.repo.add(todo);
  }

  delete(index){
    this.repo.removeByIndex(index);
  }

  markAsDone(index){
    console.log(this.repo);
    this.repo.findByIndex(index).done = true;
    this.repo.showContent();
  }

  getAllAsArray(){
    let result = [];
    this.repo.getAll().forEach(function(td, index) {
        result.push(`> ${index+1} ) ${td.description} created ${td.created}, done? ${td.done}`);
    });
    return result;
  }

  testRepo(){
    let todo = new Todo("first todo argument");
    let todo2 = new Todo("second todo argument");
    this.repo.add(todo);
    this.repo.add(todo2);

    console.log("contains? ",this.repo.contains(todo));
    console.log("contains2? ",this.repo.contains(todo2));
    console.log("size ", this.repo.size());

    console.log("\nrepo content after adding 2:\n")
    this.repo.showContent();

    this.repo.remove(todo);

    console.log("\nrepo content after removing first:\n")
    this.repo.showContent();


    console.log("contains? ",this.repo.contains(todo))
    console.log("size ", this.repo.size());

    this.repo.remove(todo2);

    console.log("\nrepo content after removing second:\n")
    this.repo.showContent();

    console.log("contains2? ",this.repo.contains(todo2))
    console.log("size ", this.repo.size());

    this.repo.showContent();
  }
}
