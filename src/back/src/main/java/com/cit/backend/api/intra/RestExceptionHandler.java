package com.cit.backend.api.intra;

<<<<<<< HEAD
import com.cit.backend.api.intra.message.RestErroVariableMessage;
import com.cit.backend.exceptions.MissingVariableException;
import com.cit.backend.exceptions.UniqueColumnAlreadyExistsException;
import com.fasterxml.jackson.databind.JsonMappingException;
import org.springframework.http.*;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.lang.Nullable;
=======
import com.cit.backend.exceptions.MissingVariableException;
import com.cit.backend.api.intra.message.RestErroMissingVariableMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
>>>>>>> e8276bb (Separação de comteudo/criação da pagina api)
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
<<<<<<< HEAD
import com.cit.backend.api.intra.message.RestErroMessage;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import java.util.List;
import java.util.stream.Collectors;
=======

import java.util.HashMap;
import java.util.Map;
>>>>>>> e8276bb (Separação de comteudo/criação da pagina api)

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(MissingVariableException.class)
<<<<<<< HEAD
    public ResponseEntity<RestErroVariableMessage> handlerMissingVariable(MissingVariableException exception) {
        HttpStatus status = HttpStatus.BAD_REQUEST;
        RestErroVariableMessage message = new RestErroVariableMessage(status, exception.getMessage(), exception.getMissingVariables());
        return ResponseEntity.status(status).body(message);
    }

    @ExceptionHandler(UniqueColumnAlreadyExistsException.class)
    public ResponseEntity<RestErroMessage> handlerUniqueColumnAlreadyExists(UniqueColumnAlreadyExistsException exception) {
        HttpStatus status = HttpStatus.CONFLICT;
        RestErroMessage message = new RestErroMessage(status, exception.getMessage());
        return ResponseEntity.status(status).body(message);
    }

    @Override
    protected ResponseEntity<Object> handleNoResourceFoundException(NoResourceFoundException ex, HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        String errorText = "Api path not found";
        RestErroMessage message = new RestErroMessage(status, errorText);
        return ResponseEntity.status(status).body(message);
    }

    @Override
    protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException exception, HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        String errorText = "Invalid request message";
        List<String> variables = null;
        Throwable cause = exception.getCause();
        RestErroMessage message;

        message = new RestErroMessage(status, errorText);
        if (cause instanceof com.fasterxml.jackson.databind.JsonMappingException jsonMappingException) {
            variables = jsonMappingException.getPath().stream()
                    .map(JsonMappingException.Reference::getFieldName)
                    .collect(Collectors.toList());
            message = new RestErroVariableMessage(status, errorText, variables);

        }

        return ResponseEntity.status(status).body(message);
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException exception, HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        String errorText = "Invalid arguments";

        List<String> errors = exception.getBindingResult().getFieldErrors().stream()
                .map(fieldError -> fieldError.getField() +": " + fieldError.getDefaultMessage())
                .collect(Collectors.toList());

        RestErroVariableMessage message = new RestErroVariableMessage(status, errorText, errors);
        return ResponseEntity.status(status).body(message);
    }


}
=======
    public ResponseEntity<RestErroMissingVariableMessage> missingVariableHandler(MissingVariableException exception) {
        RestErroMissingVariableMessage erroMessage = new RestErroMissingVariableMessage(HttpStatus.BAD_REQUEST, exception.getMessage(), exception.getMissingVariables());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(erroMessage);
    }

}
>>>>>>> e8276bb (Separação de comteudo/criação da pagina api)
