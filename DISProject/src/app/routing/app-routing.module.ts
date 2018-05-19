import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { EntrantComponent } from '../components/entrant/entrant.component';
import { LifeInDormComponent } from '../components/life-in-dorm/life-in-dorm.component';
import { StudentCouncilComponent } from '../components/student-council/student-council.component';
import { ContactsComponent } from '../components/contacts/contacts.component';

const routes: Routes = [
  { path: 'toolbar', component: ToolbarComponent },
  { path: 'entrant', component: EntrantComponent },
  { path: 'lifeInDorm', component: LifeInDormComponent },
  { path: 'studentCouncil', component: StudentCouncilComponent },
  { path: 'contacts', component: ContactsComponent },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
