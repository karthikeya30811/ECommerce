package com.klu.service;

import java.util.List;

import com.klu.model.Feedback;

public interface IFeedbackService {
	
	public String addFeedBack(Feedback f);
	public String deleteFeedBack(int id);
	public List<Feedback> allFeedBack();
	public Feedback getFeedBackById(int id);
}
