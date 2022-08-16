import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { PoGridModule, PoContainerModule, PoInfoModule } from '@po-ui/ng-components';
import { PoFieldModule } from '@po-ui/ng-components';
import { PoIconModule } from '@po-ui/ng-components';
import { PoButtonModule } from '@po-ui/ng-components';
import { PoPopupModule } from '@po-ui/ng-components';
import { PreviewComponent } from './preview/preview.component';


@NgModule({
  declarations: [
    PreviewComponent
  ],
  imports: [
    CommonModule,
    PoContainerModule,
    PoGridModule,
    PoFieldModule,
    PoIconModule,
    PoButtonModule,
    PoPopupModule,
    PoInfoModule

  ],
  exports:[
  ]
})
export class PerfisModule { }
