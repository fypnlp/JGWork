package com.jacapi.statuses;

import static io.restassured.RestAssured.given;
import org.testng.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.jacapi.common.RestUtilities;
import com.jacapi.constants.EndPoints;
import com.jacapi.constants.Path;

import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import static org.hamcrest.Matchers.*;
import java.util.ArrayList; 

public class GitUpdateClass {
	
	
	
	RequestSpecification reqSpec;
	ResponseSpecification resSpec;
	
	@BeforeClass
	public void setup(){
		
		reqSpec = RestUtilities.getRequestSpecification();
		
		reqSpec.queryParam("user_id", "jacquiQA");
		reqSpec.basePath(Path.STATUSES);
		
		resSpec = RestUtilities.getResponseSpecification();
		
	}
	//Scenario: Read Twitter time line
		//Given Situation
		//When I perform an action
		//Then I will get an outcome
	
	@Test
	public void readTweets(){
		
		given()
			.spec(RestUtilities.createQueryParam(reqSpec, "count", "1"))
		.when()
			.get(EndPoints.STATUSES_USER_TIMELINE)
			.then()
			//.log().all()
			.spec(resSpec)
			.body("user.name", hasItem("jacquiQA"));
		
	}
	
	@Test
	public void readTweets1(){
		RestUtilities.setEndPoint(EndPoints.STATUSES_USER_TIMELINE);
		Response res = RestUtilities.getResponse(
				RestUtilities.createQueryParam(reqSpec, "count", "1") ,"get");
		ArrayList<String> NameList = res.path("user.name");
		System.out.println("READ TWEET 2 DIFFERENT METHOD TO USE");
		System.out.println("READ TWEET 2 DIFFERENT METHOD TO USE35");
		System.out.println("READ TWEET 2 DIFFERENT METHOD TO USE36");
		System.out.println("READ TWEET 2 DIFFERENT METHOD TO USE92");
		System.out.println("READ TWEET 2 DIFFERENT METHOD TO USE99");
		System.out.println("READ TWEET 2 DIFFERENT METHOD TO USE107");


		System.out.println(NameList);
		Assert.assertTrue(NameList.contains("jacquiQA"));
		
	}
	
	
	
	
}
