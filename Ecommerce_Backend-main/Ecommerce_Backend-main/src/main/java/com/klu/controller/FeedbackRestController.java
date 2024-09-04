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

import com.klu.model.Feedback;
import com.klu.service.FeedbackServiceImpl;

@Controller
@RequestMapping("/feedback")
@CrossOrigin(origins = "http://localhost:3000/")
public class FeedbackRestController 
{
	
	@Autowired
	FeedbackServiceImpl fr;
	
	@PostMapping("/save")
	public ResponseEntity<String> addFeedBack(@RequestBody Feedback f)
	{
		System.out.println("Data -- save");
		fr.addFeedBack(f);
		return new ResponseEntity<String>("Data Inserted Successfully",HttpStatus.OK);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Feedback>> allFeedBack(){
		List<Feedback> f = fr.allFeedBack();
		return  new ResponseEntity<List<Feedback>>(f,HttpStatus.OK);
	}
	
	@GetMapping("/one/{id}")
	public ResponseEntity<Feedback> getByFeedById(@PathVariable int id)
	{
		 Feedback f  =  fr.getFeedBackById(id);
		return new ResponseEntity<Feedback>(f,HttpStatus.OK);
	}
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> delById(@PathVariable int id)
	{
		fr.deleteFeedBack(id);
		return new  ResponseEntity<String>("Deleted SuccessFully", HttpStatus.OK);
	}
}
