using Microsoft.AspNetCore.Identity;

namespace denemeapp.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string? Role {get; set; }
    }
}