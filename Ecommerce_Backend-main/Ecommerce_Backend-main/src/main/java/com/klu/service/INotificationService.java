package com.klu.service;

import java.util.List;

import com.klu.model.Notification;

public interface INotificationService {
	public List<Notification> allNotifications();
	public void addNotification(Notification n);
	public void deleteNotification(int id);
}
