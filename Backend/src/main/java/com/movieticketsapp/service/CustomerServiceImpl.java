package com.movieticketsapp.service;

import com.movieticketsapp.Dto.CustomerDto;
import com.movieticketsapp.Model.Customer;
import com.movieticketsapp.mapper.CustomerMapper;
import com.movieticketsapp.repo.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    private CustomerRepo customerRepo;

    //private String authUrl="http://ltin402623.cts.com:8085/api/private/authorization";
    @Override
    public Customer addCustomer(CustomerDto customerDto) {

        //HttpHeaders httpHeaders=new HttpHeaders();
        //httpHeaders.add("Authorization",token);
        Customer customer = CustomerMapper.mapToCustomer(customerDto);
        Customer savedCustomer=customerRepo.save(customer);

        return savedCustomer;
    }

    public Customer getAllCustomerDetails(String emailId){
        return customerRepo.findByEmailId(emailId);
        //return customers.stream().map(CustomerMapper::mapToCustomerDto)
          //      .collect(Collectors.toList());

    }

}
