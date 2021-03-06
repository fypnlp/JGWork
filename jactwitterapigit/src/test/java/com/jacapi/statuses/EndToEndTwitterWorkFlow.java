
package com.jacapi.statuses;
import static io.restassured.RestAssured.given;
import org.testng.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.jacapi.common.RestUtilities;
import com.jacapi.constants.EndPoints;
import com.jacapi.constants.Path;

import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import static org.hamcrest.Matchers.*;
import java.util.ArrayList;


public class EndToEndTwitterWorkFlow {
	
	RequestSpecification reqSpec;
	ResponseSpecification resSpec;
	String tweetId = "";
	
	@BeforeClass
	public void setup() {
		reqSpec = RestUtilities.getRequestSpecification();
		reqSpec.basePath(Path.STATUSES);
		
		resSpec = RestUtilities.getResponseSpecification();	
	}

	
	@Test
	public void postTweet() {
		//Scenario 1: Post Twitter time line
		//Given Situation
		//When I perform an action
		//Then I will get an outcome
			
		Response response =
				given()
					.spec(RestUtilities.createQueryParam(reqSpec, "status", "End to End Tweet"))
				.when()
					.post(EndPoints.STATUSES_TWEET_POST)
				.then()
					.spec(resSpec)
					.extract()
					.response();
		JsonPath jsPath = RestUtilities.getJsonPath(response);
		tweetId = jsPath.get("id_str");
		System.out.println("The response.path: " + tweetId);
	}
	
	@Test(dependsOnMethods = {"postTweet"})
	public void readTweet() {
		//Scenario 2: Read Twitter time line
		//Given Situation
		//When I perform an action
		//Then I will get an outcome
	
		RestUtilities.setEndPoint(EndPoints.STATUSES_TWEET_READ_SINGLE);
		Response res = RestUtilities.getResponse(
				RestUtilities.createQueryParam(reqSpec, "id", tweetId), "get");
		String text = res.path("text");
		System.out.println("The tweet text is: " + text);
		
	}
	
	@Test(dependsOnMethods = {"readTweet"})
	public void deleteTweet() {
		
		//Scenario 3: Delete Twitter time line
		//Given Situation
		//When I perform an action
		//Then I will get an outcome
		
		given()
		.spec(RestUtilities.createPathParam(reqSpec, "id", tweetId))
	.when()
		.post(EndPoints.STATUSES_TWEET_DESTROY)
	.then()
		.spec(resSpec);
		
	}
	
	
	
	
}
