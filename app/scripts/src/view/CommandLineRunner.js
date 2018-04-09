import Todo from "../model/Todo";
// import TodoRepository from "../model/TodoRepository";
// import TodoController from "../controller/TodoController";


export default class CommandLineRunner{
  constructor(controller) {
    this.controller = controller;
    this.controller.create("buy milk");
    this.controller.create("wash car");
  }

  showTodos(){
    var table = document.getElementById('table');
    var tableHTML = '';
    tableHTML += `<tr>
                    <th>Todo</th>
                  </tr>`;
    this.controller.getAllAsArray().forEach(e => {
      tableHTML += `<tr>
                      <td>${e}</td>
                    </tr>`;
    });
    table.innerHTML = tableHTML;
  }
  modify(itemIndex, action){
    if(action === 1){
      this.controller.delete(itemIndex);
    } else if(action === 2){
      this.controller.markAsDone(itemIndex);
    }
  }
  processInput(self){
    var itemToModify = document.getElementById("itemToModify").value;
    var actionChoice = document.getElementById("actionChoice").value;
    if(!itemToModify || !actionChoice) {
      return;
    } else {
      itemToModify = parseInt(itemToModify) - 1;
      actionChoice = parseInt(actionChoice);
      self.modify(itemToModify, actionChoice);
      self.showTodos();
    }
  }

  run(){
    var submitButton = document.getElementById("submit");
    var self = this;
    submitButton.addEventListener("click", function() { return self.processInput(self); });
    this.showTodos();
  }


}
