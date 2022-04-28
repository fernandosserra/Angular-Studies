import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TextMarkerDrtDirective } from './shared/directives/text-marker-drt.directive';
import { ListPeopleComponent } from './shared/components/list-people/list-people.component';
import { ListApiComponent } from './shared/components/list-api/list-api.component';

@NgModule({
  declarations: [
    AppComponent,
    TextMarkerDrtDirective,
    ListPeopleComponent,
    ListApiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
