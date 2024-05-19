import { Component } from '@angular/core';
import { ImportsModule } from './imports';
        
@Component({
    selector: 'dialog-template-demo',
    templateUrl: './dialog-template-demo.html',
    standalone: true,
    imports: [ImportsModule]
})
export class DialogTemplateDemo {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}