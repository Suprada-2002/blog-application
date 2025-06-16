// repository
package com.example.BlogAppBackend.repo;

import com.example.BlogAppBackend.model.Blogs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogsRepo extends JpaRepository<Blogs , Long> {
}
