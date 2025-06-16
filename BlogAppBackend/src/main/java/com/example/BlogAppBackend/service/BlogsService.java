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
