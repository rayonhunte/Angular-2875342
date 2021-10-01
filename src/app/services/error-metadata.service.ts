import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorMetadataService implements ErrorHandler {

  handleError(error: any): void {
    console.log({
      timestamp: new Date().toISOString(),
      message: error.message,
      zone: error.zone,
    });
  }
}
