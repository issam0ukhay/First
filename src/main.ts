import { bootstrapApplication } from '@angular/platform-browser';
    import { DialogTemplateDemo } from './app/dialog-template-demo';
    import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

    bootstrapApplication(DialogTemplateDemo, {
    providers: [provideAnimationsAsync()],
    }).catch((err) => console.error(err));