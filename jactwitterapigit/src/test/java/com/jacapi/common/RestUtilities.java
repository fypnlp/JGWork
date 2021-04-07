package com.jacapi.common;

import static org.hamcrest.Matchers.lessThan;
import static io.restassured.RestAssured.given;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import com.jacapi.constants.Auth;
import com.jacapi.constants.Path;

import io.restassured.RestAssured;
import io.restassured.authentication.AuthenticationScheme;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.path.xml.XmlPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;

public class RestUtilities {

	public static String ENDPOINTS;
	public static RequestSpecBuilder REQUEST_BUILDER;
    public static RequestSpecification REQUEST_SPEC;
    public static ResponseSpecBuilder RESPONSE_BUILDER;
    public static ResponseSpecification RESPONSE_SPEC;
    
    //1.to SET your end points file
    public static void setEndPoint(String epoint){
    	ENDPOINTS = epoint;
    }
    //2. Your request specifications to twitter
    public static RequestSpecification getRequestSpecification(){
    	
    	AuthenticationScheme authScheme = 
				RestAssured.oauth(Auth.CONSUMER_KEY, Auth.CONSUMER_SECRET, Auth.ACCESS_TOKEN, 
						Auth.ACCESS_SECRET);
    	REQUEST_BUILDER = new RequestSpecBuilder();
    	REQUEST_BUILDER.setBaseUri(Path.BASE_URI);
    	REQUEST_BUILDER.setAuth(authScheme);
    	REQUEST_SPEC = REQUEST_BUILDER.build();
    	return REQUEST_SPEC;
    	
    }

    
    //3. Your response specifications
    public static ResponseSpecification getResponseSpecification(){
 
    RESPONSE_BUILDER =  new ResponseSpecBuilder();
    RESPONSE_BUILDER.expectStatusCode(200);
    RESPONSE_BUILDER.expectResponseTime(lessThan(3L),TimeUnit.SECONDS);
    RESPONSE_SPEC = RESPONSE_BUILDER.build();
    return RESPONSE_SPEC;
    
}

    //4.  To check a single parameter inquiry use key and value syntax
    public static RequestSpecification createQueryParam(RequestSpecification rspec,
			String param, String value) {
		return rspec.queryParam(param, value);
	}
    
    //5. To check for multiple items (keys and values)  use a hash map
    public static RequestSpecification createQueryParam(RequestSpecification rspec, 
    		Map<String,String>queryMap){
    
    	return rspec.queryParams(queryMap);
    	
    }
    
    //6. When you need to add a specific path
    public static RequestSpecification createPathParam(RequestSpecification rspec,
			String param, String value) {
		return rspec.pathParam(param, value);
	}

    //7. To get a response from the end points from twitter (GIVEN)
    public static Response getResponse(){
    	return given().get(ENDPOINTS);
    }
    //8 Request specification for GET POST PUT and DELETE
    public static Response getResponse(RequestSpecification reqSpec, String type){
    	REQUEST_SPEC.spec(reqSpec);
		Response response = null;
		if (type.equalsIgnoreCase("get")) {
			response = given().spec(REQUEST_SPEC).get(ENDPOINTS);
		} else if (type.equalsIgnoreCase("post")) {
			response = given().spec(REQUEST_SPEC).post(ENDPOINTS);
		} else if (type.equalsIgnoreCase("put")) {
			response = given().spec(REQUEST_SPEC).put(ENDPOINTS);
		} else if (type.equalsIgnoreCase("delete")) {
			response = given().spec(REQUEST_SPEC).delete(ENDPOINTS);
		} else {
			System.out.println("Type is not supported");
		}
		//response.then().log().all();
		response.then().spec(RESPONSE_SPEC);
		return response;
    		
    		
    }
   //9.  Get the response in JSON 
    public static JsonPath getJsonPath(Response res){
    	String path = res.asString();
    	return new JsonPath(path);
    }
    //10. Get the response in XML
    public static XmlPath getXmlPath(Response res) {
		String path = res.asString();
		return new XmlPath(path);
	}
    //11. To reset your base path for each run
    public static void resetBathPath(){
    	RestAssured.basePath = null;
    }

     //12. Set the content type to either JSON or XML
    public static void setContentType(ContentType type){
    	given().contentType(type);
    }
    
}
    
    

