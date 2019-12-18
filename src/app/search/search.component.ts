import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private dataService: DataService) { }
  breed:any;
  token = localStorage.getItem('apiKey');

  ngOnInit() {
  }

  searchBreeds(breedQuery: HTMLInputElement) {
  // console.log(breedQuery.value);
  this.dataService.getBreeds(this.token, breedQuery.value).subscribe(
    (res)=> {
      this.breed = res;
      console.log(res)
    },
    (err)=>console.log(err)
  )}
}

