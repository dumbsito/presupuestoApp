import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-imp-presupuesto',
  templateUrl: './imp-presupuesto.component.html',
  styleUrls: ['./imp-presupuesto.component.css']
})
export class ImpPresupuestoComponent {

  cantidad:number;
  cantidadIncorrecta:boolean;
  constructor( private presupuestoService:PresupuestoService,private router:Router){
    this.cantidad=0
    this.cantidadIncorrecta=false;
  }
  agregar(){
    if(this.cantidad>0){
      this.cantidadIncorrecta=false
      this.presupuestoService.presupuesto=this.cantidad
      this.presupuestoService.restante=this.cantidad;
      this.router.navigate(['/gastos'])
      
      
      
    }else{
      this.cantidadIncorrecta=true
    }
  }
}
