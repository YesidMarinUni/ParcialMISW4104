import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Planta } from '../models/plantas.model';

@Injectable({
  providedIn: 'root',
})
export class PlantaService {
  private apiUrl = `${environment.baseUrl}`;

  constructor(private http: HttpClient) {}

  getPlantas(): Observable<Planta[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching data:', error);
        throw error;
      })
    );
  }
}
