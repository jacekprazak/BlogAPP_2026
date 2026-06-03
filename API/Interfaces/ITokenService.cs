using Api.Entities;

namespace Api.Interfaces;

public interface ITokenService
{
    public string CreateToken(User user);
}