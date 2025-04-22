import { Action, ActionReducer } from '@ngrx/store';
import { MosaicProjectModel, TilesSet } from '../models/mosaic-project.model';
import { Vector } from '../models/math/vector.model';

const stateLocalStorageKey = 'state';

function setSavedState<T>(state: T, localStorageKey: string): void {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
}

function getSavedState(localStorageKey: string): object | null {
    const storageValue = localStorage.getItem(localStorageKey);
    if (storageValue) {
        return JSON.parse(storageValue);
    }

    return null;
}

export function storageMetaReducer<S, A extends Action = Action>(reducer: ActionReducer<S, A>) {
    let onInit = true;
    return function (state: S, action: A): S {
        const nextState: S = reducer(state, action);

        if (onInit) {
            onInit = false;

            const savedState = getSavedState(stateLocalStorageKey);
            restoreStateModelObjects(savedState as { mosaicProject: MosaicProjectModel});
            
            return { ...nextState, ...savedState };
        }

        setSavedState(nextState, stateLocalStorageKey);

        return nextState;
    };
}

function restoreStateModelObjects(state: { mosaicProject: MosaicProjectModel}): void {
    if(state?.mosaicProject) {
        state.mosaicProject.tilesSets.forEach((tilesSet: TilesSet) => {
            tilesSet.tiles.forEach((tile) => {
                tile.vertices.forEach((vector) => Vector.restore(vector));
            });
        });
    }
}