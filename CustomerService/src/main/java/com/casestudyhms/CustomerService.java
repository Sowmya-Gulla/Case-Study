package com.casestudyhms;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {
	@Autowired
	private CustomerRepository customerrepository;
	
	public Customer addCustomer(Customer customer) {
		return customerrepository.save(customer);
		
    }
	
	public List<Customer> getCustomers(){
		List<Customer> customer=customerrepository.findAll();
		return customer;
		
	}
	
	
	public Optional<Customer> getCustomer(String id){
		return customerrepository.findById(id);
	}
		
	 
	 public void deleteCustomer(Customer customer) {
		 customerrepository.delete(customer);
		 
	}
	


}
