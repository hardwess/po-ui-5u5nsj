import { LiteralsWords } from './../i18n/literals.model';
import { LiteralsService } from '../services/literals.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  cString: string;
  cUSer: string;
  gtSmWatcherSubscription: Subscription = new Subscription();

  literals: LiteralsWords;
  menus: Array<PoMenuItem>;

  constructor(private router: Router, private literalService: LiteralsService) {
    this.literals = this.literalService.getLiteralModule();
    this.menus = this.menuOpc();
    (this.cString = 'Perfis'), (this.cUSer = 'Luciana Santos');
  }

  perfisRoute(): void {
    this.router.navigate(['perfis']);
  }

  menuOpc(): Array<PoMenuItem> {
    return [
      {
        label: 'Inicio',
        link: 'inicio',
        icon: 'po-icon po-icon-home',
      },
      {
        label: 'Perfis',
        link: 'perfis',
        icon: 'po-icon po-icon-book',
      },
      {
        label: 'Monitor de cenários',
        link: 'monitor',
        icon: 'po-icon-device-desktop',
      },
      {
        label: 'Configuração das regras',
        link: 'configura',
      },
      {
        label: 'Regras',
        link: 'regras',
        icon: 'po-icon-calculator',
      },
      {
        label: 'Relatório',
        link: 'relatorio',
        icon: 'po-icon-chart-columns',
      },
      {
        label: 'Sair',
        link: 'sair',
      },
    ];
  }

  ngOnInit(): void {
    this.MontaMenu();
  }
  MontaMenu() {
    this.menus = this.menuOpc();
  }
}
