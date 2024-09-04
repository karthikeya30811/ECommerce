package com.klu.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.model.User;
import com.klu.repository.UserRepository;

@Service
public class UserServiceImpl implements IUserService{

	@Autowired
	UserRepository userrepo;
	@Override
	public User getUserById(int id) {
	    Optional<User> opt = userrepo.findById(id);

	    // Check if the user exists, and return the user or null if not found
	    return opt.orElse(null);
	}

	@Override
	public int addUser(User u) {
		// TODO Auto-generated method stub
		Integer id = userrepo.save(u).getId();
		return id;
	}

	@Override
	public void deleteUser(int id) {
		// TODO Auto-generated method stub
		User u = getUserById(id);
		userrepo.delete(u);
	}

	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		List<User> al = userrepo.findAll();
		return al;
	}

	@Override
	public void updateuser(User u) {
		// TODO Auto-generated method stub
		userrepo.save(u);
	}
	public List<User> getUserByEmail(String email)
	{
		List<User> u = userrepo.findAllByEmail(email);
		return u;
	}

	@Override
	public void updateActive(int id) {
		// TODO Auto-generated method stub
		User u = getUserById(id);
		u.setActive(!u.isActive);
		userrepo.save(u);
	}
}
