import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  private errorMessages: { [key: string]: string } = {};
}
