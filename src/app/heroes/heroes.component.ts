import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  //组件的选择器（css元素选择器）
  selector: 'app-heroes',
  //组件模板文件位置
  templateUrl: './heroes.component.html',
  //组件私有CSS文件位置
  styleUrls: ['./heroes.component.css']
  // 可以用多种方式定义私有样式，或者内联在 @Component.styles 数组中，或者在 @Component.styleUrls 所指出的样式表文件中
})
//始终要export这个组件类，方便在其他地方导入
export class HeroesComponent implements OnInit {

  constructor() { }
  //生命周期钩子 angular在创建完组件后很快就会调用这个 可以放置初始化逻辑
  ngOnInit() {
  }

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  heroes = HEROES;

  selectedHero: Hero; //不赋值是因为应用初启动的时候并没有选择Hero

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
