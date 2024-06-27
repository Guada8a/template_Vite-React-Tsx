import { storageNameToken } from '../constants/localstorage.constans';
import { existLocalStorage, getLocalStorage, removeLocalStorage, saveLocalStorage } from '../utils/localStorage';

export const saveToken = (): void => {
    const token = getTokenFromURL();
    if (token.length > 0) {
        if (isDifferentToken(token)) {
            saveLocalStorage(storageNameToken, token);
        }
    }
}

const isDifferentToken = (newToken: string): boolean => {
    return newToken !== getToken() && newToken.length > 0;
}

export const getTokenFromURL = (): string => {
    const token = window.location.search.replace('?', '').split('&').find(item => item.includes('token'))?.split('=')[1];
    return token === undefined ? '' : token;
}

export const invalidToken = (): void => {
    window.location.reload();
    removeLocalStorage(storageNameToken);
}

export const decodeToken = (token: string): string => {
    return decode(token);
}

export const dataUser = (): object => {
    const token = getToken();
    if (token == null) {
        return {};
    }
    return JSON.parse(decodeToken(token));
}

const decode = (token: string): string => {
    return decodeURIComponent(atob(token.split('.')[1].replace('-', '+').replace('_', '/'))
        .split('')
        .map(c => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join(''));
}

export const getToken = (): string | null => {
    return getLocalStorage(storageNameToken);
}

export const isActiveToken = (): boolean => {
    return existLocalStorage(storageNameToken);
}
