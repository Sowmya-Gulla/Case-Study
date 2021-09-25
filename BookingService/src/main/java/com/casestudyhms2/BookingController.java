package com.casestudyhms2;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/booking")
public class BookingController {
	
	@Autowired
	private BookingRepository bookingrepository;
	
	@PostMapping("/addBooking")
	public String saveBooking(@RequestBody Booking booking) {
		bookingrepository.save(booking);
		return "Booked with id :  " + booking.getId();
    }
	
	@GetMapping("/{id}")
	public Optional<Booking> getBooking(@PathVariable String id){
		return bookingrepository.findById(id);
	}
	
	@PutMapping("/update/{id}")
	public Booking updateBooking(@PathVariable("id") String id,@RequestBody Booking booking ) {
		booking.setId(id);
		bookingrepository.save(booking);
		return booking;
	}
		
	 @DeleteMapping("/delete/{id}")
	 public String deleteBooking (@PathVariable String id) {
		 bookingrepository.deleteById(id);
		 return "Booking deleted with id : "+id;
	}
	

}
