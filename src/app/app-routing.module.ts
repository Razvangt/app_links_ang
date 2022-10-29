import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLinkComponent } from './components/add-link/add-link.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditlinksComponent } from './components/links/editlinks/editlinks.component';
import { LinksComponent } from './components/links/links.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'search-link', component: LinksComponent },
  { path: 'add-link', component: AddLinkComponent },
  { path: 'edit-link/:id', component: EditlinksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
