import { Component } from '@angular/core';


const DEFAULT_TAGS = ['#Sports', '#Adventure', '#Toys', '#Handicraft', '#Electronics'];


@Component(
    {
        selector: 'form-div',
        templateUrl: './form.component.html',
        styleUrls: ['./form.component.css']
    }
)

export class FormComponent {
    title: string = 'Wish2Gift';
    maritalStatus: string[] = ['Single', 'Married'];
    workingStatus: string[] = ['Student', 'Professional', 'Government'];
    gender: string[] = ['Male', 'Female'];
    defaultTags: string[] = ['#Sports', '#Adventure', '#Toys', '#Handicraft', '#Electronics'];
    descTags: string[] = [];
    onDefaultSelect(tag: string) {
        this.descTags.push(tag);
        const index: number = this.defaultTags.indexOf(tag);
        if (index !== -1) {
            this.defaultTags.splice(index, 1);
        }
    }
    onKey(event: any) {
        if (event.keyCode === (13) || event.keyCode === (32) ){
            if(event.target.value[0]==='#'){
            this.descTags.push(event.target.value);
            event.target.value = '';
            }else{
                this.descTags.push('#'+event.target.value);
                event.target.value = '';
            }
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

