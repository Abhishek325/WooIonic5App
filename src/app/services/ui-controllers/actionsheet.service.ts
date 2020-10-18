import { AlertController, ActionSheetController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ActionsheetService {

    constructor(private actionSheetController: ActionSheetController) { }

    async presentActionSheet(header: string, btns: any[]) {
        this.actionSheetController.create({ header, buttons: btns }).then(res => {
            res.present().then(r => {});
        });
    }

}