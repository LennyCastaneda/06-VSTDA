// In this project you are going to build a Todo app using AngularJS that allows users to enter their todo items and prioritize them based on their importance.
angular
    .module('todoListApp', [])
    //This controller's functions will only work in part of the application we allowed it to.
    //In order to create a function that can be used to altered by the application we attach it to $scope object.
    //Controller talks to services within the module.
    .controller('mainCtrl', function(todosFactory) {
    	var vm = this; 
        vm.todos = [];

    	//Within the same scope of the controller, create a blankTodo variable and assign it an object with a parameter task with a blank string and parameter: priority and set default priority to normal, which is the name of my id for priorities in html.
    	//Stores a new task item inputted by user into this blankTodo object.
    	vm.blankTodo = {
    		task: '',
    		priority: ''
    	};

       // activate();

        /////////

        // function activate() {
        //   todosFactory.getTodos().then(
        //     function(todos) {
        //       vm.todos = todos;
        //     },
        //     function(error) {
        //         alert('Error getting todos');
        //     }
        //   );
        // }

    	
    	vm.addTodo = function() {
    		//blank variable is helpful to the human reading it.
    		//Use Angular's core .copy function and take the blankTodo from within the controller's scope and assign it to copyOfBlankTodo variable.
    		var copyOfBlankTodo = angular.copy(vm.blankTodo); 
    		//Then take the copyOfBlankTodo as an argument to the core .push function and push that object into the todos[] array
    		vmtodos.push(copyOfBlankTodo);  
    		// $scope.todos.push(angular.copy($scope.blankTodo)); //<----a Shorthand way of pushing this object into the todos[] array
    		vm.taskPriority = angular.taskPriority;
    		//Aftet the addTodo button function is fired and a new task with priority is added to the list, then this $scope's blankTodo object is cleared with a blank object ready for user to enter a new task.
    		vm.blankTodo={};
    	};
});