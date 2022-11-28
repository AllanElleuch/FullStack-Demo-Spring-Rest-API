import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlaceDetailComponent} from "../component/place-detail/place-detail.component";
import {CommonModule} from "@angular/common";
import {PlacesComponent} from "../component/places/places.component";
import {Location} from '@angular/common';

const routes: Routes = [
    {path: '', component: PlacesComponent},
    // {path: 'dashboard', component: DashboardComponent},
    {path: 'detail/:id', component: PlaceDetailComponent},
    // {path: 'heroes', component: HeroesComponent}
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        // RouterModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]

})


export class RoutingModule {
}
