import { Injectable } from '@angular/core';
import { user } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  ListUsers: user[] = [
    {user: '@jp' , name: 'José', lastName: 'Paulo', gender: 'Masculino'},
    {user: 'Msilva' , name: 'Maria', lastName: 'Silva', gender: 'Feminino'},
    {user: 'MatMed' , name: 'Mateus', lastName: 'Medeiros', gender: 'Masculino'},
    {user: 'Mari' , name: 'Marina', lastName: 'Oliveira', gender: 'Feminino'},
    {user: '@one' , name: 'Monkey ', lastName: 'Lufy', gender: 'Masculino'},  


  ];

  constructor() { }

  getUsers(){
    return this.ListUsers.slice();
  }

  deleteUser(index: number){
    this.ListUsers.splice(index, 1);
    
  }

  addUser(user: user){
    this.ListUsers.unshift(user);
  }

}
