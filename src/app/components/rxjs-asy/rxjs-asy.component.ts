import { Component, OnInit } from '@angular/core';

import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-rxjs-asy',
  templateUrl: './rxjs-asy.component.html',
  styleUrls: ['./rxjs-asy.component.scss']
})
export class RxjsAsyComponent implements OnInit {

  constructor(private request: RequestService) { }

  ngOnInit() {
    const data = this.request.getData();
    console.log(data);

    // const callbackdata = this.request.getCallbackData();
    const callbackdata = this.request.getCallbackData((res) => {
      console.log(res); // 输出张三
      /*
        // 将此方法传到 getCallbackData方法中，然后执行该方法
        // 执行时，正好把 username 传过来了
        (res) => {console.log(res); // 输出张三}
      */
    });


    const promiseData = this.request.getPromiseData();
    promiseData.then((result) => {
      console.log(result);
    });

    const observeData = this.request.getRxjsData();
    observeData.subscribe((result) => {
      console.log(result);
    });

  }

}
