package com.klu.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.model.Notification;
import com.klu.repository.NotificationRepository;

@Service
public class NotificationServiceImpl  implements INotificationService{

	@Autowired
	NotificationRepository nr;
	
	@Override
	public List<Notification> allNotifications() {
		// TODO Auto-generated method stub
		List<Notification> al = nr.findAll();
		return al;
	}

	@Override
	public void addNotification(Notification n) {
		nr.save(n);
	}

	@Override
	public void deleteNotification(int id) {
		// TODO Auto-generated method stub
		Notification n = nr.findNotificationById(id);
		nr.delete(n);
	}

}
