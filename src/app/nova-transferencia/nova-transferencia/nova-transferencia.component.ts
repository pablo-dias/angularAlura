import { Transferencia } from './../../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { TransferenciaService } from './../../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(
    private service: TransferenciaService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  transferir() {
    const valorEmitir: Transferencia = {
      valor: this.valor, 
      destino: this.destino
    };

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato')

            
    });
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
