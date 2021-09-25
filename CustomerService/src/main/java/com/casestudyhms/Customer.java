package com.casestudyhms;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="customer")
public class Customer {
	@Id
	private String id;
	private String name;
	private double phonenum;
	private String email;
	
	
	public Customer(String id, String name, double phonenum, String email) {
		super();
		this.id = id;
		this.name = name;
		this.phonenum = phonenum;
		this.email = email;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getPhonenum() {
		return phonenum;
	}
	public void setPhonenum(double phonenum) {
		this.phonenum = phonenum;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		return "Customer [id=" + id + ", name=" + name + ", phonenum=" + phonenum + ", email=" + email + "]";
	}
	
	
		
}
