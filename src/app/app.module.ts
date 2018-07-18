import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularDraggableModule } from 'angular2-draggable';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FotterComponent } from './fotter/fotter.component';
import { CaroselComponent } from './carosel/carosel.component';
import { FormsModule } from '@angular/forms';
import { MainComponentComponent } from './main-component/main-component.component';
import { html2canvas } from 'html2canvas';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FotterComponent,
    CaroselComponent,
    MainComponentComponent
  ],
  imports: [
    AngularDraggableModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
