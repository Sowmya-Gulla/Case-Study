package com.casestudyhms;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
class CustomerServiceApplicationTests {

	@Autowired
	private CustomerService service;
	
	@MockBean
	private CustomerRepository customerrepository;
	
	@Test
	public void getCustomersTest() {
		when(customerrepository.findAll()).thenReturn(Stream
				.of(new Customer("1","sow",756523235, "abc@gmail.com","5/10/2021","7/10/2021"),new Customer("2","sow1",956523235,"abcd@gmail.com","6/10/2021","8/10/2021")).collect(Collectors.toList()));
		assertEquals(2,service.getCustomers().size());
	}
	
	@Test
	public void saveCustomerTest() {
		Customer customer=new Customer("3","sow3",886523235, "aaaa@gmail.com","2/10/2021","6/10/2021");
		when(customerrepository.save(customer)).thenReturn(customer);
		assertEquals(customer,service.addCustomer(customer));
	}
	
	@Test
	public void deleteCustomerTest() {
		Customer customer=new Customer("3","sow3",886523235, "aaaa@gmail.com","2/10/2021","6/10/2021");
		service.deleteCustomer(customer);
	}
	


}
