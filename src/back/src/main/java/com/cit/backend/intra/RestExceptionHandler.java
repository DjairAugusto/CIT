package com.cit.backend.intra;

import com.cit.backend.exceptions.MissingVariableException;
import com.cit.backend.intra.message.RestErroMessage;
import com.cit.backend.intra.message.RestErroMissingVariableMessage;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.NoHandlerFoundException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(MissingVariableException.class)
    public ResponseEntity<RestErroMissingVariableMessage> missingVariableHandler(MissingVariableException exception) {
        RestErroMissingVariableMessage erroMessage = new RestErroMissingVariableMessage(HttpStatus.BAD_REQUEST, exception.getMessage(), exception.getMissingVariables());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(erroMessage);
    }
}
