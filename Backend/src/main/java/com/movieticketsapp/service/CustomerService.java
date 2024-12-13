package com.movieticketsapp.service;


import com.movieticketsapp.Dto.CustomerDto;
import com.movieticketsapp.Model.Customer;


public interface CustomerService {

    Customer addCustomer(CustomerDto customerDto);

    Customer getAllCustomerDetails(String emailId);

    //Customer getAllCustomerDetails(String emailId);
}
