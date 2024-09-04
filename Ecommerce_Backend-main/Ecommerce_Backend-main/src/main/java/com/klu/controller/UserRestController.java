package com.klu.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klu.model.User;
import com.klu.service.IUserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/user")
public class UserRestController {

	@Autowired
	private IUserService us;
	
	@PostMapping("/save")
	public ResponseEntity<String> saveUser(@RequestBody User user)
	{
		Integer id = us.addUser(user);
		return new ResponseEntity<String>("User '"+id+"' | saved",HttpStatus.OK);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<User>> allUsers()
	{
		List<User> al = us.getAllUsers();
		return new ResponseEntity<List<User>>(al,HttpStatus.OK);
	}
	
	@GetMapping("/one/{id}")
	public ResponseEntity<User> oneUser(@PathVariable Integer id)
	{
		User user = us.getUserById(id);
		return new ResponseEntity<User>(user,HttpStatus.OK);
	}
	
	@PostMapping("/email/{email}")
	public ResponseEntity<User> getByEmail(@PathVariable String email,@RequestBody User user)
	{
		List<User> ux = us.getUserByEmail(email);
//		User user = new User();
		System.out.print(ux);
		for(User u: ux)
		{
			System.out.print(u);
			if (u != null) {
				if(user.getPassword().equals(u.getPassword()))
				{
					System.out.print(u);
					u.setLoginsuccess(true);
					return new ResponseEntity<User>(u, HttpStatus.OK);
				}
//				else
//				{
//					User u1 = new User(false);
//				    return new ResponseEntity<User>(u1, HttpStatus.OK);
//				}
			     // User found, return 200 OK
//			} else {
//			    User u1 = new User(false);
//			    return new ResponseEntity<User>(u1, HttpStatus.OK);
//			}

		}
		}
		User u1 = null;
		return new ResponseEntity<User>(u1, HttpStatus.OK);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<String> updateUser(@PathVariable Integer id, @RequestBody User user)
	{
		user.setId(id);
		System.out.print(user);
		us.updateuser(user);
		return new ResponseEntity<String>("User Update "+id+" Successfully", HttpStatus.OK);
	}
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable Integer id)
	{
		us.deleteUser(id);
		return new ResponseEntity<String>("User "+id+" Deleted Successfully",HttpStatus.OK);
	}
	@PutMapping("/active/{id}")
	public ResponseEntity<String> updateActive(@PathVariable Integer id)
	{
		us.updateActive(id);
		return new ResponseEntity<String>("Status Updated Successfully",HttpStatus.OK);
	}
}
