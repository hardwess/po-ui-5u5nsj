import { Routes}                        from '@angular/router';
import { HomeComponent }                from './Views/home/home.component';
import { RegrasComponent }              from './Views/regras/regras.component';
import { RelatorioComponent }           from './Views/relatorio/relatorio.component';
import { MonitorComponent }             from './Views/monitor/monitor.component';
import { ConfiguracaoRegrasComponent }  from './Views/configuracao-regras/configuracao-regras.component';

import { OrigemComponent } from './Views/perfis/origem/origem.component';
import { ProdutosComponent } from './Views/perfis/produtos/produtos.component';
import { ParticipantesComponent } from './Views/perfis/participantes/participantes.component';
import { OperacaoComponent } from './Views/perfis/operacao/operacao.component';
import { OridestComponent } from './Views/perfis/oridest/oridest.component';
import { PreviewComponent } from './Views/perfis/oridest/preview/preview.component';
import { PerfisComponent }              from './Views/perfis/perfis.component';
import { LoginComponent } from './Views/login/login.component';
import { MenuComponent } from './menu/menu.component';



export const ROUTES: Routes = [
  {path: '',          component: LoginComponent              },
  {path: 'index.html',    component: LoginComponent              },
  {path: 'inicio',    component: HomeComponent              },
  {path: 'perfis',    component: PerfisComponent, children:[
    {path: 'origem', component: OrigemComponent},
    {path: 'produto', component: ProdutosComponent},
    {path: 'participante', component: ParticipantesComponent},
    {path: 'operacao', component: OperacaoComponent},
    {path: 'oridest', component: OridestComponent, children:[
      {path: 'preview', component: PreviewComponent}
    ]}
  ]},
  {path: 'monitor',   component: MonitorComponent           },
  {path: 'configura', component: ConfiguracaoRegrasComponent},
  {path: 'regras',    component: RegrasComponent            },
  {path: 'relatorio', component: RelatorioComponent         },
]

export class RoutesModule {
 }
