import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form.component';
import { MyModelDirective } from './my-model.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SignupFormComponent, MyModelDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
