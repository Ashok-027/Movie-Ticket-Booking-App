package com.movieticketsapp.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//import javax.persistence.*;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "customer123")
public class Customer {

    @Id
    @Column(name = "CustomerID", length = 10)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int customerID;

    //@Column(name = "Firstname", length = 50, nullable = false)
   // @Pattern(regexp = "^[A-Za-z]*$")
    @Column(nullable = false)
    private String firstName;
    //@Column(name = "Lastname", length = 50, nullable = false)
    //@Pattern(regexp = "^[A-Za-z]*$")
    @Column(nullable = false)
    private String lastName;
   // @Column(name = "Address", length = 300, nullable = false)


    @Column(nullable = false)
    private String emailId;
    //@Column(name = "Password", length = 10, nullable = false)
    //@Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,10}$")
    //@Size(min=3, max=10, message="password must be min of 3 chars and max of 10 chars")

    @Column(nullable = false)
    private String loginId;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String confirmpassword;

    //@Column(name = "Phonenumber", length = 10, nullable = false)
    @Column(nullable = false)
    private String phoneNumber;
    //@Column(name = "Role", length = 10, nullable = false)


}
