import { Injectable } from '@angular/core';
import { Hero } from './hero';//导入Hero类
import { HEROES } from './mock-heroes';//导入数据
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// Injectable()装饰器接收该服务的元数据对象，作用就像@Component()对组件类一样
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    //of(HEROES) 会返回一个 Observable<Hero[]>，它会发出单个值，这个值就是这些模拟英雄的数组
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
