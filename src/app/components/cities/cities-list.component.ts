import { Component, OnInit } from '@angular/core';
import { ICity } from '../../models/city.model';
import { CitiesService } from '../../services/cities/cities.service';

@Component ({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit{

    public cities: ICity[]= [];

    constructor(private citiesService: CitiesService) {}

    ngOnInit(): void {
        this.readCities();
    }

    readCities(): void {
        this.citiesService
        .readCities()
        .subscribe((data: ICity[]) => {
          this.cities = data
        });
    }

    deleteCity(id: number) {
        this.citiesService
        .deleteCity(id)
        .subscribe(data => {
            this.readCities();
        });
    }
}