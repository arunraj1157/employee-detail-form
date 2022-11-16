import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {

  isFormSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.addContact("");
  }
  employeeForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    dob: ['', Validators.required],
    role: [null, Validators.required],
    phone: this.fb.array([]),
    gender: ['', Validators.required],
  });

  submitDetails(data: UntypedFormGroup) {
    const dataToStore: Employee = {
      name: data.get('name')?.value,
      address: data.get('address')?.value,
      dob: data.get('dob')?.value,
      role: data.get('role')?.value,
      gender: data.get('gender')?.value,
      phoneNumbers: data.get('phone')?.value
    };

    if (this.employeeForm.valid) {

      let savedDetails = JSON.parse(localStorage.getItem('employeeDetails') || '[]');

      if (savedDetails != null)
        savedDetails.push(dataToStore);

      savedDetails = savedDetails != null ? savedDetails : [dataToStore];

      localStorage.setItem('employeeDetails', JSON.stringify(savedDetails));

      this.router.navigate(['/details']);
    }

  }

  get userFormGroups() {
    return this.employeeForm.get('phone') as FormArray
  }

  addContact(number: string) {
    let phoneNumbers = this.employeeForm.get('phone') as FormArray;
    phoneNumbers.push(this.fb.group({
      phoneNumber: [number],
    }));
  }

}

interface Employee {
  name: string;
  address: string;
  dob: string;
  phoneNumbers: [];
  role: string;
  gender: string;
}
