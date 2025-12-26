import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { mosaicProjectReducer } from './core/state/mosaic-project/mosaic-project.reducer';
import { storageMetaReducer } from './core/state/storage-meta-reducer';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideTranslateService } from '@ngx-translate/core';
import { userPreferencesReducer } from './core/state/user-preferences/user-preferences.reducer';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(),
        provideStore(
            {
                mosaicProject: mosaicProjectReducer,
                userPreferences: userPreferencesReducer,
            },
            {
                metaReducers: [storageMetaReducer],
            },
        ),
        provideTranslateService({
            loader: provideTranslateHttpLoader({
                prefix: '/irrtirer/assets/i18n/',
                suffix: '.json',
            }),
            fallbackLang: 'pl',
            lang: 'pl',
        }),
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: { appearance: 'outline' }
        }
    ],
};
