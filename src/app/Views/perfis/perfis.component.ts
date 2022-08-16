
import { Router } from '@angular/router';
import { Component, ElementRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-perfis',
  templateUrl: './perfis.component.html',
  styleUrls: ['./perfis.component.css']
})
export class PerfisComponent implements OnInit {

  cTitle = "Perfis"
  lOrigem: boolean = true
  lProduto: boolean = false
  lParticipante: boolean = false
  lOperacao: boolean = false
  lOridest: boolean = false

  constructor(
    private router: Router
  ) {
   }

  ngOnInit(): void {
    this.origemOnClick();
  }

  origemOnClick(): void{
    this.router.navigate(['perfis/origem'])
    this.lOrigem = true
  }
  produtoOnClick(): void{
    this.router.navigate(['perfis/produto']),
    this.lProduto = true
  }
  participanteOnClick(): void{
    this.router.navigate(['perfis/participante']),
    this.lParticipante = true
  }
  operacaoOnClick(): void{
    this.router.navigate(['perfis/operacao']),
    this.lOperacao = true
  }
  oridestOnClick(): void{
    this.router.navigate(['perfis/oridest']),
    this.lOridest = true
  }
}
