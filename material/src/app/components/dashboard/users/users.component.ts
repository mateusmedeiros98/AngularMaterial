import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { user } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  listUsers: user[] = [];


  displayedColumns: string[] = ['user', 'name', 'lastName', 'gender', 'act'  ];
  dataSource!: MatTableDataSource<any>

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _userService: UsersService,  private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.listUsers = this._userService.getUsers();
    this.dataSource = new MatTableDataSource(this.listUsers)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteUser(index: number) {
    console.log(index);
  
    this._userService.deleteUser(index);
    this.loadUsers();

    this._snackBar.open('Usuário excluido com sucesso', '',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }


}


