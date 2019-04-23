import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UnitOfMeasureService } from './unit-of-measure/unitofmeasure.service';
import { ConverterService } from './converter/converter.service';
import { Converter } from './converter/converter';
import { FormControl } from '@angular/forms';
var AppComponent = /** @class */ (function () {
    function AppComponent(unitOfMeasureService, converterService) {
        this.unitOfMeasureService = unitOfMeasureService;
        this.converterService = converterService;
        this.title = 'converter-app';
        this.temperatureResultToShow = false;
        this.massResultToShow = false;
        this.lengthResultToShow = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.tempValue = new FormControl('');
        this.tempFromUnit = new FormControl('');
        this.tempToUnit = new FormControl('');
        this.getTemperatureUnits();
        this.getMassUnits();
        this.getLengthUnits();
    };
    AppComponent.prototype.getTemperatureUnits = function () {
        var _this = this;
        this.unitOfMeasureService.getTemperatureUnits()
            .subscribe(function (units) { return _this.temperatureUnits = units; });
    };
    AppComponent.prototype.getMassUnits = function () {
        var _this = this;
        this.unitOfMeasureService.getMassUnits()
            .subscribe(function (units) { return _this.massUnits = units; });
    };
    AppComponent.prototype.getLengthUnits = function () {
        var _this = this;
        this.unitOfMeasureService.getLengthUnits()
            .subscribe(function (units) { return _this.lengthUnits = units; });
    };
    AppComponent.prototype.convertTemperature = function () {
        var _this = this;
        this.tempConverter = new Converter();
        this.tempConverter.value = this.tempValue.value;
        this.tempConverter.fromUnit = this.tempFromUnit.value;
        this.tempConverter.toUnit = this.tempToUnit.value;
        this.converterService.convertTemperature(this.tempConverter)
            .subscribe(function (resource) {
            _this.temperatureResultToShow = true;
            _this.result = resource.result;
        });
    };
    AppComponent.prototype.convertMass = function () {
        // this.heroService.updateHero(this.hero)
        //   .subscribe(() => this.goBack());
    };
    AppComponent.prototype.convertLength = function () {
        // this.heroService.updateHero(this.hero)
        //   .subscribe(() => this.goBack());
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.less']
        }),
        tslib_1.__metadata("design:paramtypes", [UnitOfMeasureService,
            ConverterService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map