import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({ selector: 'lib-employee-details-page', templateUrl: './employee-details.page.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class EmployeeDetailsPage {
    name: string;
    constructor (private _activatedRoute: ActivatedRoute){}

    ngOnInit(): void {
        this.name = this._activatedRoute.snapshot.params['name'];
    }
}
