import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';

const routes: Routes = [
  { path:'lazy', loadChildren: './blog-details/blog-details.module#BlogDetailsModule'},
  { path: 'blog-list', component: BlogListComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
