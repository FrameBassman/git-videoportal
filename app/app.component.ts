import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent {
    title: string;
    login: string;
    password: string;

    constructor(){
        this.title = 'Angular 2do'
    }
}
