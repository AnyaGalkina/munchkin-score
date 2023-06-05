// import { InitialStateCartType } from '../../features/cartPage/cart-reducer';

export const saveState = (state: any): void => {
    try {
        localStorage.setItem('characters', JSON.stringify(state));
        // eslint-disable-next-line no-empty
    } catch (e) {
        // Ignore write errors.
    }
};

export const loadState = (): any | undefined => {
    try {
        const serializedState = localStorage.getItem('characters');

        if (serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};
