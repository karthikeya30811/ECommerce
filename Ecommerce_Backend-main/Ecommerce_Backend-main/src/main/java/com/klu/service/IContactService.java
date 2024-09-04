package com.klu.service;

import java.util.List;

import com.klu.model.Contact;

public interface IContactService {
	public List<Contact> getAllContact();
	public Contact getContactById(int id);
	public void deleteContactById(int id);
	public int addContact(Contact c);
}
