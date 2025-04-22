import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { getPolygonTriangulationMeshApiAddress } from '../constants/api';
import { SectorTriangulationMeshModel, SectorTriangulationRequestModel } from '../models/api/api.models';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private readonly http = inject(HttpClient);

    public getPolygonTriangulationMesh(sectorTriangulationData: SectorTriangulationRequestModel): Observable<SectorTriangulationMeshModel> {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }),
        };

        return this.http
            .post<SectorTriangulationMeshModel>(getPolygonTriangulationMeshApiAddress(), sectorTriangulationData, options)
            .pipe(tap((response: SectorTriangulationMeshModel) => SectorTriangulationMeshModel.restore(response)));
    }
}
