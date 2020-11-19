package org.miolacnc;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
	
	public void addCorsMappings(CorsRegistry registry) {
		registry
		        .addMapping("/**")
		        .allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS")
		        .allowedOrigins("https://app-miolaconcours-student.herokuapp.com")
		        .allowedHeaders("Access-Control-Allow-Headers", "Access-Control-Allow-Origin",
                "Access-Control-Request-Method", "Access-Control-Request-Headers", "Origin",
                "Cache-Control", "Content-Type");
		       
	}	

}
