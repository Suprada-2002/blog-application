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
public class BlogsController {}
