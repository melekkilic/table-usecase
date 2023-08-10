import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CarService } from 'src/app/services/car.service';
import { Car } from '../car-list/car-list.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  dialogData:any;
  constructor(public dialogRef: MatDialogRef<CarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car,
    private snackBar: MatSnackBar,
    private carService: CarService
    ){ 
      // Copy the dialog's data to a separate object for editing
      this.dialogData = {...data};
    }

  ngOnInit() {

  }

  // Check if the form's data has been modified for save buton disabled control
  isFormDirty() {
    return JSON.stringify(this.dialogData) !== JSON.stringify(this.data);
  }  

 // Cancel the dialog without saving changes
  cancel(){
    this.dialogRef.close(false);
  }

  // Check if the Horse Power value is invalid
  isHPInvalid() {
    return this.data.hp < 100 || this.data.hp > 550;
  }

  // Save changes or show appropriate notifications
  save() {
    if (this.isHPInvalid()) {
      this.snackBar.open('Horse Power must be between 100 and 550.', 'Close', {
        duration: 3000,
        verticalPosition: 'top'
      });
    } else {
      if (this.isFormDirty()) {
        this.carService.updateCar(this.data.id, this.data).subscribe(() => {
          this.snackBar.open('Car updated successfully.', 'Close', {
            duration: 3000,
            verticalPosition: 'top'
          });
          this.dialogRef.close(true);
        });
      } else {
        this.snackBar.open('No changes to save.', 'Close', {
          duration: 3000,
          verticalPosition: 'top'
        });
      }
    }
  }
}

  