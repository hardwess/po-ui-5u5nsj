import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oridest',
  templateUrl: './oridest.component.html',
  styleUrls: ['./oridest.component.css'],
})
export class OridestComponent implements OnInit {
  aCabGrid = [
    {
      property: 'id',
      label: 'Código do Perfil',
      align: 'left',
      readonly: true,
      freeze: true,
    },
    {
      property: 'uf-ori',
      label: 'Uf de Origem',
      width: '400px',
      required: true,
    },
    {
      property: 'desc-ori',
      label: 'Descrição da Origem',
      width: '400px',
      required: true,
    },
    {
      property: 'uf-des',
      label: 'Uf de Destino',
      width: '400px',
      required: true,
    },
    {
      property: 'desc-des',
      label: 'Descrição do Destino',
      width: '400px',
      required: true,
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.createItens();
  }
  createItens() {
    return [
      {
        origem: 'Indústria',
        produto: 'PA0000000000000000000000000001',
        participante: 'AM0001-01',
        operacao: 'Venda de Produção do Estabelecimento',
        finalidade: 'Sem Finalidade',
        ufxuf: 'De: São Paulo -> Para: São Paulo',
      },
    ];
  }
}
