package com.cit.backend.domain.repository;

import com.cit.backend.domain.entity.CommonAreas;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommonAreaRepository extends JpaRepository<CommonAreas, Long> {
}
