import { Component } from '@angular/core';
import { ImportsModule } from './imports';
        
@Component({
    selector: 'dialog-template-demo',
    templateUrl: './dialog-template-demo.html',
    styleUrl:'./dialog.component.scss',
    standalone: true,
    imports: [ImportsModule]
})
export class DialogTemplateDemo {

    members = [
        { name: 'Entity1', image: 'amyelsner.png' },
        { name: 'Entity2', image: 'bernardodominic.png' },
        { name: 'Entity3', image: 'ionibowcher.png' },
        { name: 'Entity4', image: 'bernardodominic.png' },
        { name: 'Entity5', image: 'ionibowcher.png' }
    ];

    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}