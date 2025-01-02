package com.movieticketsapp.controller;


import com.movieticketsapp.Dto.CustomerDto;
import com.movieticketsapp.Model.Customer;
import com.movieticketsapp.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@CrossOrigin
@RequestMapping("api/public")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @Autowired
    RestTemplate restTemplate;

    @PostMapping("/registration")
    public ResponseEntity<Customer> saveCustomer(@RequestBody CustomerDto customerDto, String token) {
        HttpHeaders headers=new HttpHeaders();
        headers.add("Authorization",token);
        HttpEntity<String> entity=new HttpEntity<>("body", headers);
        TokenData tokenData=restTemplate .postForObject("http://ltin402623.cts.com:8085/api/private/authorization",entity, TokenData.class);
        
        Customer customer = customerService.addCustomer(customerDto);
        return new ResponseEntity<>(customer, HttpStatus.CREATED);

    }

    @GetMapping("/get/{email}")
    public Customer getAllCustomerDetails(@PathVariable("email") String emailId){
        return customerService.getAllCustomerDetails(emailId);
        //return new CustomerDto(customerDtos,HttpStatus.OK);
    }
}
