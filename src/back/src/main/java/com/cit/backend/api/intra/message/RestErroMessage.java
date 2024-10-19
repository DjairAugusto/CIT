package com.cit.backend.api.intra.message;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@AllArgsConstructor
@Getter
@Setter
public class RestErroMessage {
    private HttpStatus status;
    private String message;
}
