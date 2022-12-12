import { Component } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent {
nombreGasto:string=""
cantidad:number=0
formIncorrect:boolean=false
textIncorrecto:string=""

constructor(private ps:PresupuestoService) {
  
}
agregarGasto(){

  if(this.cantidad > this.ps.restante){
    this.formIncorrect=true;
    this.textIncorrecto="Cantidad ingresada es mayor al restante"
  return;
  }

if(this.nombreGasto===""||this.cantidad<=0){
 this.textIncorrecto="Nombre gasto o cantidad incorrecta"
  this.formIncorrect=true
}else{

  //creamos el objeto
     const gasto={
      nombre:this.nombreGasto,
      cantidad:this.cantidad
     }
  
     //enviamos el objeto a los subscriptores via subjet
     this.ps.agregarGasto(gasto) 

  //reseteamos formulario
  this.formIncorrect=false;
  this.nombreGasto="";
  this.cantidad=0;
}
}
}
