using Microsoft.EntityFrameworkCore;
using TheBlog.Models.Entities;

namespace TheBlog.Data
{
    public class TheBlogDbContext : DbContext
    {
        public TheBlogDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Post> Posts { get; set; }
    }
}
