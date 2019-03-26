import { Component, OnInit } from '@angular/core';
import { NoDataPipe } from './core/no-data.pipe';

interface File {
  name: string;
  size: any;
  type: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    NoDataPipe
  ]
})
export class AppComponent implements OnInit {
  files: File[];
  mapped: File[];
  title = 'ng-basic';
  constructor(
    private onDataPipe: NoDataPipe
  ) { }
  ngOnInit(): void {
    this.files = [
      { name: 'logo.svg', size: 2120109, type: 'image/svg' },
      { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
      { name: 'background.png', size: 0, type: 'image/png' }
    ];
    this.mapped = this.files.map(file => {
      return {
        name: file.name,
        type: file.type,
        size: this.onDataPipe.transform(file.size)
      };
    });
  }
}
