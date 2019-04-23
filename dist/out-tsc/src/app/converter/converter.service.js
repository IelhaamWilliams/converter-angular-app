import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var httpOptions = {
    headers: new HttpHeaders({ 'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200' })
};
var ConverterService = /** @class */ (function () {
    function ConverterService(http) {
        this.http = http;
        this.unitOfMeasureURL = 'http://localhost:8080/converter';
        this.headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };
        this.requestOptions = {
            headers: new HttpHeaders(this.headerDict)
        };
    }
    ConverterService.prototype.convertTemperature = function (resource) {
        return this.http.post(this.unitOfMeasureURL + "/temperature", resource, this.requestOptions);
    };
    ConverterService.prototype.convertMass = function (resource) {
        return this.http.post(this.unitOfMeasureURL + "/mass", resource, this.requestOptions);
    };
    ConverterService.prototype.convertLength = function (resource) {
        return this.http.post(this.unitOfMeasureURL + "/length", resource, this.requestOptions);
    };
    ConverterService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ConverterService);
    return ConverterService;
}());
export { ConverterService };
//# sourceMappingURL=converter.service.js.map