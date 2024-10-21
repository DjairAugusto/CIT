package com.cit.backend.api.intra.message;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;

import java.util.List;

@Getter
@Setter
public class RestErroVariableMessage extends RestErroMessage  {
    private List<String> variables;

    public RestErroVariableMessage(HttpStatus status, String message, List<String> missingVariables) {
        super(status, message);
        this.variables = missingVariables;
    }

    public RestErroVariableMessage(HttpStatusCode status, String message, List<String> missingVariables) {
        super(status, message);
        this.variables = missingVariables;
    }
}
