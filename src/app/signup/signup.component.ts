import { Component } from '@angular/core';


@Component({
    selector: 'signup-div',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    gender: string[] = ['Male', 'Female'];
}
