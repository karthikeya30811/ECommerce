package com.klu.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Feedback {

	@Id
	@GeneratedValue
	int id;
	
	int stars;
	
	String name;
	
	String review;
	
	String image;
	
	String time;
	
	public Feedback() {
		// TODO Auto-generated constructor stub
	}

	public Feedback(int id, int stars, String name, String review, String image, String time) {
		super();
		this.id = id;
		this.stars = stars;
		this.name = name;
		this.review = review;
		this.image = image;
		this.time = time;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getStars() {
		return stars;
	}

	public void setStars(int stars) {
		this.stars = stars;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	
}
