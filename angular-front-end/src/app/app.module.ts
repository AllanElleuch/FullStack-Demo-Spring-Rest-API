import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PlacesComponent} from './component/places/places.component';
import {HttpClientModule} from "@angular/common/http";
import {PlaceDetailComponent} from './component/place-detail/place-detail.component';
import {RoutingModule} from "./routing/routing.module";

@NgModule({
    declarations: [
        AppComponent,
        PlacesComponent,
        PlaceDetailComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

