import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onHome(){
    this.router.navigate(['home'], {relativeTo: this.route});
  }
  onShop(){
    this.router.navigate(['shop'], {relativeTo: this.route});
  }
  onBlog(){
    this.router.navigate(['blog'], {relativeTo: this.route});
  }
  onProducts(){
    this.router.navigate(['products'], {relativeTo: this.route});
  }

}
