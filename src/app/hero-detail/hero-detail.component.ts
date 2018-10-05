import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // 用@Input装饰器表示通过hero属性接收一个英雄对象
  @Input() hero: Hero;
  
  constructor() { }

  ngOnInit() {
  }
  
}
