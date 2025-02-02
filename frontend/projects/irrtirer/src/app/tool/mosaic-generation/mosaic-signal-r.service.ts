import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BackendAddress } from '../../core/constants/api';
import { Observable, Subject } from 'rxjs';
import {
    InitMosaicGenerationRequestModel,
    SectorTriangulationMeshPartsModel,
    TileRequestModel,
    TileTransformResult,
} from '../../core/models/api/api.models';

@Injectable({
    providedIn: 'root',
})
export class MosaicSignalRService {
    private hubConnection: signalR.HubConnection;

    private readonly sectionsMeshReceivedSub: Subject<SectorTriangulationMeshPartsModel[]> = new Subject();

    public readonly sectionsMeshReceived$: Observable<SectorTriangulationMeshPartsModel[]> = this.sectionsMeshReceivedSub.asObservable();

    private readonly sectionGeneratedSub: Subject<TileTransformResult[]> = new Subject();

    public readonly sectionGenerated$: Observable<TileTransformResult[]> = this.sectionGeneratedSub.asObservable();

    private readonly generationFinishedSub: Subject<void> = new Subject();

    public readonly generationFinished$: Observable<void> = this.generationFinishedSub.asObservable();

    constructor() {
        this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl(`${BackendAddress}/process-hub`, {
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets,
            })
            .build();

        this.subscribeOnSectionGenerated();
        this.subscribeOnFinishGeneration();
        this.subscribeOnSectionsMeshReceived();
    }

    private subscribeOnSectionGenerated(): void {
        this.hubConnection.on('ReceiveMosaicSectionTiles', (sectorTiles: TileTransformResult[]) => this.sectionGeneratedSub.next(sectorTiles));
    }

    private subscribeOnFinishGeneration(): void {
        this.hubConnection.on('ReceiveFinishNotification', () => this.generationFinishedSub.next());
    }

    private subscribeOnSectionsMeshReceived(): void {
        this.hubConnection.on('ReceiveMosaicSectorsMesh', (sectionsMesh: SectorTriangulationMeshPartsModel[]) => {
            sectionsMesh.forEach((sectionMesh) => SectorTriangulationMeshPartsModel.restore(sectionMesh));
            this.sectionsMeshReceivedSub.next(sectionsMesh);
        });
    }

    public startLongRunningTask(tiles: TileRequestModel[]): Promise<void> {
        return this.hubConnection.invoke('StartMosaicGeneration', tiles);
    }

    public initMosaicTriangulation(initMosaicGenerationRequest: InitMosaicGenerationRequestModel): Promise<void> {
        return this.hubConnection.invoke('InitMosaicTriangulation', initMosaicGenerationRequest);
    }

    public startConnection(): Promise<void> {
        return this.hubConnection.start();
    }

    public stopConnection(): Promise<void> {
        return this.hubConnection.stop();
    }
}
