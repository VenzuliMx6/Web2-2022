import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { P1Component } from './componentes/p1/p1.component';
import { P2Component } from './componentes/p2/p2.component';
import { P3Component } from './componentes/p3/p3.component';
import { P4Component } from './componentes/p4/p4.component';
import { P5Component } from './componentes/p5/p5.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PRMenuComponent } from './prmenu/prmenu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [
    AppComponent,
    P1Component,
    P2Component,
    P3Component,
    P4Component,
    P5Component,
    PRMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
