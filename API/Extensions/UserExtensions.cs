using Api.DTOs;
using Api.Entities;
using Api.Interfaces;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace Api.Extensions;

public static class UserExtensions
{
    public static UserDTO ToDto(this User user, ITokenService tokenService) 
    {   
        return new UserDTO
        {
          Id = user.Id,
          Email = user.Email,
          DisplayName = user.DisplayName,
          Token = tokenService.CreateToken(user)
        };
    }
}