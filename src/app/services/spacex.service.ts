import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Launch } from '../models/launch.model';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://api.spacexdata.com/v5/launches';

  getLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.apiUrl).pipe(
      map((launches) =>
        [...launches].sort(
          (a, b) => new Date(b.date_utc).getTime() - new Date(a.date_utc).getTime()
        )
      )
    );
  }
}
