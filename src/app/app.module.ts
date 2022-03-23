import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmpListComponent } from './emp-list.component';

import { EmpServiceService } from './emp-service.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,EmpListComponent],
  bootstrap:    [ AppComponent ],
  providers: [EmpServiceService]
})
export class AppModule { }
