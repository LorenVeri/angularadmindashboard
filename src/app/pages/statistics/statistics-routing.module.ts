import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MonthlyNewCommentsComponent } from "./monthly-new-comments/monthly-new-comments.component";
import { MonthlyNewKbsComponent } from "./monthly-new-kbs/monthly-new-kbs.component";
import { MonthlyNewMembersComponent } from "./monthly-new-members/monthly-new-members.component";


const routes: Routes = [
    {
        path: '',
        component: MonthlyNewKbsComponent
    },
    {
        path: 'monthly-new-kbs',
        component: MonthlyNewKbsComponent
    },
    {
        path: 'monthly-new-comments',
        component: MonthlyNewCommentsComponent
    },
    {
        path: 'monthly-new-members',
        component: MonthlyNewMembersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StatisticRoutingModule { }
