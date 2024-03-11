import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { CalificacionesComponent } from './pages/calificaciones/calificaciones.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import {AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment.development';
import { MenuComponent } from './pages/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    ClientesComponent,
    CalificacionesComponent,
    AboutusComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    provideFirebaseApp(() => initializeApp({"projectId":"evaluacion-c1ca7","appId":"1:242654700296:web:536490d1322c4b4ffd82bd","databaseURL":"https://evaluacion-c1ca7-default-rtdb.firebaseio.com","storageBucket":"evaluacion-c1ca7.appspot.com","apiKey":"AIzaSyB-5a2BD3Bn4ix_-tWw1rJyZtd39cudxuc","authDomain":"evaluacion-c1ca7.firebaseapp.com","messagingSenderId":"242654700296"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
