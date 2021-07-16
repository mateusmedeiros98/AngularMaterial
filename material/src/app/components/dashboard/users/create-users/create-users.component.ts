import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { user } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

sexo: any[]=['Masculino','Feminino']

form: FormGroup;

  constructor(private fb: FormBuilder, 
              private _userService: UsersService,
              private router: Router,
              private _snackBar: MatSnackBar) { 
    this.form = this.fb.group({
      user: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],


    })
     
    
  }

  ngOnInit(): void {
  }

  addUser(){
    

    const user: user ={
      user: this.form.value.user,
      name: this.form.value.name,
      lastName: this.form.value.lastName,
      gender: this.form.value.gender,

    }

    this._userService.addUser(user);
    this.router.navigate(['/dashboard/users'])

    this._snackBar.open('Usuário adicionado com sucesso', '',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })


  }

}
