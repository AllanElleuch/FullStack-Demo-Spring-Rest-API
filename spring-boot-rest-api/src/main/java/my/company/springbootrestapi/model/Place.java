package my.company.springbootrestapi.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Place {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String address;

    @OneToMany(cascade = {CascadeType.ALL})
    private List<Period> periods;

    public Place() {
    }

    public Place(String name, String address, List<Period> period) {
        this.name = name;
        this.address = address;
        this.periods = period;
    }

    public Place(Place place) {
        this.name = place.name;
        this.address = place.address;
        this.periods = place.periods;
    }


    public List<Period> getPeriods() {
        return periods;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }


}
