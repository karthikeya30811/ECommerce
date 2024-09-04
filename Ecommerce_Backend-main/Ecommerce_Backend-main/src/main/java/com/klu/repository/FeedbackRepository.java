package com.klu.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klu.model.Feedback;

public interface FeedbackRepository  extends JpaRepository<Feedback, Integer>{
	
	public Feedback findFeedbackById(int id); 

}
