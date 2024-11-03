package com.cit.backend.api.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.DayOfWeek;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CommonAreaScheduleResponse {
    private Long id;
    private String startTime;
    private String endTime;
    private DayOfWeek dayOfWeek;
}
