import { Component } from '@angular/core';
import {AlertController, IonicPage, ToastController} from 'ionic-angular';
import {CursoService} from "./curso.service";
import {CursoFormPage} from "../curso-form/curso-form";
import {NavController} from "ionic-angular";


/**
 * Generated class for the CursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-curso',
  templateUrl: 'curso.html',
})
export class CursoPage {

  curso = [];



  constructor(public navCrtl: NavController, public cursoService: CursoService, public alertCrl: AlertController, public toasteCrtl: ToastController) {
  }

  ionViewDidLoad() {
    this.cursoService.list().subscribe(dados=>{
      this.curso=dados;
    })

  }
    showMessage(msg) {
      this.toasteCrtl.create({
        message: msg,
        duration:4000
      }).present();
    }

  goToForm(){
    this.navCrtl.push(CursoFormPage)



  }
  list(){
    this.cursoService.list().subscribe(dados =>{
      this.curso=dados;
    })

  }

   deleteCurso(curso, $event){
    $event.preventDefault();
    $event.stopImmediatePropagation();
    $event.stopPropagation();

     let alert = this.alertCrl.create({
    title: 'Deletar',
    message: 'Tem certeza que deseja deletar',
    buttons: [
      {
        text: 'Cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Ok',
        handler: () => {
          console.log('delete clicked');
          this.cursoService.delete(curso).subscribe(dados =>{
          this.showMessage("Deletado com sucesso")
          this.list()
          })
        }
      }
    ]
  });
  alert.present();
}





}
