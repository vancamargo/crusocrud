import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {CursoPage} from "../pages/curso/curso";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {CursoService} from "../pages/curso/curso.service";
import {HttpModule, Http} from "@angular/http";
import {CursoFormPage} from "../pages/curso-form/curso-form";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CursoPage,
    CursoFormPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CursoPage,
    CursoFormPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    CursoService,
    HttpModule,
    CursoFormPage,






    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
