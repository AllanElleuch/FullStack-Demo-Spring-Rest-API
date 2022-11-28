package my.company.springbootrestapi.restController.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StatusController {


    @Autowired
    StatusController() {
    }

    @GetMapping("/status")
    public String hello() {
        return "Server is up";
    }


}
