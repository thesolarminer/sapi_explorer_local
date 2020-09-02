import {
    HttpErrorResponse,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import { Observable } from 'rxjs/Observable';
import { Logger } from '../logger/logger';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private logger: Logger) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return next
            .handle(request)
            .retry(1)
            .catch((err: HttpErrorResponse) => {
                const errorMessage = err?.error.map(m => JSON.stringify(m)).join('|');
                this.logger.error(errorMessage);
                throw errorMessage;
            });
    }
}
