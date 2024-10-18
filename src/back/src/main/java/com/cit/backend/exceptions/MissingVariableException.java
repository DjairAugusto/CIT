package com.cit.backend.exceptions;

import java.util.List;

public class MissingVariableException extends RuntimeException {
    public List<String> missingVariables;

    public MissingVariableException() {
        super("Missing variable");
    }

    public MissingVariableException(List<String> missingVariables) {
        super("Missing variable");
        this.missingVariables = missingVariables;
    }

    public MissingVariableException(String message) {
        super(message);
    }

    public MissingVariableException(String message, List<String> missingVariables) {
        super(message);
        this.missingVariables = missingVariables;
    }

    public List<String> getMissingVariables() {
        return missingVariables;
    }
}
