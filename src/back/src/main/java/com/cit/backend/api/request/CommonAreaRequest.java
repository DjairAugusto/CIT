package com.cit.backend.api.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CommonAreaRequest {
    private Long id;
    private String name;
    private float tax;
    private Long condominiumId;
    private Set<CommonAreaScheduleRequest> commonAreaSchedules;
}