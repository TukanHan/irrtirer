import { Component, input, InputSignal } from '@angular/core';
import { TileModel } from '../../../../core/models/mosaic-project.model';

@Component({
    selector: 'app-tile-list-elem',
    imports: [],
    templateUrl: './tile-list-elem.component.html',
    styleUrl: './tile-list-elem.component.scss',
})
export class TileListElemComponent {
    public tileSignal: InputSignal<TileModel> = input.required({ alias: 'tile'});
}
