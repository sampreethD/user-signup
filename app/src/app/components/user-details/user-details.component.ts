import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { IUserDetails } from 'src/app/interface/registration.interface';
import { CommonService } from 'src/app/services/common.service';

@Pipe({
  name: 'arrayToString',
})
export class ArrayToStringPipe implements PipeTransform {
  transform(array: any[], separator: string = ', '): string {
    if (!array || array.length === 0) {
      return '';
    }

    return array.map((item) => item.city + ' ' + item.state + ' ' + item.zipCode).join(separator);
  }

}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  userDetailsList: Array<IUserDetails> = [];
  displayedColumns: string[] = ['User Name', 'Email', 'Address', 'Action'];

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.loadUserDetails();
  }

  private loadUserDetails(): void {
    this.commonService.getUserDetails().subscribe(
      (list) => {
        this.userDetailsList = [...list];
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
  }

  removeColumn(index: number): void {
    if (index >= 0 && index < this.userDetailsList.length) {
      // Remove the item from the list
      this.userDetailsList.splice(index, 1);
      this.commonService.updateList(this.userDetailsList);
    }
  }
}
