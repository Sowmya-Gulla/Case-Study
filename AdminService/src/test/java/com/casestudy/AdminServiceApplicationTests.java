package com.casestudy;

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
class AdminServiceApplicationTests {

	@Autowired
	private AdminService service;
	
	@MockBean
	private AdminRepository adminrepository;
	
	@Test
	public void getAdminTest() {
		when(adminrepository.findAll()).thenReturn(Stream
				.of(new Admin("admin1","admin1")).collect(Collectors.toList()));
		assertEquals(1,service.getAdmin().size());
	}
	
	@Test
	public void saveAdminTest() {
		Admin admin=new Admin("admin1","admin1");
		when(adminrepository.save(admin)).thenReturn(admin);
		assertEquals(admin,service.addAdmin(admin));
	}

}
