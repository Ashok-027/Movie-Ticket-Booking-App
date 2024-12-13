package com.movieticketsapp.repo;

import com.movieticketsapp.Model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepo extends JpaRepository<Customer, Integer> {
    //Customer findEmailById(String emailId);

    //Customer findByEmailId(String emailId);

    Customer findByEmailId(String emailId);
}
