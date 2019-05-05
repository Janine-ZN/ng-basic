import { Component, OnInit } from '@angular/core';
import { WordsService } from 'src/app/core/service/words.service';

@Component({
  selector: 'app-display-word',
  templateUrl: './display-word.component.html',
  styleUrls: ['./display-word.component.scss']
})
export class DisplayWordComponent implements OnInit {
  list = [];
  constructor(private wordsService: WordsService) {
    this.list = this.wordsService.list;
  }

  ngOnInit() {}
}
