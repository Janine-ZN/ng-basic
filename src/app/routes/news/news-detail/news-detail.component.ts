import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

    /*  const title = this.route.snapshot.data['title'];
     const subtitle = this.route.snapshot.data['subtitle']; */

    /* this.route.queryParams.subscribe((params: Params) => {
      const id = params['id'];
      // const title = params['title'];
      console.log('id==>', id);
      // console.log('title==>', title);
    }); */
    // console.log('id==>', id);
    /* console.log('title==>', title);
    console.log('subtitle==>', subtitle); */
    /* this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      // const title = params['title'];
      console.log('id==>', id);
      // console.log('title==>', title);
    }); */
  }

}
