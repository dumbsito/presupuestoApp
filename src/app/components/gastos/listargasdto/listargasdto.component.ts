import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listargasdto',
  templateUrl: './listargasdto.component.html',
  styleUrls: ['./listargasdto.component.css']
})
export class ListargasdtoComponent implements OnInit,OnDestroy{

subscription:Subscription;

presupuesto:number=0
restante:number=0

listaGastos:any=[]
  constructor(private ps:PresupuestoService){
   this.subscription= this.ps.getGastos().subscribe(data=>{
    this.restante=this.restante - data.cantidad;
    this.listaGastos.push(data)
   }
    )
  }
  ngOnInit(): void {
    this.presupuesto=this.ps.presupuesto;
    this.restante=this.ps.restante;
  }
  ngOnDestroy(): void {
  this.subscription.unsubscribe();
  }

  aplicarColorRestante(){
    if(this.presupuesto/4>this.restante){
      return "alert alert-danger"
    }else if(this.presupuesto/2>this.restante){
     return "alert alert-warning"
    }else{
      return "alert alert-secondary"
    }
  }

}
