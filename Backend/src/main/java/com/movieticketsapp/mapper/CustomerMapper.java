package com.movieticketsapp.mapper;


import com.movieticketsapp.Dto.CustomerDto;
import com.movieticketsapp.Model.Customer;

public class CustomerMapper {

    public static CustomerDto mapToCustomerDto(Customer customer){
        CustomerDto customerDto=new CustomerDto(
                customer.getCustomerID(),
                customer.getEmailId(),
                customer.getPassword(),
                customer.getFirstName(),
                customer.getLastName(),
                customer.getLoginId(),
                customer.getPhoneNumber(),
                customer.getConfirmpassword()
                );
        return customerDto;
    }


    public static Customer mapToCustomer(CustomerDto customerDto){
        Customer customer=new Customer(
                customerDto.getCustomerID(),
                customerDto.getEmailId(),
                customerDto.getPassword(),
                customerDto.getFirstName(),
                customerDto.getLastName(),
                customerDto.getConfirmpassword(),
                customerDto.getPhoneNumber(),
                customerDto.getLoginId()
        );
        return customer;
    }

}
