import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlaceDetailComponent} from './place-detail.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";

describe('PlaceDetailComponent', () => {
    let component: PlaceDetailComponent;
    let fixture: ComponentFixture<PlaceDetailComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientModule],
            declarations: [PlaceDetailComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PlaceDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
