package com.klu.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;


@Data
@Entity
public class User {

	@Id
	@GeneratedValue
	private Integer id;
	
	public String username;
	
	public String email;
	
	public String password;
	
	public String url;
	
	public String location;
	
	public String phno;
	
	public String gender;
	
	public boolean isAdmin;
	
	public boolean isActive;
	
	public boolean loginsuccess ;

	
	public User() {
    }
	
	public User(boolean login)
	{
		this.loginsuccess = login;
	}

	public User(Integer id, String username, String email, String password, String url, String loaction, String phno,
			String gender, boolean isAdmin, boolean isActive, boolean loginsuccess) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
		this.url = url;
		this.location = loaction;
		this.phno = phno;
		this.gender = gender;
		this.isAdmin = isAdmin;
		this.isActive = isActive;
		this.loginsuccess = loginsuccess;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String loaction) {
		this.location = loaction;
	}

	public String getPhno() {
		return phno;
	}

	public void setPhno(String phno) {
		this.phno = phno;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public boolean isAdmin() {
		return isAdmin;
	}

	public void setAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}

	public boolean isActive() {
		return isActive;
	}

	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}

	public boolean isLoginsuccess() {
		return loginsuccess;
	}

	public void setLoginsuccess(boolean loginsuccess) {
		this.loginsuccess = loginsuccess;
	}
}
