import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { RouterModule } from '@angular/router';
import { DevelopersComponent } from './developers/developers.component';
@NgModule({
  declarations: [
    DefaultLayoutComponent,
    HeaderComponent,
    DevelopersComponent,
    FooterComponent,
    MobileMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
