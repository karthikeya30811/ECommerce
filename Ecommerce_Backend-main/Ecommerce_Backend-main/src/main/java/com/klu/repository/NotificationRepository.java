package com.klu.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klu.model.Notification;

public interface NotificationRepository extends JpaRepository<Notification, Integer> {
	Notification findNotificationById(int id);
}
