import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/core/app-module/app.component';
import { MenuRoutingComponents, AppRoutingModule } from './app-routing.module';
import { MainAppModule } from './core/main-app/main-app.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuRoutingComponents
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }