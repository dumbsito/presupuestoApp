import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosComponent } from './components/gastos/gastos.component';
import { ImpPresupuestoComponent } from './components/imp-presupuesto/imp-presupuesto.component';

const routes: Routes = [
  {
    path:"",redirectTo:"/ingresarPresupuesto", pathMatch:"full"
  },
 {
  path:"ingresarPresupuesto",
  component:ImpPresupuestoComponent
 },
 {
  path:"gastos",
  component:GastosComponent
 },
 {
  path:"**",redirectTo:"/ingresarPresupuesto", pathMatch:"full"
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
