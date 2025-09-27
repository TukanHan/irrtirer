import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BackendAddress } from '../../core/constants/api';
import { Observable, Subject } from 'rxjs';
import {
    InitMosaicGenerationRequestModel,
    SectionGenerationResult,
    SectorTriangulationMeshPartsModel,
    TileRequestModel,
} from '../../core/models/api/api.models';

@Injectable({ providedIn: 'root' })
export class MosaicSignalRService {
    private readonly hubConnection: signalR.HubConnection;

    private readonly sectionsMeshReceivedSub = new Subject<SectorTriangulationMeshPartsModel[]>();

    public readonly sectionsMeshReceived$: Observable<SectorTriangulationMeshPartsModel[]> = this.sectionsMeshReceivedSub.asObservable();

    private readonly sectionGeneratedSub = new Subject<SectionGenerationResult>();

    public readonly sectionGenerated$: Observable<SectionGenerationResult> = this.sectionGeneratedSub.asObservable();

    private readonly generationFinishedSub = new Subject<void>();

    public readonly generationFinished$: Observable<void> = this.generationFinishedSub.asObservable();

    private readonly generationAbortedWithErrorSub = new Subject<void>();

    public readonly generationAbortedWithError$: Observable<void> = this.generationAbortedWithErrorSub.asObservable();

    private isClosed: boolean = false;

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
        this.subscribeOnAbortGenerationInErrorCase();
    }

    private subscribeOnSectionGenerated(): void {
        this.hubConnection.on('ReceiveMosaicSectionTiles', (sectorTiles: SectionGenerationResult) => this.sectionGeneratedSub.next(sectorTiles));
    }

    private subscribeOnFinishGeneration(): void {
        this.hubConnection.on('ReceiveFinishNotification', () => this.generationFinishedSub.next());
    }

    private subscribeOnAbortGenerationInErrorCase(): void {
        this.hubConnection.on('AbortGenerationInErrorCase', () => this.generationAbortedWithErrorSub.next());
    }

    private subscribeOnSectionsMeshReceived(): void {
        this.hubConnection.on('ReceiveMosaicSectorsMesh', (sectionsMesh: SectorTriangulationMeshPartsModel[]) => {
            sectionsMesh.forEach((sectionMesh) => SectorTriangulationMeshPartsModel.restore(sectionMesh));
            this.sectionsMeshReceivedSub.next(sectionsMesh);
        });
    }

    public startLongRunningTask(tiles: TileRequestModel[]): Promise<void> {
        return this.hubConnection.invoke('StartMosaicGeneration', tiles)
            .catch((error) => {
                if(!this.isClosed) {
                    throw error;
                }
            });
    }

    public initMosaicTriangulation(initMosaicGenerationRequest: InitMosaicGenerationRequestModel): Promise<void> {
        return this.hubConnection.invoke('InitMosaicTriangulation', initMosaicGenerationRequest)
            .catch((error) => {
                if(!this.isClosed) {
                    throw error;
                }
            });
    }

    public startConnection(): Promise<void> {
        return this.hubConnection.start();
    }

    public stopConnection(): Promise<void> {
        this.isClosed = true;
        return this.hubConnection.stop();
    }
}
