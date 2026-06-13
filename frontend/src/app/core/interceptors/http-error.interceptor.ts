import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An unknown error occurred!';
        if (error.error instanceof ErrorEvent) {
          // Client-side errors
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Server-side errors
          console.error(`Backend returned code ${error.status}, body was: `, error.error);
          if (error.status === 400) {
            if (error.error && typeof error.error === 'object') {
              // Validation errors (e.g., from Spring @Valid)
              errorMessage = this.formatValidationErrors(error.error);
            } else if (typeof error.error === 'string') {
              // Business errors (e.g., "étudiant déjà inscrit")
              errorMessage = error.error;
            }
          } else if (error.status) {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
        }
        // Log the error
        console.error(errorMessage);
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  private formatValidationErrors(errors: any): string {
    let formattedErrors = 'Validation errors:';
    if (errors.errors) { // Assuming Spring Boot validation error structure
      errors.errors.forEach((err: any) => {
        formattedErrors += `\n- ${err.field}: ${err.defaultMessage}`;
      });
    } else if (typeof errors === 'object') { // Fallback for other object-based errors
        for (const key in errors) {
            if (Object.prototype.hasOwnProperty.call(errors, key)) {
                formattedErrors += `\n- ${key}: ${errors[key]}`;
            }
        }
    }
    return formattedErrors;
  }
}
