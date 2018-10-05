import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 导入该模块，ngModel命令才可用 此处为全局导入
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

//每个组件都必须声明在一个NgModule中一次
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule //然后把FormsModule添加到@NgModule元数据的imports数组 ngModel命令正式生效了
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
