
---
### 一、 IOC(控制反转)是一个概念，是把我们程序中的类与类之间的依赖关系交给容器去处理，一般有两种方式

* 依赖查找(DL)——程序提供查找方式，交给容器去查找，常见的回调函数
* 依赖注入——程序不提供查找方式，提供合适的构造方法或者setter方法，让容器进行注入来解决依赖关系

### 二、 `angula`r中的依赖注入中有三个比较重要的概念
* 注入器(`Injector`)：就像制作工厂，提供了一系列的接口用于创建依赖对象的实例
* `provider`:用于配置注入器，注入器通过它来创建被依赖对象的实例，provider把标识(Token)映射到工厂方法中，被依赖的对象就是通过该方法来创建的
* 依赖(`Dependence`)：指定了被依赖对象的类型，注入器会根据此类型创建对应的对象

### 三、依赖注入的组成图

### 四、`angular`中常见的依赖注入有
* 组件中注入服务
* 在服务中注入服务
* 在模块中注入服务
* 层级注入
* 注入到派生组件
* 限定方式的注入
    * 宿主组件是当前组件
    * 宿主组件是父组件

### 五、创建服务
>服务的概念:服务是指封装单一功能，类似工具库，常被引用于组件内部，作为组件的功能扩展。可以简单理解为就是一个工具库，或者功能函数

* 服务的组成可以是以下几种
    * 一个字符串或者`json`数据,比较少见
    
    ```javascript
       import { Injectable } from '@angular/core';

        @Injectable()
        export class RandomService {
          public num:number;
          constructor() {
            this.num = Math.random();
           }
        }
    ```
    
    * 一个普通函数
    * 一个类，任何对象都可以是服务
* 利用`angular-cli`创建一个服务的基本代码框架

   ```javascript
    import { Injectable } from '@angular/core';
    
    @Injectable()
    export class Service1Service {
    
      constructor() { }
    
    }
   ```
   
>说明:

* 1、在一个项目中会把所有的服务存放在一个文件夹下存放，便于管理
* 2、`Injectable`建议都带上

### 六、组件中注入服务的步骤
* 1、`import`引入被依赖的服务
* 2、在组件的`providers`中配置注入器
* 3、在组件的构造函数声明需要注入的依赖

> 使用案例详细见[服务实现两个组件之间的通信](http://blog.csdn.net/kuangshp128/article/details/71518112)

### 七、在服务中注入服务
>最终服务还是要注入到组件中才能实现功能，服务中注入服务仅仅是一个服务中依赖了领导一个服务里面的方法

基本步骤

* 1、创建第一个服务（本人案例中是创建一个打印的服务:服务名称`LoginService`）
* 2、创建一个父子组件通信的服务,服务名称:`ChidTofatherService`
* 3、在`ChidTofatherService`服务中`import`引入`LoginService`服务
* 4、在`ChidTofatherService`服务中的构造函数中注入所依赖的`LoginService`服务
* 5、在使用的组件中的`providers`中注册该依赖的服务
* 6、在`ChidTofatherService`服务中调用`LoginService`服务的方法

>基本如下:

* 1、`LoginService`服务代码

```javascript
    import { Injectable } from '@angular/core';
    @Injectable()
    export class LoginService {
        
        constructor() { }
            
        public info(message:any){
            console.info(message);
        }
            
        public warn(message:any){
            console.warn(message);
        }
            
        public error(message:any){
            console.error(message);
        }
    }
```
* 2、`ChidTofatherService`服务代码

```javascript
    import { Injectable } from '@angular/core';
    import {LoginService} from "./login.service";
    @Injectable()
    export class ChidTofatherService {
      list:string[] = [];
      //在构造函数中注入所依赖的服务
      constructor(private _login:LoginService) { }
      append(str:any){
        this._login.info(`你输入的是:${str}`);
        this.list.push(str);
      }
    }
```
* 3、`FatherComponent`组件注册服务


```javascript
    ....
    @Component({
      selector: 'app-father',
      templateUrl: './father.component.html',
      styleUrls: ['./father.component.css'],
      providers:[ChidTofatherService,LoginService]
    })
    ....
```

### 八、在模块中注入服务
>`angular`项目中都有一个根模块`app.module.ts`中的`providers`中注入

```
import ...
@NgModule({
  ...
  providers: [],
  bootstrap: [AppComponent]
})
```
>本人不建议志记载根模块中注入服务，比较麻烦，先在这注入了，在使用的组件中还要在构造函数中注入

### 九、层级注入
>层级注入常常用于在父子组件中，一个父组件可能有多个子组件，如果是每个子组件中都注入一个服务，那么每个子组件都实例了该服务，类似于每个子组件就是一个类实例的对象，互不冲突，如果注入到父组件中，那么所有的子组件具有相同的实例对象。使用方式与组件注入的方式一样的。angular查找服务的方式有点跟函数查找作用域类似，先从本身开始查找，如果本身没有就会继续往父组件查找，直到根模块结束查询

### 十、注入到派生组件
>我们创建组件是`export class 组件名称...`那么我们组件就是一个类，既然是类，那么就有类的:封装、继承、多态,所谓的派生组件就是一个继承父组件的子组件

注意点:
* 1、派生组件不能继承父组件的注入器
* 2、父组件与派生组件之间没有任何关联
* 3、父组件注入的服务，那么派生组件也必须注入父组件依赖的服务
* 4、在派生组件中的`constructor`中使用`super(...)`往组件中传递

### 十一、限定方式的注入
* 1、`@optional`可以兼容依赖不存在的情况
* 2、`@Host`可以限定查找规则

>使用规则

都是在`constructor`钩子函数中使用
```javascript
export class 组件名称{
    constructor(@Host() 变量名称:服务名称){
        
    }
}
``` 