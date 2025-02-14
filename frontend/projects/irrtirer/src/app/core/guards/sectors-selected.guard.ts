import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectSectors } from '../state/mosaic-project/mosaic-project.selectors';
import { TOOL_PATH } from '../constants/paths';

export const sectorsSelectedGuard: CanActivateFn = () => {
    const store = inject(Store);

    const sectors = store.selectSignal(selectSectors)();
    if (sectors.length) {
        return true;
    } else {
        inject(Router).navigate([TOOL_PATH]);
        return false;
    }
};
