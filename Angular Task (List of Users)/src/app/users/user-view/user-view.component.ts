import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  userId: number = 0;
  user!: User; 

  loadingIndecator: boolean = false;

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
      this.userId = this.activatedRoute.snapshot.params['id'];

      this.loadingIndecator = true;

      this.usersService.getUser(this.userId).subscribe(
          response => { 
              this.user = response;
              this.loadingIndecator = false;
          },
          error => { 
               this.loadingIndecator = false;
               console.error(error);
          }
      );
  }

  onBack() { 
      this.location.back();
  } 

}
