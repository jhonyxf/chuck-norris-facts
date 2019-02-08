import { Component, OnInit } from '@angular/core';

import { FactsService } from '../facts.service';

@Component({
  selector: 'app-chuck-norris-fact',
  templateUrl: './chuck-norris-fact.component.html',
  styleUrls: ['./chuck-norris-fact.component.css']
})

export class ChuckNorrisFactComponent implements OnInit {

  chuckNorrisFact: any;

  constructor(private factsService: FactsService) { }

  ngOnInit() {
  }

  getFact() {
    return this.factsService.getChuckNorrisFact().subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error)
    );
  }

  handleSuccess(data) {
    this.chuckNorrisFact = data.value;
    console.log(this.chuckNorrisFact);
  }

  handleError(error) {
    console.log(error);
  }

}
