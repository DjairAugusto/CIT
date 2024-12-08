package com.cit.backend.domain.repository;

import com.cit.backend.domain.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OmbudsmanRepository extends JpaRepository<Ticket, Long> {

}
