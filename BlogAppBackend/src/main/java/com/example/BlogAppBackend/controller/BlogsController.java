//controller
package com.example.BlogAppBackend.controller;

import com.example.BlogAppBackend.model.Blogs;
import com.example.BlogAppBackend.service.BlogsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/blogs")
public class BlogsController {
     @Autowired
    private final BlogsService blogsService;

    public BlogsController(BlogsService blogsService){
        this.blogsService = blogsService;
    }

    @GetMapping("/{id}")
    public Optional<Blogs> getById(@PathVariable Long id){
        return blogsService.getBlogById(id);
    }
    @GetMapping
    public List<Blogs> getAll(){
        return blogsService.getAllBlogs();
    }

    @PostMapping("/add")
    public Blogs createBlog(@RequestBody @Validated Blogs blogs){
        blogs.setCreatedAt(LocalDate.now());
        System.out.println("Received blog: "+blogs);
        return  blogsService.createABlog(blogs);
    }

    @PutMapping("/{id}")
    public Blogs updateBlog(@PathVariable Long id,@RequestBody @Validated Blogs blogs){
        return blogsService.updateABlog(id, blogs);
    }

    @DeleteMapping("/{id}")
    public void deleteBlog(@PathVariable Long id){
        blogsService.deleteABlog(id);
    }
}
