import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  aCabGrid = [
    { property: 'id',       label: 'Código do Perfil',align: 'left', readonly: true, freeze: true },
    { property: 'desc',     label: 'Descrição',             width: '400px', required: true        },
    { property: 'cod_prod', label: 'Código do Produto',     width: '400px', required: true        },
    { property: 'desc_prod',label: 'Descrição do Produto',  width: '400px', required: true        },
    { property: 'origem',   label: 'Origem',                width: '400px', required: true        },
    { property: 'ncm',      label: 'Posição IPI/NCM',       width: '400px', required: true        }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
