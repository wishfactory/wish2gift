import { Component } from '@angular/core';

const DEFAULT_TAGS = ['#Sports', '#Adventure', '#Toys', '#Handicraft', '#Electronics'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Wish2Gift';
  maritalStatus = ['Single', 'Married'];
  workingStatus = ['Student', 'Professional', 'Government'];
  gender = ['Male', 'Female'];
  defaultTags = ['#Sports', '#Adventure', '#Toys', '#Handicraft', '#Electronics'];
  descTags = [];
  onDefaultSelect(tag: string) {
   this.descTags.push(tag);
   const index: number = this.defaultTags.indexOf(tag);
   if (index !== -1) {
    this.defaultTags.splice(index, 1);
   }
  }
  onKey(event: any) {
    if (event.key === ' ') {
      this.descTags.push(event.target.value);
      event.target.value = '';
    }
  }
  onDescSelect(tag: string) {
   if (DEFAULT_TAGS.indexOf(tag) !== -1) {
    this.defaultTags.push(tag);
   }
   const index: number = this.descTags.indexOf(tag);
   if (index !== -1) {
    this.descTags.splice(index, 1);
   }
  }
}
