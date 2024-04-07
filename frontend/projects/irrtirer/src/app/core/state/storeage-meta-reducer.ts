import { Action, ActionReducer } from '@ngrx/store';

const stateLocalStorageKey = 'state';

function setSavedState(state: any, localStorageKey: string) {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
}

function getSavedState(localStorageKey: string): any {
    const storageValue = localStorage.getItem(localStorageKey);
    if (storageValue) {
        return JSON.parse(storageValue);
    }

    return null;
}

export function storageMetaReducer<S, A extends Action = Action>(
    reducer: ActionReducer<S, A>
): any {
    let onInit = true;
    return function (state: S, action: A): S {
        const nextState = reducer(state, action);

        if (onInit) {
            onInit = false;
            const savedState = getSavedState(stateLocalStorageKey);
            return { ...nextState, ...savedState };
        }

        setSavedState(nextState, stateLocalStorageKey);

        return nextState;
    };
}
