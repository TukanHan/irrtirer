import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { getPolygonTriangulationMeshApiAddres } from '../constants/api';
import { SectorTriangulationMeshModel, SectorTriangulationRequestModel } from '../models/api.models';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) {}

    getPolygonTriangulationMesh(sectorTriangulationData: SectorTriangulationRequestModel): Observable<SectorTriangulationMeshModel> {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }),
        };

        return this.http
            .post<SectorTriangulationMeshModel>(getPolygonTriangulationMeshApiAddres(), sectorTriangulationData, options)
            .pipe(tap((response: SectorTriangulationMeshModel) => SectorTriangulationMeshModel.restore(response)));
    }
}
