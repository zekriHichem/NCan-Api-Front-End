import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Case} from './Case.model';
@Injectable({
  providedIn: 'root'
})
export class NumericService {
  url = 'http://127.0.0.1:8081/';
  constructor(private http: HttpClient) { }
  getPrediction(cas: Case): Observable<any> {
    console.log(cas.symmetryeMean);
    return this.http.post(this.url,
      {radius_mean: cas.radiusMean,
        texture_mean: cas.textureMean,
        perimeter_mean: cas.perimeterMean,
        area_mean: cas.areaMean,
        smoothness_mean: cas.smoothnessMean,
        compactness_mean: cas.compactnessMean,
        concavity_mean: cas.concavityMean,
        concave_points_mean: cas.concavepointsMean,
        symmetry_mean: cas.symmetryeMean,
        fractal_dimension_mean: cas.fractaldimensionMean
      });
  }
}
