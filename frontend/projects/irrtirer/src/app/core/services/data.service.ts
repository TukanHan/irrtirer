import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Vector } from '../models/point.model';
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
            .post<{ x: number; y: number }[][]>(getPolygonTriangulationMeshApiAddres(), sectorTriangulationData, options)
            .pipe(
                map((response: { x: number; y: number }[][]) =>
                    response.map((triangle) => triangle.map((vertex) => new Vector(vertex.x, vertex.y)))
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
            .post<{ parts: { triangles: { x: number; y: number }[][] }[] }[]>(
                getMosaicTriangulationMeshApiAddres(),
                sectorTriangulationModels,
                options
            )
            .pipe(
                map((response: { parts: { triangles: { x: number; y: number }[][] }[] }[]) =>
                    response.map((sectorTriangulation) => ({
                        parts: sectorTriangulation.parts.map((mesh) => ({
                            triangles: mesh.triangles.map((triangle) =>
                                triangle.map((vertex) => new Vector(vertex.x, vertex.y))
                            ),
                        })),
                    }))
                )
            );
    }
}
