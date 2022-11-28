package my.company.springbootrestapi.restController.impl;

import my.company.springbootrestapi.model.Place;
import my.company.springbootrestapi.repository.PlaceRepository;
import my.company.springbootrestapi.restController.IPlaceController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.HttpServletRequest;

@RestController
public class PlaceController implements IPlaceController {

    private final PlaceRepository placeRepository;

    @Autowired
    PlaceController(final PlaceRepository placeRepository) {
        this.placeRepository = placeRepository;
    }

    public ResponseEntity<Place> postPlace(Place place, HttpServletRequest request) {
        var returnedInstance = placeRepository.save(new Place(place));
        return new ResponseEntity<>(returnedInstance, HttpStatus.OK);
    }


    @Override
    public ResponseEntity<Place> getPlaceWithID(long Id, HttpServletRequest request) {
        var place = placeRepository.findById(Id);
        if (place.isPresent())
            return new ResponseEntity<>(place.get(), HttpStatus.OK);
        else
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("Invalid ride id %s", Id)); //return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<Iterable<Place>> getPlaces(HttpServletRequest request) {
        var places = placeRepository.findAll();
        return new ResponseEntity<>(places, HttpStatus.OK);
    }


}
