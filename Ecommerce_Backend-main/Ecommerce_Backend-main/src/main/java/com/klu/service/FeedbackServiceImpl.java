package com.klu.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.model.Feedback;
import com.klu.repository.FeedbackRepository;

@Service
public class FeedbackServiceImpl implements IFeedbackService{
	
	@Autowired
	FeedbackRepository fr;

	@Override
	public String addFeedBack(Feedback f) {
		fr.save(f);
		return "Saved Success";
	}

	@Override
	public String deleteFeedBack(int id) {
		// TODO Auto-generated method stub
		fr.deleteById(id);
		return "Deleted Successfully";
	}

	@Override
	public List<Feedback> allFeedBack() {
		List<Feedback> al = fr.findAll();
		return al;
	}

	@Override
	public Feedback getFeedBackById(int id) {
		Feedback f = fr.findFeedbackById(id);
		return f;
	}

}
