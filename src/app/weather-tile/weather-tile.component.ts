import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-tile',
  standalone: true,
  imports: [],
  template: `
    <section>
      <div class="tile">
        <div class="card-upper">
        </div>
        <div class="card-lower">
        </div>
      </div>
    </section>
  `,
  styleUrl: './weather-tile.component.css'
})
export class WeatherTileComponent {

}
