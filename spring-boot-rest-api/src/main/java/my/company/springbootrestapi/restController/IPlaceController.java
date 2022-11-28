package my.company.springbootrestapi.restController;

import my.company.springbootrestapi.model.Place;
import org.springframework.data.annotation.Id;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.servlet.http.HttpServletRequest;

public interface IPlaceController {

    @PostMapping(value = "/place", consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<Place> postPlace(@RequestBody Place place,
                                       HttpServletRequest request);
    @GetMapping(value = "/place/{id}")
    ResponseEntity<Place> getPlaceWithID(@PathVariable("id") final long Id,
                                    HttpServletRequest request);
    @GetMapping("/places")
    ResponseEntity<Iterable<Place>> getPlaces(HttpServletRequest request);
}
