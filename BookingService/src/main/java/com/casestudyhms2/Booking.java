package com.casestudyhms2;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="booking")
public class Booking {
	@Id
	private String id;
	private String quantity;
	private String check_in;
	private String check_out;
	
	
	public Booking(String id, String quantity, String check_in, String check_out) {
		super();
		this.id = id;
		this.quantity = quantity;
		this.check_in = check_in;
		this.check_out = check_out;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
	public String getCheck_in() {
		return check_in;
	}
	public void setCheck_in(String check_in) {
		this.check_in = check_in;
	}
	public String getCheck_out() {
		return check_out;
	}
	public void setCheck_out(String check_out) {
		this.check_out = check_out;
	}
	@Override
	public String toString() {
		return "Booking [id=" + id + ", quantity=" + quantity + ", check_in=" + check_in + ", check_out=" + check_out
				+ "]";
	}
	

}
