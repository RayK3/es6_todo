(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // assembles the app


var _Todo = require("./model/Todo");

var _Todo2 = _interopRequireDefault(_Todo);

var _TodoRepository = require("./model/TodoRepository");

var _TodoRepository2 = _interopRequireDefault(_TodoRepository);

var _TodoController = require("./controller/TodoController");

var _TodoController2 = _interopRequireDefault(_TodoController);

var _CommandLineRunner = require("./view/CommandLineRunner");

var _CommandLineRunner2 = _interopRequireDefault(_CommandLineRunner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.repo = new _TodoRepository2.default();
    this.controller = new _TodoController2.default(this.repo);
    this.commandLineRunner = new _CommandLineRunner2.default(this.controller);
  }

  _createClass(App, [{
    key: "run",
    value: function run() {
      this.commandLineRunner.run();
    }
  }, {
    key: "testRepo",
    value: function testRepo() {
      this.controller.testRepo();
    }
  }]);

  return App;
}();

exports.default = App;

},{"./controller/TodoController":2,"./model/Todo":4,"./model/TodoRepository":5,"./view/CommandLineRunner":6}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // imports someText in addition to default.


var _Todo = require("../model/Todo");

var _Todo2 = _interopRequireDefault(_Todo);

var _TodoRepository = require("../model/TodoRepository");

var _TodoRepository2 = _interopRequireDefault(_TodoRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// imports someText in addition to default.

var TodoController = function () {
  function TodoController(repository) {
    _classCallCheck(this, TodoController);

    this.repo = repository;
  }

  _createClass(TodoController, [{
    key: "create",
    value: function create(taskDescription) {
      var todo = new _Todo2.default(taskDescription);
      this.repo.add(todo);
    }
  }, {
    key: "delete",
    value: function _delete(index) {
      this.repo.removeByIndex(index);
    }
  }, {
    key: "markAsDone",
    value: function markAsDone(index) {
      console.log(this.repo);
      this.repo.findByIndex(index).done = true;
      this.repo.showContent();
    }
  }, {
    key: "getAllAsArray",
    value: function getAllAsArray() {
      var result = [];
      this.repo.getAll().forEach(function (td, index) {
        result.push("> " + (index + 1) + " ) " + td.description + " created " + td.created + ", done? " + td.done);
      });
      return result;
    }
  }, {
    key: "testRepo",
    value: function testRepo() {
      var todo = new _Todo2.default("first todo argument");
      var todo2 = new _Todo2.default("second todo argument");
      this.repo.add(todo);
      this.repo.add(todo2);

      console.log("contains? ", this.repo.contains(todo));
      console.log("contains2? ", this.repo.contains(todo2));
      console.log("size ", this.repo.size());

      console.log("\nrepo content after adding 2:\n");
      this.repo.showContent();

      this.repo.remove(todo);

      console.log("\nrepo content after removing first:\n");
      this.repo.showContent();

      console.log("contains? ", this.repo.contains(todo));
      console.log("size ", this.repo.size());

      this.repo.remove(todo2);

      console.log("\nrepo content after removing second:\n");
      this.repo.showContent();

      console.log("contains2? ", this.repo.contains(todo2));
      console.log("size ", this.repo.size());

      this.repo.showContent();
    }
  }]);

  return TodoController;
}();

exports.default = TodoController;

},{"../model/Todo":4,"../model/TodoRepository":5}],3:[function(require,module,exports){
"use strict";

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener("load", function () {
  return new _app2.default().run();
}); // runs the app

},{"./app":1}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Todo = function Todo(description) {
  _classCallCheck(this, Todo);

  this.description = description;
  this.created = new Date();
  this.done = false;
};

// export, in addition to default


exports.default = Todo;
var someText = "textVariableValue";
exports.someText = someText;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Todo store


var _Todo = require("./Todo");

var _Todo2 = _interopRequireDefault(_Todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoRepository = function () {
  function TodoRepository() {
    _classCallCheck(this, TodoRepository);

    this.store = [];
  }

  _createClass(TodoRepository, [{
    key: "add",
    value: function add(todo) {
      this.store.push(todo);
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return this.store.map(function (e) {
        return e;
      });
    }
  }, {
    key: "remove",
    value: function remove(todo) {
      this.store = this.store.filter(function (td) {
        return td.description !== todo.description;
      });
    }
  }, {
    key: "removeByIndex",
    value: function removeByIndex(index) {
      this.store = this.store.filter(function (e, i) {
        return i !== index;
      });
    }
  }, {
    key: "findByIndex",
    value: function findByIndex(index) {
      return this.store[index];
    }
  }, {
    key: "contains",
    value: function contains(todo) {
      return this.store.filter(function (td) {
        return td.description === todo.description;
      }).length > 0;
    }
  }, {
    key: "size",
    value: function size() {
      return this.store.length;
    }
  }, {
    key: "showContent",
    value: function showContent() {
      console.log(this.store);
    }
  }]);

  return TodoRepository;
}();

exports.default = TodoRepository;

},{"./Todo":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Todo = require("../model/Todo");

var _Todo2 = _interopRequireDefault(_Todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import TodoRepository from "../model/TodoRepository";
// import TodoController from "../controller/TodoController";


var CommandLineRunner = function () {
  function CommandLineRunner(controller) {
    _classCallCheck(this, CommandLineRunner);

    this.controller = controller;
    this.controller.create("buy milk");
    this.controller.create("wash car");
  }

  _createClass(CommandLineRunner, [{
    key: "showTodos",
    value: function showTodos() {
      var table = document.getElementById('table');
      var tableHTML = '';
      tableHTML += "<tr>\n                    <th>Todo</th>\n                  </tr>";
      this.controller.getAllAsArray().forEach(function (e) {
        tableHTML += "<tr>\n                      <td>" + e + "</td>\n                    </tr>";
      });
      table.innerHTML = tableHTML;
    }
  }, {
    key: "modify",
    value: function modify(itemIndex, action) {
      if (action === 1) {
        this.controller.delete(itemIndex);
      } else if (action === 2) {
        this.controller.markAsDone(itemIndex);
      }
    }
  }, {
    key: "processInput",
    value: function processInput(self) {
      var itemToModify = document.getElementById("itemToModify").value;
      var actionChoice = document.getElementById("actionChoice").value;
      if (!itemToModify || !actionChoice) {
        return;
      } else {
        itemToModify = parseInt(itemToModify) - 1;
        actionChoice = parseInt(actionChoice);
        self.modify(itemToModify, actionChoice);
        self.showTodos();
      }
    }
  }, {
    key: "run",
    value: function run() {
      var submitButton = document.getElementById("submit");
      var self = this;
      submitButton.addEventListener("click", function () {
        return self.processInput(self);
      });
      this.showTodos();
    }
  }]);

  return CommandLineRunner;
}();

exports.default = CommandLineRunner;

},{"../model/Todo":4}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFwcC9zY3JpcHRzL3NyYy9hcHAuanMiLCJhcHAvc2NyaXB0cy9zcmMvY29udHJvbGxlci9Ub2RvQ29udHJvbGxlci5qcyIsImFwcC9zY3JpcHRzL3NyYy9tYWluLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21vZGVsL1RvZG8uanMiLCJhcHAvc2NyaXB0cy9zcmMvbW9kZWwvVG9kb1JlcG9zaXRvcnkuanMiLCJhcHAvc2NyaXB0cy9zcmMvdmlldy9Db21tYW5kTGluZVJ1bm5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztxakJDQUE7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztJQUdNLEc7QUFDSixpQkFBYTtBQUFBOztBQUNYLFNBQUssSUFBTCxHQUFZLDhCQUFaO0FBQ0EsU0FBSyxVQUFMLEdBQWtCLDZCQUFtQixLQUFLLElBQXhCLENBQWxCO0FBQ0EsU0FBSyxpQkFBTCxHQUF5QixnQ0FBc0IsS0FBSyxVQUEzQixDQUF6QjtBQUNEOzs7OzBCQUVJO0FBQ0gsV0FBSyxpQkFBTCxDQUF1QixHQUF2QjtBQUNEOzs7K0JBRVM7QUFDUixXQUFLLFVBQUwsQ0FBZ0IsUUFBaEI7QUFDRDs7Ozs7O2tCQUdZLEc7Ozs7Ozs7OztxakJDdkJtQjs7O0FBQWxDOzs7O0FBQ0E7Ozs7Ozs7O0FBQXNEOztJQUVqQyxjO0FBQ25CLDBCQUFZLFVBQVosRUFBdUI7QUFBQTs7QUFDckIsU0FBSyxJQUFMLEdBQVksVUFBWjtBQUNEOzs7OzJCQUVNLGUsRUFBZ0I7QUFDckIsVUFBSSxPQUFPLG1CQUFTLGVBQVQsQ0FBWDtBQUNBLFdBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxJQUFkO0FBQ0Q7Ozs0QkFFTSxLLEVBQU07QUFDWCxXQUFLLElBQUwsQ0FBVSxhQUFWLENBQXdC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LFVBQUwsQ0FBZ0IsTUFBaEIsQ0FBdUIsU0FBdkI7QUFDRCxPQUZELE1BRU8sSUFBRyxXQUFXLENBQWQsRUFBZ0I7QUFDckIsYUFBSyxVQUFMLENBQWdCLFVBQWhCLENBQTJCLFNBQTNCO0FBQ0Q7QUFDRjs7O2lDQUNZLEksRUFBSztBQUNoQixVQUFJLGVBQWUsU0FBUyxjQUFULENBQXdCLGNBQXhCLEVBQXdDLEtBQTNEO0FBQ0EsVUFBSSxlQUFlLFNBQVMsY0FBVCxDQUF3QixjQUF4QixFQUF3QyxLQUEzRDtBQUNBLFVBQUcsQ0FBQyxZQUFELElBQWlCLENBQUMsWUFBckIsRUFBbUM7QUFDakM7QUFDRCxPQUZELE1BRU87QUFDTCx1QkFBZSxTQUFTLFlBQVQsSUFBeUIsQ0FBeEM7QUFDQSx1QkFBZSxTQUFTLFlBQVQsQ0FBZjtBQUNBLGFBQUssTUFBTCxDQUFZLFlBQVosRUFBMEIsWUFBMUI7QUFDQSxhQUFLLFNBQUw7QUFDRDtBQUNGOzs7MEJBRUk7QUFDSCxVQUFJLGVBQWUsU0FBUyxjQUFULENBQXdCLFFBQXhCLENBQW5CO0FBQ0EsVUFBSSxPQUFPLElBQVg7QUFDQSxtQkFBYSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxZQUFXO0FBQUUsZUFBTyxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBUDtBQUFpQyxPQUFyRjtBQUNBLFdBQUssU0FBTDtBQUNEOzs7Ozs7a0JBN0NrQixpQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIGFzc2VtYmxlcyB0aGUgYXBwXHJcbmltcG9ydCBUb2RvIGZyb20gXCIuL21vZGVsL1RvZG9cIjtcclxuaW1wb3J0IFRvZG9SZXBvc2l0b3J5IGZyb20gXCIuL21vZGVsL1RvZG9SZXBvc2l0b3J5XCI7XHJcbmltcG9ydCBUb2RvQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVyL1RvZG9Db250cm9sbGVyXCI7XHJcbmltcG9ydCBDb21tYW5kTGluZVJ1bm5lciBmcm9tIFwiLi92aWV3L0NvbW1hbmRMaW5lUnVubmVyXCI7XHJcblxyXG5cclxuY2xhc3MgQXBwe1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLnJlcG8gPSBuZXcgVG9kb1JlcG9zaXRvcnkoKTtcclxuICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBUb2RvQ29udHJvbGxlcih0aGlzLnJlcG8pO1xyXG4gICAgdGhpcy5jb21tYW5kTGluZVJ1bm5lciA9IG5ldyBDb21tYW5kTGluZVJ1bm5lcih0aGlzLmNvbnRyb2xsZXIpO1xyXG4gIH1cclxuXHJcbiAgcnVuKCl7XHJcbiAgICB0aGlzLmNvbW1hbmRMaW5lUnVubmVyLnJ1bigpO1xyXG4gIH1cclxuXHJcbiAgdGVzdFJlcG8oKXtcclxuICAgIHRoaXMuY29udHJvbGxlci50ZXN0UmVwbygpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi4vbW9kZWwvVG9kb1wiOyAvLyBpbXBvcnRzIHNvbWVUZXh0IGluIGFkZGl0aW9uIHRvIGRlZmF1bHQuXHJcbmltcG9ydCBUb2RvUmVwb3NpdG9yeSBmcm9tIFwiLi4vbW9kZWwvVG9kb1JlcG9zaXRvcnlcIjsgLy8gaW1wb3J0cyBzb21lVGV4dCBpbiBhZGRpdGlvbiB0byBkZWZhdWx0LlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0NvbnRyb2xsZXJ7XHJcbiAgY29uc3RydWN0b3IocmVwb3NpdG9yeSl7XHJcbiAgICB0aGlzLnJlcG8gPSByZXBvc2l0b3J5O1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKHRhc2tEZXNjcmlwdGlvbil7XHJcbiAgICBsZXQgdG9kbyA9IG5ldyBUb2RvKHRhc2tEZXNjcmlwdGlvbik7XHJcbiAgICB0aGlzLnJlcG8uYWRkKHRvZG8pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlKGluZGV4KXtcclxuICAgIHRoaXMucmVwby5yZW1vdmVCeUluZGV4KGluZGV4KTtcclxuICB9XHJcblxyXG4gIG1hcmtBc0RvbmUoaW5kZXgpe1xyXG4gICAgY29uc29sZS5sb2codGhpcy5yZXBvKTtcclxuICAgIHRoaXMucmVwby5maW5kQnlJbmRleChpbmRleCkuZG9uZSA9IHRydWU7XHJcbiAgICB0aGlzLnJlcG8uc2hvd0NvbnRlbnQoKTtcclxuICB9XHJcblxyXG4gIGdldEFsbEFzQXJyYXkoKXtcclxuICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgIHRoaXMucmVwby5nZXRBbGwoKS5mb3JFYWNoKGZ1bmN0aW9uKHRkLCBpbmRleCkge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKGA+ICR7aW5kZXgrMX0gKSAke3RkLmRlc2NyaXB0aW9ufSBjcmVhdGVkICR7dGQuY3JlYXRlZH0sIGRvbmU/ICR7dGQuZG9uZX1gKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHRlc3RSZXBvKCl7XHJcbiAgICBsZXQgdG9kbyA9IG5ldyBUb2RvKFwiZmlyc3QgdG9kbyBhcmd1bWVudFwiKTtcclxuICAgIGxldCB0b2RvMiA9IG5ldyBUb2RvKFwic2Vjb25kIHRvZG8gYXJndW1lbnRcIik7XHJcbiAgICB0aGlzLnJlcG8uYWRkKHRvZG8pO1xyXG4gICAgdGhpcy5yZXBvLmFkZCh0b2RvMik7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJjb250YWlucz8gXCIsdGhpcy5yZXBvLmNvbnRhaW5zKHRvZG8pKTtcclxuICAgIGNvbnNvbGUubG9nKFwiY29udGFpbnMyPyBcIix0aGlzLnJlcG8uY29udGFpbnModG9kbzIpKTtcclxuICAgIGNvbnNvbGUubG9nKFwic2l6ZSBcIiwgdGhpcy5yZXBvLnNpemUoKSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJcXG5yZXBvIGNvbnRlbnQgYWZ0ZXIgYWRkaW5nIDI6XFxuXCIpXHJcbiAgICB0aGlzLnJlcG8uc2hvd0NvbnRlbnQoKTtcclxuXHJcbiAgICB0aGlzLnJlcG8ucmVtb3ZlKHRvZG8pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiXFxucmVwbyBjb250ZW50IGFmdGVyIHJlbW92aW5nIGZpcnN0OlxcblwiKVxyXG4gICAgdGhpcy5yZXBvLnNob3dDb250ZW50KCk7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiY29udGFpbnM/IFwiLHRoaXMucmVwby5jb250YWlucyh0b2RvKSlcclxuICAgIGNvbnNvbGUubG9nKFwic2l6ZSBcIiwgdGhpcy5yZXBvLnNpemUoKSk7XHJcblxyXG4gICAgdGhpcy5yZXBvLnJlbW92ZSh0b2RvMik7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJcXG5yZXBvIGNvbnRlbnQgYWZ0ZXIgcmVtb3Zpbmcgc2Vjb25kOlxcblwiKVxyXG4gICAgdGhpcy5yZXBvLnNob3dDb250ZW50KCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJjb250YWluczI/IFwiLHRoaXMucmVwby5jb250YWlucyh0b2RvMikpXHJcbiAgICBjb25zb2xlLmxvZyhcInNpemUgXCIsIHRoaXMucmVwby5zaXplKCkpO1xyXG5cclxuICAgIHRoaXMucmVwby5zaG93Q29udGVudCgpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBydW5zIHRoZSBhcHBcclxuXHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsXHJcbiAgKCkgPT4gKG5ldyBBcHAoKS5ydW4oKSkpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAgY2xhc3MgVG9kb3tcclxuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbil7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmNyZWF0ZWQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdGhpcy5kb25lID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQsIGluIGFkZGl0aW9uIHRvIGRlZmF1bHRcclxubGV0IHNvbWVUZXh0ID0gXCJ0ZXh0VmFyaWFibGVWYWx1ZVwiO1xyXG5leHBvcnQge3NvbWVUZXh0fTtcclxuIiwiLy8gVG9kbyBzdG9yZVxyXG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9Ub2RvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvUmVwb3NpdG9yeXtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy5zdG9yZSA9IFtdO1xyXG4gIH1cclxuXHJcbiAgYWRkKHRvZG8pe1xyXG4gICAgdGhpcy5zdG9yZS5wdXNoKHRvZG8pO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsKCl7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5tYXAoZSA9PiBlKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZSh0b2RvKXtcclxuICAgIHRoaXMuc3RvcmUgPSB0aGlzLnN0b3JlLmZpbHRlciggdGQgPT4gdGQuZGVzY3JpcHRpb24gIT09IHRvZG8uZGVzY3JpcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQnlJbmRleChpbmRleCl7XHJcbiAgICB0aGlzLnN0b3JlID0gdGhpcy5zdG9yZS5maWx0ZXIoIChlLCBpKSA9PiBpICE9PSBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBmaW5kQnlJbmRleChpbmRleCl7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZVtpbmRleF07XHJcbiAgfVxyXG5cclxuICBjb250YWlucyh0b2RvKXtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmZpbHRlcih0ZCA9PiB0ZC5kZXNjcmlwdGlvbiA9PT0gdG9kby5kZXNjcmlwdGlvbikubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIHNpemUoKXsgcmV0dXJuIHRoaXMuc3RvcmUubGVuZ3RoOyB9XHJcblxyXG4gIHNob3dDb250ZW50KCl7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0b3JlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4uL21vZGVsL1RvZG9cIjtcclxuLy8gaW1wb3J0IFRvZG9SZXBvc2l0b3J5IGZyb20gXCIuLi9tb2RlbC9Ub2RvUmVwb3NpdG9yeVwiO1xyXG4vLyBpbXBvcnQgVG9kb0NvbnRyb2xsZXIgZnJvbSBcIi4uL2NvbnRyb2xsZXIvVG9kb0NvbnRyb2xsZXJcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tYW5kTGluZVJ1bm5lcntcclxuICBjb25zdHJ1Y3Rvcihjb250cm9sbGVyKSB7XHJcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xyXG4gICAgdGhpcy5jb250cm9sbGVyLmNyZWF0ZShcImJ1eSBtaWxrXCIpO1xyXG4gICAgdGhpcy5jb250cm9sbGVyLmNyZWF0ZShcIndhc2ggY2FyXCIpO1xyXG4gIH1cclxuXHJcbiAgc2hvd1RvZG9zKCl7XHJcbiAgICB2YXIgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGUnKTtcclxuICAgIHZhciB0YWJsZUhUTUwgPSAnJztcclxuICAgIHRhYmxlSFRNTCArPSBgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Ub2RvPC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5gO1xyXG4gICAgdGhpcy5jb250cm9sbGVyLmdldEFsbEFzQXJyYXkoKS5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICB0YWJsZUhUTUwgKz0gYDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPmA7XHJcbiAgICB9KTtcclxuICAgIHRhYmxlLmlubmVySFRNTCA9IHRhYmxlSFRNTDtcclxuICB9XHJcbiAgbW9kaWZ5KGl0ZW1JbmRleCwgYWN0aW9uKXtcclxuICAgIGlmKGFjdGlvbiA9PT0gMSl7XHJcbiAgICAgIHRoaXMuY29udHJvbGxlci5kZWxldGUoaXRlbUluZGV4KTtcclxuICAgIH0gZWxzZSBpZihhY3Rpb24gPT09IDIpe1xyXG4gICAgICB0aGlzLmNvbnRyb2xsZXIubWFya0FzRG9uZShpdGVtSW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwcm9jZXNzSW5wdXQoc2VsZil7XHJcbiAgICB2YXIgaXRlbVRvTW9kaWZ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtVG9Nb2RpZnlcIikudmFsdWU7XHJcbiAgICB2YXIgYWN0aW9uQ2hvaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3Rpb25DaG9pY2VcIikudmFsdWU7XHJcbiAgICBpZighaXRlbVRvTW9kaWZ5IHx8ICFhY3Rpb25DaG9pY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXRlbVRvTW9kaWZ5ID0gcGFyc2VJbnQoaXRlbVRvTW9kaWZ5KSAtIDE7XHJcbiAgICAgIGFjdGlvbkNob2ljZSA9IHBhcnNlSW50KGFjdGlvbkNob2ljZSk7XHJcbiAgICAgIHNlbGYubW9kaWZ5KGl0ZW1Ub01vZGlmeSwgYWN0aW9uQ2hvaWNlKTtcclxuICAgICAgc2VsZi5zaG93VG9kb3MoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJ1bigpe1xyXG4gICAgdmFyIHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNlbGYucHJvY2Vzc0lucHV0KHNlbGYpOyB9KTtcclxuICAgIHRoaXMuc2hvd1RvZG9zKCk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19
