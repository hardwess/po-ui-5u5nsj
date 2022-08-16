import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSelectOption,
} from '@po-ui/ng-components';
import { HttpService } from './../../services/http.service';

@Component({
  selector: 'app-configuracao-regras',
  templateUrl: './configuracao-regras.component.html',
  styleUrls: ['./configuracao-regras.component.css'],
})
export class ConfiguracaoRegrasComponent implements OnInit {
  content: string = '';
  position: any;
  properties: Array<string> = [];
  title = 'Configuração das Regras';

  readonly languageOptions: Array<PoRadioGroupOption> = [
    { label: 'Manual', value: 'mn' },
    { label: 'Automatico', value: 'at' },
  ];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.changeOptions();
  }
  changeOptions() {
    // Inserir a busca pelos parâmetros na CJE
  }

  putParam(value: any, item: number) {}
}
