import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  list = [];
  constructor() { }

  add(word) {
    this.list.push(word);
  }

  /* getAll() {
    return this.list;
  } */

}
