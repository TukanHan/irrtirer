import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { mosaicProjectReducer } from './core/state/mosaic-project/mosaic-project.reducer';
import { storageMetaReducer } from './core/state/storeage-meta-reducer';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideAnimationsAsync(),
        provideHttpClient(),
        provideStore(
            {
                mosaicProject: mosaicProjectReducer,
            },
            {
                metaReducers: [storageMetaReducer],
            }
        ),
    ],
};
