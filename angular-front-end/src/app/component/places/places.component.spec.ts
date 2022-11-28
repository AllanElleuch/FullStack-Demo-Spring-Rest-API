import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {PlacesComponent} from './places.component';
import {replaceImport} from "@angular/core/schematics/utils/typescript/imports";

describe('PlacesComponent', () => {
    let component: PlacesComponent;
    let fixture: ComponentFixture<PlacesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [PlacesComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PlacesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


});
