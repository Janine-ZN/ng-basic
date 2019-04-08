import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-obs-proxy',
  templateUrl: './obs-proxy.component.html',
  styleUrls: ['./obs-proxy.component.scss']
})
export class ObsProxyComponent implements OnInit {
  dataSet: any;
  constructor(
    private http: HttpClient
  ) {
  }

  /* query(params = {}): Observable<any> {
    return this.http.get('/products', { params: params });
  } */

  ngOnInit() {
    this.http.get('products').subscribe(data => {
      this.dataSet = data;
      // 这里就是请求下来的数据
      console.log(data);
    });
  }

}
