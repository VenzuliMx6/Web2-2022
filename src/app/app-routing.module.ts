import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P1Component } from './componentes/p1/p1.component';
import { P2Component } from './componentes/p2/p2.component';
import { P3Component } from './componentes/p3/p3.component';
import { P4Component } from './componentes/p4/p4.component';

const routes: Routes = [
  {
    path:"productos",component:P1Component
  },
  {
  path:"faq",component:P2Component
  },
  {
    path:"sponsor",component:P3Component
  },
  {
    path:"login",component:P4Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
