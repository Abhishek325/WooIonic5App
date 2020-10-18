import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class AppRequestInterceptor implements HttpInterceptor {
    appendWooAuthHeaders(url: string) {
        const wooAuthParamters = `consumer_key=${environment.woocommerce.consumer_key}
                                  &consumer_secret=${environment.woocommerce.consumer_secret}`;
        return (url.includes('?')) ? ('&' + wooAuthParamters) : ('?' + wooAuthParamters);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        // Code refine ALERT
        if (!request.url.includes('http')) { // The URL is not pre-set
            if (request.url.includes('customers') && request.method !== 'POST') {
                const requestUrl =
                    `${environment.origin}${environment.wpLegacyAPIEndpoint}${request.url}${this.appendWooAuthHeaders(request.url)}`;
                const newRequest = request.clone({ url: requestUrl });
                return next.handle(newRequest);
            } else if (request.url.includes('cart')) {
                const requestUrl = `${environment.origin}${environment.cartEndpoint}${request.url}`;
                const newRequest = request.clone({ url: requestUrl });
                return next.handle(newRequest);
            } else if (request.url.includes('pages') && request.url.includes('slug')) {
                const requestUrl = `${environment.origin}${environment.wpEndpoint}${request.url}`;
                const newRequest = request.clone({ url: requestUrl });
                return next.handle(newRequest);
            } else if (!request.url.includes('token')) {
                const requestUrl = `${environment.origin}${environment.wcEndpoint}${request.url}${this.appendWooAuthHeaders(request.url)}`;
                const newRequest = request.clone({ url: requestUrl });
                return next.handle(newRequest);
            }
        } else {
            return next.handle(request);
        }
    }
}
