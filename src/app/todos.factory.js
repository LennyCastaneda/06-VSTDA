(function() {
    'use strict';

    angular
        .module('todoListApp')
        .factory('todosFactory', todosFactory);

    todosFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    // Passing in the topspotsFactory function into the .factory function.
    function todosFactory($http, $q) {
        var service = {
            // Define getTopSpots function here.
            getTodos: getTodos,
            addTodos: addTodos
        };

        return service;

        ////////////////

        function getTodos() {
            var defer = $q.defer();

            // Use $http.get function passing in the API URL location.
            // In this case URL location is local host from Visual Studio C#
            $http.get('http://localhost:58367/api/todos')
                // Use .success callback function to that gets the JSON object back as its first argument
                .then(function(response) {
                        defer.resolve(response.data);
                    },
                    function(error) {
                        defer.reject(error);
                        //  Do some error handling here
                        alert('There was a problem with the http server. Please check your file and try again.');
                    }
                );
            // This defer promise variable runs before the .success callback function.
            return defer.promise;
        }

        ////////////////

        function addTodos(todo) {
            var defer = $q.defer();
            // Use $http.get function passing two arguments, the API URL & object post 'topspot' which gets sent with the body in the http request.
            $http.post('http://localhost:58367/api/todos', todo)
                // Use .success callback function to that gets the JSON object back as its first argument
                .then(function(response) {
                        defer.resolve(response.data);                     
                    },
                    function(error) {
                        defer.reject(error);
                        //  Do some error handling here
                        alert('There was a problem with the http server. Please check your file and try again.');
                    }
                );
            // This defer promise variable runs before the .success callback function.
            return defer.promise;
        }        
    }
})();
