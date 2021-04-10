import { UserEditComponent } from './user-edit/user-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewComponent } from './user-view/user-view.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
	declarations: [ UserViewComponent, UserEditComponent, UserHomeComponent ],
	imports: [ CommonModule, HttpClientModule, MatCardModule  , MatIconModule ],
	exports: [ UserViewComponent, UserEditComponent, UserHomeComponent ]
})
export class UserModule {}
