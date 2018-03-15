
import { Component } from '@angular/core'

@Component({
    selector: 'my-app',
    templateUrl: './templatedrivenforms/app.component.html',
    styles: [`input.ng-valid{ border-left:10px solid green }
    input.ng-invalid { border-left:10px solid red }`]

})

export class AppComponent {

    submitForm(values: any) {

        console.log(values);
    }
}