import { Injectable } from '@angular/core';

@Injectable()
export class DbService {

  students = [
    {_id: 1, name: 'Tsoodol Tserendorj', stuId: 986090, email: 'tsoodol@gmail.com', img: 'https://www.w3schools.com/w3images/team2.jpg'},
    {_id: 2, name: 'Asaad Saad', stuId: 986091, email: 'asaad@gmail.com', img: 'https://s3.amazonaws.com/aspph-wp-production/app/uploads/2017/03/Ans-.jpg'},
    {_id: 3, name: 'Molomjamts', stuId: 986092, email: 'mo@gmail.com', img: 'https://imageproxy.themaven.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fmaven-user-photos%2Ftheresurgent%2Fcontributors%2FVpF4E1XMkESPm9Nv98WpRg%2FDLZbSevhdEuOxNcxh8_y4A'},
  ];

  constructor() { }

  getData(){
    return this.students;
  }

  getStudentById(sid:number) {
    return this.students.find( (student) => student.stuId == sid );
  }
}
