import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'extrato', pathMatch: 'full'
  },
  {
    path: 'extrato', component: ExtratoComponent
  },
  {
    path: 'nova-transferencia', component: NovaTransferenciaComponent
  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
