import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {CursoService} from "../curso/curso.service";

/**
 * Generated class for the CursoFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-curso-form',
  templateUrl: 'curso-form.html',
})
export class CursoFormPage {

  curso: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public cursoService: CursoService, public toastCrtl: ToastController) {
    this.curso = {};
  }


  ionViewDidEnter() {
    console.log('ionViewDidLoad CursoFormPage');
  }

  showMessage(msg) {
    this.toastCrtl.create({
      message: msg,
      duration: 4000

    }).present();


  }


  salvar() {
    if (this.curso.id) {
      this.cursoService.update(this.curso).subscribe(item => {
        this.navCtrl.pop();
        this.showMessage("Curso atualizado com sucesso")

      }), error => {
        this.showMessage("erro ao atualizar")
      }
    } else {

      this.cursoService.save(this.curso).subscribe(item => {
        this.navCtrl.pop();
        this.showMessage("curso foi salvo com sucesso")
      })
        , error => {
         this.showMessage("erro ao salvar")
      }


    }

  }

}
