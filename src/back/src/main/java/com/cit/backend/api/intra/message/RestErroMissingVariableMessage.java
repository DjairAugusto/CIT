package com.cit.backend.api.intra.message;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

import java.util.List;

@Getter
@Setter
public class RestErroMissingVariableMessage extends RestErroMessage {
    private List<String> missingVariables;

    public RestErroMissingVariableMessage(HttpStatus status, String message, List<String> missingVariables) {
        super(status, message);
        this.missingVariables = missingVariables;
    }

}
