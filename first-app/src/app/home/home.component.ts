import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  // standalone: true,
  // imports: [CommonModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filiter by city">
        <button  type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: './assets/pexels-pixabay-210538.jpg',
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
