app.service( 'StudentService' , function ($http) {
    //Create new record
    this.post = function (Student) {
        var request = $http({
            method: "post" ,
            url: "/api/StudentsAPI",
            data: Student
        });
        return request;
    }
    //Get Single Records
    this.get = function (Id) {
        return $http.get( "/api/StudentsAPI/" + Id);
    }
    //Get All Students
    this.getStudents = function () {
        return $http.get( "/api/StudentsAPI" );
    }
    //Update the Record
    this.put = function (Id, Student) {
        var request = $http({
            method: "put" ,
            url: "/api/StudentsAPI/" + Id,
            data: Student
        });
        return request;
    }
    //Delete the Record
    this.delete = function (Id) {
        var request = $http({
            method: "delete" ,
            url: "/api/StudentsAPI/" + Id
        });
        return request;
    }
});