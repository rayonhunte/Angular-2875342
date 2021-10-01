import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebStorageService {

  constructor(private http: HttpClient) { }

  get(key: string): string | null {
    return window.localStorage.getItem(key);
  }
  set(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  getRemote() {
    //this.http.get()
  }
  setRemote() {
    //this.http.post()
  }
}
