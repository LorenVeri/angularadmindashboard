import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { KnowledgeBasesComponent } from './knowledge-bases/knowledge-bases.component';
import { ReportsComponent } from './reports/reports.component';
import { CommentComponent } from './comment/comment.component';
import { ContentsRoutingModule } from './contents-routing.module';



@NgModule({
  declarations: [CategoriesComponent, KnowledgeBasesComponent, CommentComponent, ReportsComponent],
  imports: [
    CommonModule,
    ContentsRoutingModule
  ]
})
export class ContentsModule { }
