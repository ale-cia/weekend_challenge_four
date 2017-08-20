var app = angular.module('EmployeeApp', []);

app.controller('EmployeeController', ['$http', function ($http) {
    console.log('Employee Controller has been loaded');
    var self = this;
    self.employees = [];
    


    self.getEmployeeInfo = function() {
        $http({
            method: 'GET',
            url: '/employees'
        }).then(function (response) {
            console.log(response);
            console.log(response.data);
            self.employees = response.data;
        }); // end of $http
    }; // end of getMessages

    self.postNewEmployee = function() {
        $http({
            method: 'POST',
            url: '/employees',
            data: self.newEmployee
        }).then(function(response){
            console.log(response);
            self.getEmployeeInfo();
            self.employees = {};            
        }); // end of $http
    }; // end of getMessages

    self.monthlySalary = function() {
        $http({
            method: 'GET',
            url: '/employees/salary'
        }).then(function (response) {
            console.log(response);
            console.log(response.data);
            self.sum = response.data[0].sum;

        }); // end of $http
    }; // end of getMessages
    
    self.getEmployeeInfo();
    self.monthlySalary();
    
    }]);