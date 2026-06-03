using Api.Controllers;
using Api.Entities;
using API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class UserController(AppDbContext context) : BaseApiController
{
    //Get all users
    [Authorize]
    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<User>>> GetUsers() => await context.Users.ToListAsync();

    //gete user by ID

    [HttpGet("{id}")]
    public async Task<ActionResult<User>> GetUser(string id)
    {
        var user = await context.Users.FindAsync(id);

        if (user == null) return NotFound("Cannot find user with an id of: " + id);

        return user;
    }

}
