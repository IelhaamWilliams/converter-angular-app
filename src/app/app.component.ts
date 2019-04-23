import { Component, OnInit } from '@angular/core';
import { UnitOfMeasure } from './unit-of-measure/unitofmeasure';
import { UnitOfMeasureService } from './unit-of-measure/unitofmeasure.service';
import { ConverterService } from './converter/converter.service';
import { Converter } from './converter/converter';
import { FormGroup, FormControl } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'converter-app'

  temperatureUnits: UnitOfMeasure[];
  massUnits: UnitOfMeasure[];
  lengthUnits: UnitOfMeasure[];
  temperatureResultToShow: boolean = false;
  massResultToShow: boolean = false;
  lengthResultToShow: boolean = false;
  tempConverter : Converter;
  massConverter : Converter;
  lengthConverter: Converter;
  tempResult: number;
  massResult: number;
  lengthResult: number;
  tempValue: FormControl;
  tempFromUnit: FormControl;
  tempToUnit: FormControl;

  massValue: FormControl;
  massFromUnit: FormControl;
  massToUnit: FormControl;

  lengthValue: FormControl;
  lengthFromUnit: FormControl;
  lengthToUnit: FormControl;

  constructor(private unitOfMeasureService : UnitOfMeasureService, 
    private converterService: ConverterService) { }

  ngOnInit() {
    this.tempValue = new FormControl('');
    this.tempFromUnit = new FormControl('');
    this.tempToUnit = new FormControl('');

    this.massValue = new FormControl('');
    this.massFromUnit = new FormControl('');
    this.massToUnit = new FormControl('');

    this.lengthValue = new FormControl('');
    this.lengthFromUnit = new FormControl('');
    this.lengthToUnit = new FormControl('');

    this.getTemperatureUnits();
    this.getMassUnits();
    this.getLengthUnits();
  }

  getTemperatureUnits(): void {
    this.unitOfMeasureService.getTemperatureUnits()
    .subscribe(units => this.temperatureUnits = units);
  }

  getMassUnits(): void {
    this.unitOfMeasureService.getMassUnits()
    .subscribe(units => this.massUnits = units);
  }

  getLengthUnits(): void {
    this.unitOfMeasureService.getLengthUnits()
    .subscribe(units => this.lengthUnits = units);
  }

  convertTemperature(): void {
    this.tempConverter = new Converter();
    this.tempConverter.value = this.tempValue.value;
    this.tempConverter.fromUnit = this.tempFromUnit.value;
    this.tempConverter.toUnit = this.tempToUnit.value;
  
    this.converterService.convertTemperature(this.tempConverter)
      .subscribe((resource) => {
        this.temperatureResultToShow = true;
        this.tempResult = resource.result;
      });
  }

  convertMass(): void {
    this.massConverter = new Converter();
    this.massConverter.value = this.massValue.value;
    this.massConverter.fromUnit = this.massFromUnit.value;
    this.massConverter.toUnit = this.massToUnit.value;
  
    this.converterService.convertMass(this.massConverter)
      .subscribe((resource) => {
        this.massResultToShow = true;
        this.massResult = resource.result;
      });
  }

  convertLength(): void {
    this.lengthConverter = new Converter();
    this.lengthConverter.value = this.lengthValue.value;
    this.lengthConverter.fromUnit = this.lengthFromUnit.value;
    this.lengthConverter.toUnit = this.lengthToUnit.value;
  
    this.converterService.convertLength(this.lengthConverter)
      .subscribe((resource) => {
        this.lengthResultToShow = true;
        this.lengthResult = resource.result;
      });
  }
}
