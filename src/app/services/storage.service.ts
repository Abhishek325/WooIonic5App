import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(private storage: Storage) { }

    get(key: string) {
        return this.storage.get(key);
    }

    set(key: string, value: any) {
        return this.storage.set(key, value);
    }

    remove(key: string) {
        return this.storage.remove(key);
    }

    clear() {
        return this.storage.clear();
    }
}
