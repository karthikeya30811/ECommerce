package com.klu.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klu.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Integer>{
	Contact findContactById(int id);
}
