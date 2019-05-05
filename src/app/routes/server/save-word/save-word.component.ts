import { Component, OnInit } from '@angular/core';
import { WordsService } from 'src/app/core/service/words.service';

@Component({
  selector: 'app-save-word',
  templateUrl: './save-word.component.html',
  styleUrls: ['./save-word.component.scss']
})
export class SaveWordComponent implements OnInit {
  newWord: String = '';
  constructor(private wordsService: WordsService) { }

  saveWord() {
    this.wordsService.add(this.newWord);
  }
  ngOnInit() {
  }

}
