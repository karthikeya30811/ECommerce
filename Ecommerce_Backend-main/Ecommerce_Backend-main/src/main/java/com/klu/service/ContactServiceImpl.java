package com.klu.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.model.Contact;
import com.klu.repository.ContactRepository;


@Service
public class ContactServiceImpl implements IContactService {

	@Autowired
	ContactRepository cr;
	
	@Override
	public List<Contact> getAllContact() {
		List<Contact> c = cr.findAll();
		return c;
	}

	@Override
	public Contact getContactById(int id) {
		// TODO Auto-generated method stub
		return cr.findContactById(id);
	}

	@Override
	public void deleteContactById(int id) {
		Contact c = cr.findContactById(id);
		cr.delete(c);
	}

	@Override
	public int  addContact(Contact c) {
		int ic = cr.save(c).getId();
		return ic;
	}

}
