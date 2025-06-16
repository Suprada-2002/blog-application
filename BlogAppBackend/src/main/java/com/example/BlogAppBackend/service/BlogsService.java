// service
package com.example.BlogAppBackend.service;

import com.example.BlogAppBackend.model.Blogs;
import com.example.BlogAppBackend.repo.BlogsRepo;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BlogsService {
    @Autowired
    private BlogsRepo blogsRepo;

    public Optional<Blogs> getBlogById(Long id){
        return blogsRepo.findById(id);
    }

    public List<Blogs> getAllBlogs(){
        return blogsRepo.findAll();
    }

    public Blogs createABlog(Blogs blogs){
        return blogsRepo.save(blogs);
    }

    public Blogs updateABlog(Long id,Blogs blogs){
        Blogs exisitingBlog = blogsRepo.findById(id).orElseThrow(() -> new RuntimeException("Blog Not Found"));
        exisitingBlog.setTitle(blogs.getTitle());
        exisitingBlog.setDescription(blogs.getDescription());
        return blogsRepo.save(exisitingBlog);
    }

    public ResponseEntity<String> deleteABlog(Long id){
        Optional<Blogs> requestBlog = blogsRepo.findById(id);
        if(requestBlog.isPresent()){
            blogsRepo.delete(requestBlog.get());
            return ResponseEntity.status(HttpStatus.OK).build();
        }
//        blogsRepo.deleteById(id);
        return  ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

}
