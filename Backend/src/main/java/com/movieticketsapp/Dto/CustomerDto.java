package com.movieticketsapp.Dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CustomerDto {
    private int customerID;
    private String emailId;
    private String password;
    private String firstName;
    private String lastName;
    private String loginId;
    private String phoneNumber;
    private String confirmpassword;
}
