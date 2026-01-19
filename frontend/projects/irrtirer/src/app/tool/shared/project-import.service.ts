import { inject, Injectable } from '@angular/core';
import JSZip from 'jszip';
import { Store } from '@ngrx/store';
import { selectMosaicProject } from '../../core/state/mosaic-project/mosaic-project.selectors';
import { saveAs } from '../../core/helpers/download-helper';
import { ImageHelper } from '../../core/helpers/image-helper';
import { environment } from '../../../environment/environment';
import { MosaicProjectModel } from '../../core/models/mosaic-project.model';

const PROJECT_FORMAT: string = 'irr';

@Injectable()
export class ProjectImportService {
    private readonly store = inject(Store);

    private readonly project = this.store.selectSignal(selectMosaicProject);

    public saveProject(fileName: string): void {
        const { config: { base64Image, ...configRest }, ...rest } = this.project();
        const project = {
            config: { ...configRest },
            ...rest,
            version: environment.version
        };

        const zip = new JSZip();

        zip.file('project.json', JSON.stringify(project));

        const imageData = ImageHelper.base64ToUint8Array(base64Image);
        zip.file("image.png", imageData, {binary: true});

        zip.generateAsync({ type: 'blob', compression: 'DEFLATE' }).then((content) => {
            saveAs(content, `${fileName}.${PROJECT_FORMAT}`);
        });
    }

    public loadProject(file: File): Promise<MosaicProjectModel> {
        const zip = new JSZip();
        return file.arrayBuffer().then(buffer => {
            return zip.loadAsync(buffer);
        }).then(loadedZip => {
            return Promise.all([
                loadedZip.file('project.json')?.async('string'),
                loadedZip.file('image.png')?.async('base64')
            ]);
        }).then(([projectJson, imageData]) => {
            if (!projectJson) {
                throw new Error('Brak pliku project.json w archiwum.');
            } else if(!imageData) {
                throw new Error('Wystąpił problem z plikiem image.png');
            }
            
            const project: MosaicProjectModel = JSON.parse(projectJson);
            const base64Image = `data:image/png;base64,${imageData}`;

            return {
                ...project,
                config: {
                    ...project.config,
                    base64Image
                }
            };
        });
    }
}
