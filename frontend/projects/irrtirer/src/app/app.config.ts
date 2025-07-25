import { ApplicationConfig, importProvidersFrom, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { mosaicProjectReducer } from './core/state/mosaic-project/mosaic-project.reducer';
import { storageMetaReducer } from './core/state/storage-meta-reducer';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { userPreferencesReducer } from './core/state/user-preferences/user-preferences.reducer';

function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideRouter(routes),
        provideAnimationsAsync(),
        provideHttpClient(),
        provideStore(
            {
                mosaicProject: mosaicProjectReducer,
                userPreferences: userPreferencesReducer
            },
            {
                metaReducers: [storageMetaReducer],
            }
        ),
        importProvidersFrom([
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: httpLoaderFactory,
                    deps: [HttpClient],
                },
            }),
        ]),
    ],
};
