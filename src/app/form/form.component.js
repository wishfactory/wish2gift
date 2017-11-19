"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DEFAULT_TAGS = ['#Sports', '#Adventure', '#Toys', '#Handicraft', '#Electronics'];
var FormComponent = (function () {
    function FormComponent() {
        this.title = 'Wish2Gift';
        this.maritalStatus = ['Single', 'Married'];
        this.workingStatus = ['Student', 'Professional', 'Government'];
        this.gender = ['Male', 'Female'];
        this.defaultTags = ['#Sports', '#Adventure', '#Toys', '#Handicraft', '#Electronics'];
        this.descTags = [];
    }
    FormComponent.prototype.onDefaultSelect = function (tag) {
        this.descTags.push(tag);
        var index = this.defaultTags.indexOf(tag);
        if (index !== -1) {
            this.defaultTags.splice(index, 1);
        }
    };
    FormComponent.prototype.onKey = function (event) {
        if (event.keyCode === (13) || event.keyCode === (32)) {
            if (event.target.value[0] === '#') {
                this.descTags.push(event.target.value);
                event.target.value = '';
            }
            else {
                this.descTags.push('#' + event.target.value);
                event.target.value = '';
            }
        }
    };
    FormComponent.prototype.onDescSelect = function (tag) {
        if (DEFAULT_TAGS.indexOf(tag) !== -1) {
            this.defaultTags.push(tag);
        }
        var index = this.descTags.indexOf(tag);
        if (index !== -1) {
            this.descTags.splice(index, 1);
        }
    };
    return FormComponent;
}());
FormComponent = __decorate([
    core_1.Component({
        selector: 'form-div',
        templateUrl: './form.component.html',
        styleUrls: ['./form.component.css']
    })
], FormComponent);
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map