using Api.Dtos;
using API.Data;
using API.Dtos;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PostsController : Controller
    {
        private readonly AppDbContext _context;
        public PostsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPosts()
        {
            var posts = await _context.Posts.ToListAsync();

            return Ok(posts);
        }

        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("GetPostById")]
        public async Task<IActionResult> GetPostById(Guid id)
        {
            var post = await _context.Posts.FirstOrDefaultAsync(p => p.Id == id);

            if (post != null)
            {
                return Ok(post);
            }

            return NotFound();
        }

        [HttpPost]
        public async Task<IActionResult> AddPost(AddPostRequest addPostRequest)
        {
            var post = new Post()
            {
                Title = addPostRequest.Title,
                Content = addPostRequest.Content,
                Author = addPostRequest.Author,
                FeaturedImageUrl = addPostRequest.FeaturedImageUrl,
                PublishDate = addPostRequest.PublishDate,
                UpdateDate = addPostRequest.UpdateDate,
                Summary = addPostRequest.Summary,
                UrlHandle = addPostRequest.UrlHandle,
                IsVisible = addPostRequest.IsVisible
            };

            post.Id = Guid.NewGuid();
            await _context.Posts.AddAsync(post);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPostById), new { id = post.Id }, post);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdatePost([FromRoute] Guid id, UpdatePostRequest updatePostRequest)
        {
            var existingPost = await _context.Posts.FindAsync(id);

            if (existingPost != null)
            {
                existingPost.Title = updatePostRequest.Title;
                existingPost.Content = updatePostRequest.Content;
                existingPost.Author = updatePostRequest.Author;
                existingPost.FeaturedImageUrl = updatePostRequest.FeaturedImageUrl;
                existingPost.PublishDate = updatePostRequest.PublishDate;
                existingPost.UpdateDate = updatePostRequest.UpdateDate;
                existingPost.Summary = updatePostRequest.Summary;
                existingPost.UrlHandle = updatePostRequest.UrlHandle;
                existingPost.IsVisible = updatePostRequest.IsVisible;

                await _context.SaveChangesAsync();

                return Ok(existingPost);
            }

            return NotFound();
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeletePost(Guid id)
        {
            var existingPost = await _context.Posts.FindAsync(id);

            if (existingPost != null)
            {
                _context.Remove(existingPost);
                await _context.SaveChangesAsync();

                return Ok(existingPost);
            }

            return NotFound();
        }
    }
}
