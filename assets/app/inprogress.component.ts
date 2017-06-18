import { Component } from '@angular/core'

@Component({
    selector: 'skm-in-Progress',
    template: `                
            <div class="container">
                <div class="panel-group">
                    <div class="panel panel-default">
                        <div class="panel-heading">In Progress</div>
                        <div class="panel-body">
                            <div class="well">
                                <i class="fa fa-spinner fa-spin spacing" style="font-size:40px"></i>
                                <span class="padding-30 center-align">Sorry! This page is under construction for now. But we are working to get it up sooner than you think!</span>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
            `
})
 
export class skmInProgressPage{
    
}