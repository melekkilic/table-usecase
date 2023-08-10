import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CarService } from 'src/app/services/car.service';
import { CarComponent } from '../car/car.component';


export interface Car {
  id: number;
  carid: number;
  instock: boolean;
  hp: number;
  price: number;
  color: string;
}


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit,AfterViewInit {
  // Define displayed columns for the table
  displayedColumns: string[] = ['id','carId', 'inStock', 'hp', 'price','color','actions'];
  // Create a MatTableDataSource to store car data for the table
  carList = new MatTableDataSource<Car>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;


  constructor(public dialog: MatDialog,
    private carService: CarService) { }

  ngOnInit() {
    // Load cars when the component initializes
    this.loadCars();
  }

  ngAfterViewInit() {
    // Connect the paginator to the table
    if (this.paginator) {
      this.carList.paginator = this.paginator;
    }  }

  // Load car data from the service
  loadCars() {
    this.carService.getCars().subscribe(cars => {
      // Map and transform car data with possible missing values
      this.carList.data = cars.map(car => ({
        ...car,
        id: car.id || 0,
        carid: car.carid || 0,
        instock: car.instock !== undefined ? car.instock : false,
        hp: car.hp || 0,
        price: car.price || 0,
        color: car.color || 'Not Available'
      }));
    });
  }

  // Edit a car using a dialog
  editCar(car:Car) {
    console.log(car);
    this.dialog.open(CarComponent, {
      autoFocus: true,
      panelClass: 'custom-dialog',
      data: Object.assign({}, car) 
    })
    .afterClosed()
    .subscribe((itm: any) => {
      if (itm) {
        this.loadCars();
   
      }
    });
  }

 // Delete a car and reload the list
  deleteCar(car: Car) {
    this.carService.deleteCar(car.id).subscribe(cars=> {
      this.loadCars(); 
    });
  }
}