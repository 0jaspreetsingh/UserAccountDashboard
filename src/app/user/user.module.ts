import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserEditComponent } from './user-edit/user-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewComponent } from './user-view/user-view.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [ UserViewComponent, UserEditComponent, UserHomeComponent ],
	imports: [
		CommonModule,
		HttpClientModule,
		MatCardModule,
		MatIconModule,
		MatButtonModule,
		MatToolbarModule,
		MatInputModule,
		MatFormFieldModule,
		MatDividerModule,
		ReactiveFormsModule,
		FormsModule
	],
	exports: [ UserViewComponent, UserEditComponent, UserHomeComponent ]
})
export class UserModule {}
