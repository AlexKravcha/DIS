import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { EntrantComponent } from './components/entrant/entrant.component';
import { LifeInDormComponent } from './components/life-in-dorm/life-in-dorm.component';
import { StudentCouncilComponent } from './components/student-council/student-council.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';

import { AppRoutingModule } from './routing/app-routing.module';
import { ContactsComponent } from './components/contacts/contacts.component';







@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    EntrantComponent,
    LifeInDormComponent,
    StudentCouncilComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
