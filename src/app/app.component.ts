import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingBarComponent } from './common/components/loading-bar/loading-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoadingBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mf1menuunico';
}
