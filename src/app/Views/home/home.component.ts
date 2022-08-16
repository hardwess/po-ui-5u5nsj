import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cString: string;
  cUSer: string;
  gtSmWatcherSubscription: Subscription = new Subscription;

  constructor(
    private router: Router
  ) {
    this.cString = "Perfis",
    this.cUSer = "Luciana Santos"
  }

  ngOnInit(): void {
  }

  perfisRoute(): void{
    this.router.navigate(['perfis'])
  }

}
