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

    const callbackdata = this.request.getCallbackData();
    console.log(callbackdata);
  }

}
