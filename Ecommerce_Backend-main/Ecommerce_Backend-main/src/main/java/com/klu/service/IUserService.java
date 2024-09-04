package com.klu.service;

import java.util.List;

import com.klu.model.User;

public interface IUserService {
	public User getUserById(int id);
	public int addUser(User u);
	public void deleteUser(int id);
	public List<User> getAllUsers();
	public void updateuser(User u);
	public List<User> getUserByEmail(String email);
	public void updateActive(int id);
}
