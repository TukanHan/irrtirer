import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app.routes';
import { mosaicProjectReducer } from './core/state/mosaic-project/mosaic-project.reducer';
import { storageMetaReducer } from './core/state/storage-meta-reducer';
import { userPreferencesReducer } from './core/state/user-preferences/user-preferences.reducer';

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
            useValue: { appearance: 'outline' },
        },
    ],
};
