import { Component } from '@angular/core'

@Component({
    selector: 'skm-news',
    templateUrl: './news.component.html',
    styles: [`
        .announcement{
            padding: 10px;
            background-color: yellow;
            color: red;
            border-radius: 8px;
            box-shadow: 0 2px 2px rgba(10,16,20,.24), 0 0 2px rgba(10,16,20,.12);
            box-sizing: border-box;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            text-align: justify;
            font-weight: 600;
        }
        `]  
})
 
export class skmNewsComponent{
    closeBanner(){
        document.getElementById('announcementDiv').style.display = "none"
     }
}