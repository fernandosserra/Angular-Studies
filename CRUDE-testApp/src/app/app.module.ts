import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersListComponent } from './components/pages/users/users-list/users-list.component';
import { UserFormComponent } from './components/pages/users/user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoItemComponent } from './pages/todo-list/todo-item/todo-item.component';
import { ButtonComponent } from './components/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { PipesExampleComponent } from './pages/pipes-example/pipes-example.component';
import { PrintListPipe } from './print-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersListComponent,
    UserFormComponent,
    DataBindingComponent,
    TodoListComponent,
    TodoItemComponent,
    ButtonComponent,
    LifeCycleComponent,
    PipesExampleComponent,
    PrintListPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
