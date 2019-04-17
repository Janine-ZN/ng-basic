import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // const id = this.route.snapshot.queryParams['id'];
    // const id = this.route.snapshot.paramMap.get('id');
    // const id = this.route.snapshot.params['id'];
    const title = this.route.snapshot.data['title'];
    const subtitle = this.route.snapshot.data['subtitle'];
    // console.log('id==>', id);
    console.log('title==>', title);
    console.log('subtitle==>', subtitle);
  }

}
