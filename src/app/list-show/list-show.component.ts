import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { ActivatedRoute } from '@angular/router';
import Show from '../_models/show.model';

@Component({
  selector: 'app-list-show',
  templateUrl: './list-show.component.html',
})
export class ListShowComponent implements OnInit {
  shows: Show[] = [];
  title: string | null = '';
  
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.title = params.get('title');
    });
  }

  
}
