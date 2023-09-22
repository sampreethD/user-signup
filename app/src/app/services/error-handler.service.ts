import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor() {}

  handleRequiredError(fieldName: string): string {
    return `${fieldName} is required.`;
  }

  handlePatternError(fieldName: string): string {
    return `${fieldName} does not match required format`;
  }
}
