import { UserEditComponent } from './user-edit/user-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewComponent } from './user-view/user-view.component';
import { UserHomeComponent } from './user-home/user-home.component';

@NgModule({
	declarations: [ UserViewComponent, UserEditComponent, UserHomeComponent ],
  imports: [ CommonModule ],
  exports: [UserHomeComponent]
})
export class UserModule {}
