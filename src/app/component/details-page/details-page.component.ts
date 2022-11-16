import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  employeeDetails: any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.employeeDetails = JSON.parse(localStorage.getItem('employeeDetails') || '{}');
    let test = this.employeeDetails;
  }

  addNew() {
    this.router.navigate(['/form']);
  }

}
