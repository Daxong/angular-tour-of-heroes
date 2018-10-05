import { Injectable } from '@angular/core';
import { Hero } from './hero';//导入Hero类
import { HEROES } from './mock-heroes';//导入数据

// Injectable()装饰器接收该服务的元数据对象，作用就像@Component()对组件类一样
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
