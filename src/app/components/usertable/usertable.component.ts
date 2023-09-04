import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user.interface";
import { Observable } from "rxjs";
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  constructor(private apiService: ApiService) {

  }

  name: string = ''
  companyName: string = ''
  designation: string = ''
  userData!: Observable<User[]>
  ngOnInit(): void {
    this.userData = this.apiService.getUserData()
  }


}
