import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionsComponent } from './functions/functions.component';
import { UsersComponent } from './users/users.component';
import { RoleComponent } from './role/role.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { SystemRoutingModule } from './systems-routing.module';


@NgModule({
  declarations: [FunctionsComponent, UsersComponent, RoleComponent, PermissionsComponent],
  imports: [
    CommonModule,
    SystemRoutingModule
  ]
})
export class SystemsModule { }
