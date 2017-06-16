import { Component } from '@angular/core'

@Component({
    selector: 'skm-footer',
    template: '<div class="footer"><div class="text-center padding-top-10">Copyright ©2017, skmprintings. All rights reserved.</div></div>',        
    styles: [`
            .footer{
                position: rlative;
                bottom: 0px;
                left: 0px;
                width: 100%;
                height: 50px;
                background-color: darkred;
                color: orange
                }
        `]
})
 
 export class skmFooterComponent{
     
 }
