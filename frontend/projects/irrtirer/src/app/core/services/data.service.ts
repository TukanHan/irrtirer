import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vector } from '../models/point.model';
import { getPolygonTriangulationMeshApiAddres } from '../constants/api';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) {}

    getPolygonTriangulationMesh(
        polygonVertices: Vector[],
        sectionMaxArea: number,
        sectionMinAngle: number
    ): Observable<Vector[][]> {
        const options = {
            params: new HttpParams()
                .set('sectionMaxArea', sectionMaxArea)
                .set('sectionMinAngle', sectionMinAngle),
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }),
        };

        return this.http.post<Vector[][]>(getPolygonTriangulationMeshApiAddres(), polygonVertices, options);
    }
}
