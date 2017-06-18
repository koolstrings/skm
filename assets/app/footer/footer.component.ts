import { Component } from '@angular/core'

@Component({
    selector: 'skm-footer',
    template: `
                <footer class="footer">
                  <div class="container">
                    <p class="text-muted">Copyright skmprintings @ 2017.</p>
                  </div>
                </footer>
            `,        
    styles: [`
            .footer{
              position: absolute;
              right: 0;
              bottom: 0;
              left: 0;
              padding: 1rem;
              background-color: #efefef;
              text-align: center;
              background-color: darkred;
              color: orange
            }
        `]
})
 
 export class skmFooterComponent{
     
 }
