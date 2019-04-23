import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var httpOptions = {
    headers: new HttpHeaders({ 'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200' })
};
var UnitOfMeasureService = /** @class */ (function () {
    function UnitOfMeasureService(http) {
        this.http = http;
        this.unitOfMeasureURL = 'http://localhost:8080/unit';
        this.headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };
        this.requestOptions = {
            headers: new HttpHeaders(this.headerDict)
        };
    }
    UnitOfMeasureService.prototype.getTemperatureUnits = function () {
        return this.http.get(this.unitOfMeasureURL + "/temperature", this.requestOptions);
    };
    UnitOfMeasureService.prototype.getMassUnits = function () {
        return this.http.get(this.unitOfMeasureURL + "/mass", this.requestOptions);
    };
    UnitOfMeasureService.prototype.getLengthUnits = function () {
        return this.http.get(this.unitOfMeasureURL + "/length", this.requestOptions);
    };
    UnitOfMeasureService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UnitOfMeasureService);
    return UnitOfMeasureService;
}());
export { UnitOfMeasureService };
//# sourceMappingURL=unitofmeasure.service.js.map