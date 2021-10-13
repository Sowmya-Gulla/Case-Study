

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="customers")
public class Customer {
	@Id
	private String id;
	private String name;
	private Number phonenum;
	private String email;
	private String check_in;
	private String check_out;
	
	
	public Customer() {
		
	}
	public Customer(String id, String name, Number phonenum, String email, String check_in, String check_out) {
		super();
		this.id = id;
		this.name = name;
		this.phonenum = phonenum;
		this.email = email;
		this.check_in = check_in;
		this.check_out = check_out;
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
	public Number getPhonenum() {
		return phonenum;
	}
	public void setPhonenum(Number phonenum) {
		this.phonenum = phonenum;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
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
		return "Customer [id=" + id + ", name=" + name + ", phonenum=" + phonenum + ", email=" + email + ", check_in="
				+ check_in + ", check_out=" + check_out + "]";
	}
	
	
			
}
