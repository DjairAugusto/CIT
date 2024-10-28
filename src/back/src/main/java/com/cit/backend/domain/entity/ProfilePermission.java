package com.cit.backend.domain.entity;

import com.cit.backend.domain.entity.enums.ProfilePermissions;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "profile_permission")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProfilePermission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "permission", nullable = false)
    @Enumerated(EnumType.STRING)
    private ProfilePermissions permission;
}
