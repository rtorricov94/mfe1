import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptorService {
  loadingSub = new BehaviorSubject<boolean>(false);
  loadingMap = new Map<string, boolean>();
 
  setLoading(state: boolean, url: string) {
     if (state) {
       this.loadingMap.set(url, true);
       this.loadingSub.next(true);
     } else {
       this.loadingMap.delete(url);
       if (this.loadingMap.size === 0) {
         this.loadingSub.next(false);
       }
     }
  }
}
