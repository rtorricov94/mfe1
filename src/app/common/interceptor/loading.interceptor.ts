import { HttpEvent, HttpEventType, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Observable, finalize, tap } from "rxjs";
import { LoadingInterceptorService } from "./loading.interceptor.service";
import { inject } from "@angular/core";

//export class LoadingInterceptor implements HttpInterceptor{
    export const LoadingInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
//     activeRequests: number = 0;
//   skippUrls = ['/authrefresh'];

//   constructor(private loadingService: LoadingInterceptorService) {console.log('interceptado loadig') }

  
//  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     this.loadingService.setLoading(true, req.url);
//     return next.handle(req).pipe(
//       finalize(() => this.loadingService.setLoading(false, req.url))
//     );
//  }
const loadingService = inject(LoadingInterceptorService);
loadingService.setLoading(true, req.url);
return next(req).pipe(
    tap(event => {
      if (event.type === HttpEventType.Response) {
        loadingService.setLoading(false, req.url);
      }
    }));
}
