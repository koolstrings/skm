import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'skm-home',
    templateUrl: './home.component.html',    
})
 
 export class skmHomeComponent{
     onSubmit(form: NgForm){
         console.log(form)
        // form.resetForm()
     }
 }