import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Article } from '../../types/article-types';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private http = inject(HttpClient)

  async getArticles() {
    try {
      return lastValueFrom(this.http.get<Article[]>("http://localhost:5001/articles"))
    } catch (error) {
      console.log(error)
      throw error
    }
  }

}
