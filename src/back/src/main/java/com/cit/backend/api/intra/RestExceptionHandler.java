package com.cit.backend.api.intra;

import com.cit.backend.exceptions.MissingVariableException;
import com.cit.backend.api.intra.message.RestErroMissingVariableMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(MissingVariableException.class)
    public ResponseEntity<RestErroMissingVariableMessage> missingVariableHandler(MissingVariableException exception) {
        RestErroMissingVariableMessage erroMessage = new RestErroMissingVariableMessage(HttpStatus.BAD_REQUEST, exception.getMessage(), exception.getMissingVariables());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(erroMessage);
    }

}
