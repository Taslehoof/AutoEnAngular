import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})

export class AutoComponent implements OnInit {
  
  autoForm = new FormGroup ({
    marca: new FormControl(''),
    color: new FormControl(''),
    modelo: new FormControl(''),
    patente: new FormControl('')
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initAutoForm();
  }

  initAutoForm(){
    this.autoForm=this.fb.group({
      marca:'',
      color:'',
      modelo:'', 
      patente:''
    });
  }
  
  cambiarVehiculo(){
    this.autoForm.setValue({
      marca:'Renault',
      color: 'Rojo',
      modelo: 'Clio Mio',
      patente:'AB 358 CD'
    });
  }

  cambiarVehiculo2(){
    this.autoForm.patchValue({
      color: 'Blanca',
      modelo: 'Sandero'
    });
  }

  crearAuto() {}

}