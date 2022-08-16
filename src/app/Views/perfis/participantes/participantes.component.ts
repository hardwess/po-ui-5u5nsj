import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {

  aCabGrid = [
    { property: 'id',       label: 'Código do Perfil',align: 'left', readonly: true, freeze: true },
    { property: 'desc',     label: 'Descrição do Participante', width: '400px', required: true        },
    { property: 'tipo',     label: 'Tipo',                      width: '400px', required: true        },
    { property: 'cod_part', label: 'Código do Participante',    width: '400px', required: true        },
    { property: 'loja',     label: 'Loja',                      width: '400px', required: true        },
    { property: 'razao',    label: 'Razão Social',              width: '400px', required: true        }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
