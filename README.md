
---
### һ�� IOC(���Ʒ�ת)��һ������ǰ����ǳ����е�������֮���������ϵ��������ȥ����һ�������ַ�ʽ

* ��������(DL)���������ṩ���ҷ�ʽ����������ȥ���ң������Ļص�����
* ����ע�롪�������ṩ���ҷ�ʽ���ṩ���ʵĹ��췽������setter����������������ע�������������ϵ

### ���� `angula`r�е�����ע�����������Ƚ���Ҫ�ĸ���
* ע����(`Injector`)�����������������ṩ��һϵ�еĽӿ����ڴ������������ʵ��
* `provider`:��������ע������ע����ͨ���������������������ʵ����provider�ѱ�ʶ(Token)ӳ�䵽���������У��������Ķ������ͨ���÷�����������
* ����(`Dependence`)��ָ���˱�������������ͣ�ע��������ݴ����ʹ�����Ӧ�Ķ���

### ��������ע������ͼ

### �ġ�`angular`�г���������ע����
* �����ע�����
* �ڷ�����ע�����
* ��ģ����ע�����
* �㼶ע��
* ע�뵽�������
* �޶���ʽ��ע��
    * ��������ǵ�ǰ���
    * ��������Ǹ����

### �塢��������
>����ĸ���:������ָ��װ��һ���ܣ����ƹ��߿⣬��������������ڲ�����Ϊ����Ĺ�����չ�����Լ����Ϊ����һ�����߿⣬���߹��ܺ���

* �������ɿ��������¼���
    * һ���ַ�������`json`����,�Ƚ��ټ�
    
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
    
    * һ����ͨ����
    * һ���࣬�κζ��󶼿����Ƿ���
* ����`angular-cli`����һ������Ļ���������

   ```javascript
    import { Injectable } from '@angular/core';
    
    @Injectable()
    export class Service1Service {
    
      constructor() { }
    
    }
   ```
   
>˵��:

* 1����һ����Ŀ�л�����еķ�������һ���ļ����´�ţ����ڹ���
* 2��`Injectable`���鶼����

### ���������ע�����Ĳ���
* 1��`import`���뱻�����ķ���
* 2���������`providers`������ע����
* 3��������Ĺ��캯��������Ҫע�������

> ʹ�ð�����ϸ��[����ʵ���������֮���ͨ��](http://blog.csdn.net/kuangshp128/article/details/71518112)

### �ߡ��ڷ�����ע�����
>���շ�����Ҫע�뵽����в���ʵ�ֹ��ܣ�������ע����������һ���������������쵼һ����������ķ���

��������

* 1��������һ�����񣨱��˰������Ǵ���һ����ӡ�ķ���:��������`LoginService`��
* 2������һ���������ͨ�ŵķ���,��������:`ChidTofatherService`
* 3����`ChidTofatherService`������`import`����`LoginService`����
* 4����`ChidTofatherService`�����еĹ��캯����ע����������`LoginService`����
* 5����ʹ�õ�����е�`providers`��ע��������ķ���
* 6����`ChidTofatherService`�����е���`LoginService`����ķ���

>��������:

* 1��`LoginService`�������

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
* 2��`ChidTofatherService`�������

```javascript
    import { Injectable } from '@angular/core';
    import {LoginService} from "./login.service";
    @Injectable()
    export class ChidTofatherService {
      list:string[] = [];
      //�ڹ��캯����ע���������ķ���
      constructor(private _login:LoginService) { }
      append(str:any){
        this._login.info(`���������:${str}`);
        this.list.push(str);
      }
    }
```
* 3��`FatherComponent`���ע�����


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

### �ˡ���ģ����ע�����
>`angular`��Ŀ�ж���һ����ģ��`app.module.ts`�е�`providers`��ע��

```
import ...
@NgModule({
  ...
  providers: [],
  bootstrap: [AppComponent]
})
```
>���˲�����־���ظ�ģ����ע����񣬱Ƚ��鷳��������ע���ˣ���ʹ�õ�����л�Ҫ�ڹ��캯����ע��

### �š��㼶ע��
>�㼶ע�볣�������ڸ�������У�һ������������ж��������������ÿ��������ж�ע��һ��������ôÿ���������ʵ���˸÷���������ÿ�����������һ����ʵ���Ķ��󣬻�����ͻ�����ע�뵽������У���ô���е������������ͬ��ʵ������ʹ�÷�ʽ�����ע��ķ�ʽһ���ġ�angular���ҷ���ķ�ʽ�е�������������������ƣ��ȴӱ���ʼ���ң��������û�оͻ��������������ң�ֱ����ģ�������ѯ

### ʮ��ע�뵽�������
>���Ǵ��������`export class �������...`��ô�����������һ���࣬��Ȼ���࣬��ô�������:��װ���̳С���̬,��ν�������������һ���̳и�����������

ע���:
* 1������������ܼ̳и������ע����
* 2����������������֮��û���κι���
* 3�������ע��ķ�����ô�������Ҳ����ע�븸��������ķ���
* 4������������е�`constructor`��ʹ��`super(...)`������д���

### ʮһ���޶���ʽ��ע��
* 1��`@optional`���Լ������������ڵ����
* 2��`@Host`�����޶����ҹ���

>ʹ�ù���

������`constructor`���Ӻ�����ʹ��
```javascript
export class �������{
    constructor(@Host() ��������:��������){
        
    }
}
``` 