import { Component, inject, OnInit, signal } from '@angular/core';
import { ArticlesService } from '../../core/services/articles-service';
import { Register } from "../account/register/register";
import { Article } from '../../types/article-types';


@Component({
  selector: 'app-articles',
  imports: [Register],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles implements OnInit {
  protected registerMode = signal(false)
  protected articlesService = inject(ArticlesService)
  protected articles = signal<Article[]>([])

  async ngOnInit() {
    this.articles.set(await this.GetArticles())
  }

  showRegister(value: boolean) {
    this.registerMode.set(value)
  }
  cancelRegister() {
    this.registerMode.set(false)
  }

  async GetArticles() {
    return this.articlesService.getArticles()
  }
}



















