import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(public toastController: ToastController) {}

    async presentToast(msg: string, duration?: number) {
        const toast = await this.toastController.create({
            message: msg,
            duration: (duration || 3000)
        });
        toast.present();
    }

}