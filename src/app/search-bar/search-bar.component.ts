import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListShowComponent } from '../list-show/list-show.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent implements OnInit {

  constructor(private http: HttpClient) {}

  jsonIn = {
    title: ''
  }

  ngOnInit(): void {
   
  }

  searchShowByTitle(){
      this.api.searchShow(this.title? this.title : '' ).subscribe( (shows) => {
      this.shows = shows;
      console.log(this.shows)
    });
  }
}
