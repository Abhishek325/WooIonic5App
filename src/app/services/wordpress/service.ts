import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WpPage } from './interface';

@Injectable({providedIn: 'root'})

export class WpPageService {
    constructor(private httpClient: HttpClient) {}

    getContentForPage(slug: string) {
        return this.httpClient.get<WpPage[]>(`pages/?slug=${slug}`);
    }
}
