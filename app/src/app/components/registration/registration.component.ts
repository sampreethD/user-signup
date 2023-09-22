import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserDetails } from 'src/app/interface/registration.interface';
import { CommonService } from 'src/app/services/common.service';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private commonService: CommonService,
    private errorHandlerService: ErrorHandlerService) {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      addresses: this.fb.array([]),
    });
    this.addItem();
  }

  get addresses() {
    return this.userForm.get('addresses') as FormArray;
  }

  addItem() {
    const address = this.fb.group({
      city: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      state: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      zipCode: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(5)]],
    });
    this.addresses.push(address);
  }

  removeItem(index: number) {
    this.addresses.removeAt(index);
  }

  getErrorForField(control: AbstractControl | null, fieldName:string): string {
   
    if (control && control.hasError('required')) {
      return this.errorHandlerService.handleRequiredError(fieldName);
    }

    if (control && control.hasError('pattern')) {
      const pattern = control.getError('pattern').requiredPattern;
      return this.errorHandlerService.handlePatternError(fieldName);
    }
    return '';
  }

  submitForm() {
    this.commonService.setUserDetails(this.userForm.value);
    this.userForm.reset({});
    
  }
}
