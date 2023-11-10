import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
 providedIn: 'root',
})

export class ShowService {
    constructor(private apiService: ApiService) {}

    searchShow(query: string) {
        return this.apiService.searchShow(query);
    }

}