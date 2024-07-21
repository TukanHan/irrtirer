import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsProjectCreated } from '../state/mosaic-project/mosaic-project.selectors';
import { TOOL_PATH } from '../constants/paths';

export const projectExistGuard: CanActivateFn = () => {
    const store = inject(Store);

    if (store.selectSignal(selectIsProjectCreated)()) {
        return true;
    } else {
        inject(Router).navigate([TOOL_PATH]);
        return false;
    }
};
