using Api.Controllers;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class ArticlesController(AppDbContext context) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<Article>>> GetArticles() => await context.Articles.ToListAsync();

    [HttpGet("{id}")]
    public async Task<ActionResult<Article>> GetArticle(string id)
    {
        var article = await context.Articles.FindAsync(id);

        if (article == null) return NotFound();

        return article;
    }
    
    [HttpPost("add")]
    public async Task<ActionResult<Article>> AddArticle(ArticleDTO articleDto) 
    {
        var article = new Article
        {
            Title = articleDto.Title,
            Content = articleDto.Content
        };

        context.Articles.Add(article);

        await context.SaveChangesAsync();

        return article;
    }
}
