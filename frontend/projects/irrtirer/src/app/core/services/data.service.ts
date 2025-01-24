import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Vector } from '../models/vector.model';
import { getMosaicTriangulationMeshApiAddres, getPolygonTriangulationMeshApiAddres } from '../constants/api';
import { SectorTriangulationMeshPartsModel, SectorTriangulationRequestModel } from '../models/api.models';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) {}

    getPolygonTriangulationMesh(sectorTriangulationData: SectorTriangulationRequestModel): Observable<Vector[][]> {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }),
        };

        return this.http
            .post<Vector[][]>(getPolygonTriangulationMeshApiAddres(), sectorTriangulationData, options)
            .pipe(
                tap((response: Vector[][]) =>
                    response.forEach((triangle) => triangle.forEach((vertex) => Vector.restore(vertex)))
                )
            );
    }

    getMosaicTriangulationMesh(
        sectorTriangulationModels: SectorTriangulationRequestModel[]
    ): Observable<SectorTriangulationMeshPartsModel[]> {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }),
        };

        return this.http
            .post<{ parts: { triangles: Vector[][] }[] }[]>(
                getMosaicTriangulationMeshApiAddres(),
                sectorTriangulationModels,
                options
            )
            .pipe(
                tap((response: { parts: { triangles: Vector[][] }[] }[]) =>
                    response.forEach((sectorTriangulation) => ({
                        parts: sectorTriangulation.parts.forEach((mesh) => ({
                            triangles: mesh.triangles.forEach((triangle) =>
                                triangle.forEach((vertex) => Vector.restore(vertex))
                            ),
                        })),
                    }))
                )
            );
    }
}
