import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { MatTableModule } from '@angular/material/table'; 
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatRadioModule } from '@angular/material/radio'; 
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarListComponent } from './pages/car-list/car-list.component';
import { CarComponent } from './pages/car/car.component';










@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    


    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
