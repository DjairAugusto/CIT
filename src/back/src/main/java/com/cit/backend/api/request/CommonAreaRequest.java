package com.cit.backend.api.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CommonAreaRequest {
    private Long id;
    private String name;
    private String description;
    private int capacity;
    private boolean available;
    private float tax;
    private ReserveRequest reserve;
}
