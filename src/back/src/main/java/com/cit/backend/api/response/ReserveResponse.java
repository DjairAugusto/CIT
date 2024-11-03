package com.cit.backend.api.response;

import java.time.LocalDate;
import java.time.LocalTime;

public class ReserveResponse {
    private LocalDate data;
    private LocalTime timeStart;
    private LocalTime timeEnd;
    private ApartmentResponse apartment;
}
