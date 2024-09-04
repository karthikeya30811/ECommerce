package com.klu.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klu.model.User;

public interface UserRepository  extends JpaRepository<User, Integer> {
	List<User> findAllByEmail(String email);
}
