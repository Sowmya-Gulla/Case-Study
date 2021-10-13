package com.casestudy;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {
	@Autowired
	private AdminRepository adminrepo;
	
	@PostMapping("/addAdmin")
	public String saveAdmin(@RequestBody Admin admin) {
		adminrepo.save(admin);
		return "Admin added";
    }
	@GetMapping("/findAllAdmin")
	public List<Admin> getAdmin(){
		return adminrepo.findAll();
		
	}
	

}
