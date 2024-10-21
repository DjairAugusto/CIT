package com.cit.backend.api.request;

import com.cit.backend.api.validator.JWT;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class EmployeeRequest {
    @NotBlank(message = "Name is mandatory");
    @Size(min = 3, max = 50, message = "Name must be between 3 and 50 characters");
    private String name;

    @NotBlank(message = "Email is mandatory");
    @Email(message = "Email must be valid")
    private String email;

    @NotBlank(message = "Password is mandatory");
    @Size(min = 6, max = 50, message = "Password must be between 6 and 50 characters");
    private String password;

    @NotBlank(message = "Phone is mandatory");
    @Phone
    private String phone;

    @NotBlank(message = "Role is mandatory");
    @Size(min = 3, max = 50, message = "Role must be between 3 and 50 characters");
    private String role;

    private VehicleRequest vehicle;

    @NotBlank(message = "Token is mandatory")
    @JWT()
    private String token;
}
