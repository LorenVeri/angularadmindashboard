import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./categories/categories.component";
import { CommentComponent } from "./comment/comment.component";
import { KnowledgeBasesComponent } from "./knowledge-bases/knowledge-bases.component";
import { ReportsComponent } from "./reports/reports.component";


const routes: Routes = [
    {
        path: '',
        component: KnowledgeBasesComponent
    },
    {
        path: 'knowledge-bases',
        component: KnowledgeBasesComponent
    },
    {
        path: 'categories',
        component: CategoriesComponent
    },
    {
        path: 'comments',
        component: CommentComponent
    },
    {
        path: 'reports',
        component: ReportsComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContentsRoutingModule { }
