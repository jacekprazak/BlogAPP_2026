import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  private http = inject(HttpClient)
  protected articles = signal<any>([])
  protected readonly title = signal('client');

  async ngOnInit() {
     this.GetArticles()
  }

  public async GetArticles() {
    return this.http.get("http://localhost:5001/articles").subscribe({
      next: response => {
        this.articles.set(response)
        console.log(response)
      },
      error: error => console.log(error),
      complete: () => console.log("Request complete")
    })
  }
}
