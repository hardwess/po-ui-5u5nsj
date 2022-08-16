import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operacao',
  templateUrl: './operacao.component.html',
  styleUrls: ['./operacao.component.css']
})
export class OperacaoComponent implements OnInit {

  aCabGridOp = [
    { property: 'id',       label: 'Código da Operação',align: 'left', readonly: true, freeze: true },
    { property: 'desc',     label: 'Descrição do Operação', width: '400px', required: true        }
  ];

  aCabGridFi = [
    { property: 'id',       label: 'Código da Finalidade',align: 'left', readonly: true, freeze: true },
    { property: 'desc',     label: 'Descrição da Finalidade', width: '400px', required: true        }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
