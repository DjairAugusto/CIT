package com.cit.backend.api.intra.message;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
<<<<<<< HEAD
import org.springframework.http.HttpStatusCode;
=======
>>>>>>> e8276bb (Separação de comteudo/criação da pagina api)

@AllArgsConstructor
@Getter
@Setter
public class RestErroMessage {
    private HttpStatus status;
    private String message;
<<<<<<< HEAD

    public RestErroMessage(HttpStatusCode status, String message) {
        this.status = HttpStatus.valueOf(status.value());
        this.message = message;
    }
=======
>>>>>>> e8276bb (Separação de comteudo/criação da pagina api)
}
