import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { DogsService } from './services/dogs.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';

  constructor(private dogService: DogsService) { }
  ngOnInit() {
    this.dogService.getDogs().subscribe(data => {
      console.log(data);
    })
  }

}
