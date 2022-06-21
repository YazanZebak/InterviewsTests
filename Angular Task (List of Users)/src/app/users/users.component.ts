import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../models/user.model';
import { UsersService } from '../services/user.service';
import { FormControl } from '@angular/forms';
import { debounceTime,  startWith } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'avatar',
    'first_name',
    'last_name',
    'email',
  ];
  dataSource: MatTableDataSource<User> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  page: number = 1;
  per_page: number = 10;
  total: number = 0;

  loadingIndecator: boolean = false;
  noData: boolean = false; 

  filterControl = new FormControl();

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.onFetchUsers();

    this.filterControl.valueChanges.pipe(
        debounceTime(500),
    ).subscribe(value => {

         this.onFetchUsers(value);
    });
  }

  onFetchUsers(id ?: number) {
    this.loadingIndecator = true;

    this.usersService.getUsers(this.page, this.per_page, id).subscribe(
      (response) => {
        this.noData = false; 
        this.loadingIndecator = false;
        this.dataSource.data = response.data;
        this.total = response.total ?? this.total;
      },
      (error) => {
        this.loadingIndecator = false; 
        this.dataSource.data = [];
        this.noData = true; 
      }
    );
  }

  onPaginatorChange($event: any) {
    this.page = $event.pageIndex + 1;
    this.per_page = $event.pageSize;
    this.onFetchUsers();
  }

  onClickUser(user: User) {
    console.log(user);
    this.router.navigate([`user/${user.id}`]);
  }

}
