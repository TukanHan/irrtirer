import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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

        return this.http
            .post<{ x: number; y: number }[][]>(getPolygonTriangulationMeshApiAddres(), polygonVertices, options)
            .pipe(
                map((response: { x: number; y: number }[][]) =>
                    response.map((triangle) => triangle.map((vertex) => new Vector(vertex.x, vertex.y)))
                )
            );
    }
}
