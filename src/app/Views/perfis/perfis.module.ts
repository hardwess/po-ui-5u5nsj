import { literalsEsES } from './../../i18n/classificador-EsES';
import { literalsEnUS } from './../../i18n/classificador-EnUS';
import { literalsRuRU } from './../../i18n/classificador-RuRU';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrigemComponent } from './origem/origem.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ParticipantesComponent } from './participantes/participantes.component';
import { OperacaoComponent } from './operacao/operacao.component';
import { OridestComponent } from './oridest/oridest.component';
import { PoGridModule, PoContainerModule, PoInfoModule, PoI18nConfig } from '@po-ui/ng-components';
import { PoFieldModule } from '@po-ui/ng-components';
import { PoIconModule } from '@po-ui/ng-components';
import { PoButtonModule } from '@po-ui/ng-components';
import { PoPopupModule } from '@po-ui/ng-components';
import { PoModalModule } from '@po-ui/ng-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoListViewModule } from '@po-ui/ng-components';
import { literalsPtBR } from 'src/app/i18n/classificador-PtBR';
import { HttpClientModule } from '@angular/common/http';


const i18nConfig: PoI18nConfig = {
  default: {
    language: 'pt-BR',
    context: 'general',
    cache: true
  },
  contexts: {
    'pt-BR': literalsPtBR,
    'ru-RU': literalsRuRU,
    'en-US': literalsEnUS,
    'es-ES': literalsEsES
  }
}

@NgModule({
  declarations: [
    OrigemComponent,
    ProdutosComponent,
    ParticipantesComponent,
    OperacaoComponent,
    OridestComponent
  ],
  imports: [
    CommonModule,
    PoContainerModule,
    PoGridModule,
    PoFieldModule,
    PoIconModule,
    PoButtonModule,
    PoPopupModule,
    PoModalModule,
    BrowserAnimationsModule,
    PoListViewModule,
    PoInfoModule,
    HttpClientModule
  ],
  exports:[
  ]
})
export class PerfisModule { }
