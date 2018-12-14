import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
    `
  <div>
  <fbm-main-component></fbm-main-component> 
  <router-outlet></router-outlet>
</div>
  `

})
export class AppComponent {

}
