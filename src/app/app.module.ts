import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule, MenuRoutingComponents } from './app-routing.module';
import { fbmMainComponent } from './core/fbmMain/fbm-main.component';
 

@NgModule({
  declarations: [
    AppComponent,
    fbmMainComponent,
    MenuRoutingComponents
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
