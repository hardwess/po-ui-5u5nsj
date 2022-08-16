import { Component, OnInit } from '@angular/core';
import {
  PoDialogService,
  PoTableColumn
} from '@po-ui/ng-components';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css'],
  providers:[PoDialogService]
})
export class MonitorComponent implements OnInit {

  cTitleMonitor = "Monitor de cenários"
  cTitle: string = "";
  aItens: Array<any> = [];
  aColumns: PoTableColumn[] = [];
  aPerfil: any;
  itens: any;
  err: any
  i: number = 0
  isLoading = false;

  aParam = {"filial":"XIFIS26"}

  constructor(
    private httpService: HttpService
    ) {
    this.cTitle = "Monitor de cenários"
  }

  ngOnInit(): void {
     this.aColumns = this.showColumns();
     this.getItens();

  }

  getItens(){
    return this.httpService.get("GetMonitorCenario", this.aParam).subscribe(data => {
      this.aPerfil = data.cenarios

      for(this.i = 0; this.i<(data.cenarios).length; this.i++){
        this.aItens.push(
          {
            id_envio: (data.cenarios[this.i]).id_envio,
            data_envio: (data.cenarios[this.i]).data_envio,
            hora_envio: (data.cenarios[this.i]).hora_envio,
            id_perfil_prod: (data.cenarios[this.i]).id_perfil_prod,
            id_perfil_part: (data.cenarios[this.i]).id_perfil_part,
          }
        );
      };
      this.isLoading = true
    },
      error =>{
        this.err = error
        this.isLoading = true
     })
  }

  showColumns(): Array<PoTableColumn> {
    return[
      {property:'id_envio'        ,label: 'Id Envio'      ,type: 'label', width:'100px'  },
      {property:'data_envio'      ,label: 'Data de envio' ,type: 'label', width:'100px'  },
      {property:'hora_envio'      ,label: 'Hora de envio' ,type: 'label', width:'100px'  },
      {property:'id_perfil_prod'  ,label: 'Produto'       ,type: 'label', width:'100px'  },
      {property:'id_perfil_part'  ,label: 'Participante'  ,type: 'label', width:'100px'  }
    ];
  }
}

