import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullBlogComponent } from './full-blog.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ 
     {  path:'fullBlogDetail',  component: FullBlogComponent }
  ]
    
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FullBlogComponent]
})
export class BlogDetailsModule { }
