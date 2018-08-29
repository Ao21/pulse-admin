import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule, MatListModule, MatIconModule } from '@angular/material';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent, MatSidenavModule]
})
export class LayoutModule { }
