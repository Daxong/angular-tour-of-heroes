import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  //组件的选择器（css元素选择器）
  selector: 'app-heroes',
  //组件模板文件位置
  templateUrl: './heroes.component.html',
  //组件私有CSS文件位置
  styleUrls: ['./heroes.component.css']
})
//始终要export这个组件类，方便在其他地方导入
export class HeroesComponent implements OnInit {

  constructor() { }
  //生命周期钩子 angular在创建完组件后很快就会调用这个 可以放置初始化逻辑
  ngOnInit() {
  }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

}
