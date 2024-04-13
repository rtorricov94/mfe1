import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Subscription, debounceTime } from 'rxjs';
import { LoadingInterceptorService } from '../../interceptor/loading.interceptor.service';


@Component({
  selector: 'app-loading-bar',
  standalone: true,
  imports: [CommonModule,MatProgressBarModule],
  templateUrl: './loading-bar.component.html',
  styleUrl: './loading-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingBarComponent {
  isSpinnerVisible: boolean = false;
  loadingSubscription!: Subscription;

  public loadingService = inject(LoadingInterceptorService);
  ngOnInit() {
    
  }

  ngOnDestroy() {
    //this.loadingSubscription.unsubscribe();
  }
}
