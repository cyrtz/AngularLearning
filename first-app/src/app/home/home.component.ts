import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

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
      <app-housing-location></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
