import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { PagesError403Component } from './pages/pages-error403/pages-error403.component';
import { SystemsComponent } from './pages/systems/systems.component';
import { ContentsComponent } from './pages/contents/contents.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { FunctionsComponent } from './pages/systems/functions/functions.component';
import { UsersComponent } from './pages/systems/users/users.component';
import { RoleComponent } from './pages/systems/role/role.component';
import { PermissionsComponent } from './pages/systems/permissions/permissions.component';
import { CategoriesComponent } from './pages/contents/categories/categories.component';
import { KnowledgeBasesComponent } from './pages/contents/knowledge-bases/knowledge-bases.component';
import { CommentComponent } from './pages/contents/comment/comment.component';
import { ReportsComponent } from './pages/contents/reports/reports.component';
import { MonthlyNewMembersComponent } from './pages/statistics/monthly-new-members/monthly-new-members.component';
import { MonthlyNewKbsComponent } from './pages/statistics/monthly-new-kbs/monthly-new-kbs.component';
import { MonthlyNewCommentsComponent } from './pages/statistics/monthly-new-comments/monthly-new-comments.component';
import { SystemRoutingModule } from './pages/systems/systems-routing.module';
import { ContentsRoutingModule } from './pages/contents/contents-routing.module';
import { StatisticRoutingModule } from './pages/statistics/statistics-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    AlertsComponent,
    AccordionComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    ButtonsComponent,
    CardsComponent,
    CarouselComponent,
    ListGroupComponent,
    ModalComponent,
    TabsComponent,
    PaginationComponent,
    ProgressComponent,
    SpinnersComponent,
    TooltipsComponent,
    FormsElementsComponent,
    FormsLayoutsComponent,
    FormsEditorsComponent,
    TablesGeneralComponent,
    TablesDataComponent,
    ChartsChartjsComponent,
    ChartsApexchartsComponent,
    IconsBootstrapComponent,
    IconsRemixComponent,
    IconsBoxiconsComponent,
    UsersProfileComponent,
    PagesFaqComponent,
    PagesContactComponent,
    PagesRegisterComponent,
    PagesLoginComponent,
    PagesError404Component,
    PagesBlankComponent,
    PagesError403Component,
    SystemsComponent,
    ContentsComponent,
    StatisticsComponent,
    FunctionsComponent,
    UsersComponent,
    RoleComponent,
    PermissionsComponent,
    CategoriesComponent,
    KnowledgeBasesComponent,
    CommentComponent,
    ReportsComponent,
    MonthlyNewMembersComponent,
    MonthlyNewKbsComponent,
    MonthlyNewCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SystemRoutingModule,
    ContentsRoutingModule,
    StatisticRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
