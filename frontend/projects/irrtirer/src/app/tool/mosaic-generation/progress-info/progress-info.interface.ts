export interface ProgressInfoState extends BaseInfoState {
    type: 'progress';
    sector: string;
    percent: number;
}

export interface InitInfoState extends BaseInfoState {
    type: 'init';
    message: string;
}

interface BaseInfoState {
    type: 'progress' | 'init'
}

export type InfoState = ProgressInfoState | InitInfoState;