package my.company.springbootrestapi.repository;

import my.company.springbootrestapi.model.Place;
import org.springframework.data.repository.CrudRepository;

public interface PlaceRepository extends CrudRepository<Place, Long> {
}
