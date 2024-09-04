package com.klu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.klu.model.Contact;
import com.klu.service.ContactServiceImpl;

@Controller
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/contact")
public class ContactRestController {

	@Autowired
	ContactServiceImpl cr;
	
	@PostMapping("/save")
	public ResponseEntity<String> saveContact(@RequestBody Contact c)
	{
		int ic = cr.addContact(c);
		return new ResponseEntity<String>("Data Inserted Success Fully  "+ic,HttpStatus.OK);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Contact>> getAllContact()
	{
		List<Contact> c = cr.getAllContact();
		return new ResponseEntity<List<Contact>>(c,HttpStatus.OK);
	}
	
	@GetMapping("/one/{id}")
	public ResponseEntity<Contact> getById(@PathVariable int id)
	{
		Contact c = cr.getContactById(id);
		return new ResponseEntity<Contact>(c,HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteById(@PathVariable int id)
	{
		cr.deleteContactById(id);
		return new ResponseEntity<String>("Contact Deleted Successfully" ,HttpStatus.OK);
	}
}
