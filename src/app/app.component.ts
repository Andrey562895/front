import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { DogsService } from './services/dogs.service';
import { IDog } from './models/dog.model';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToMediaPipe } from './pipes/to-media.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatProgressSpinnerModule, ScrollingModule, ToMediaPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'front';
  dogs: IDog[] | undefined;

  constructor(private dogService: DogsService, private cdr: ChangeDetectorRef) { }
  ngOnInit() {
    this.dogService.getDogs().subscribe(data => {
      this.dogs = data;
      this.cdr.detectChanges();
    })
  }
}
