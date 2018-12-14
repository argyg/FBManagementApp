import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/core/app-module/app.component';
import { AppRoutingModule, MenuRoutingComponents } from './core/app-module/app-routing.module';
import { MainFbmComponent } from './core/main-app/menu-app/main-fbm-component';

@NgModule({
  declarations: [
    AppComponent,
    MainFbmComponent,
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