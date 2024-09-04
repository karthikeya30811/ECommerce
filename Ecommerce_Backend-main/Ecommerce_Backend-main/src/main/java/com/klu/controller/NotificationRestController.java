package com.klu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klu.model.Notification;
import com.klu.service.INotificationService;

@RestController
@RequestMapping("/notification")
@CrossOrigin(origins = "http://localhost:3000/")
public class NotificationRestController {
	
	@Autowired
	INotificationService ns;

	@GetMapping("/all")
	public ResponseEntity<List<Notification>> getAllNotification(){
		
		List<Notification> al = ns.allNotifications();
		
		return new ResponseEntity<List<Notification>>(al,HttpStatus.OK);
	}
	
	@PostMapping("/save")
	public ResponseEntity<String> addNotification(@RequestBody Notification n)
	{
		ns.addNotification(n);
		return new ResponseEntity<String>("Data Inserted Successfully" , HttpStatus.OK);
	}
	
}
