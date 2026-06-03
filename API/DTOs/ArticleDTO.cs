using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class ArticleDTO
{
    [Required]
    public string Title { get; set; } = "";
    [Required]
    public string Content { get; set; } = "";
}