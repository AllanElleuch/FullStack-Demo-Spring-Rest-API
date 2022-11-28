package my.company.springbootrestapi.model;

import javax.persistence.*;
import java.sql.Time;

@Entity
public class Period {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Integer day;

    private Time start;
    private Time end;

    public Period() {

    }
    public Period(Integer day, Time start, Time end){
        this.start = start;
        this.end = end;
    }

    public Long getId() {
        return id;
    }

    public Integer getDay() {
        return day;
    }

    public Time getStart() {
        return start;
    }

    public Time getEnd() {
        return end;
    }
}
