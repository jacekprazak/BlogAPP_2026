using Api.Entities;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class AppDbContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Article> Articles { get; set; }
    public DbSet<User> Users { get; set; }
    
}