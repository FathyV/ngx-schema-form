import {
	describe,
	it,
	expect,
	inject,
	beforeEach,
	beforeEachProviders,
} from '@angular/core/testing';

import {
	TestComponentBuilder,
} from '@angular/compiler/testing';


import {IntegerField} from "./integer";

describe("IntegerField",()=>{
	let tcb: TestComponentBuilder;
	let THE_VALUE=1337;
	beforeEachProviders(() => [TestComponentBuilder]);

	beforeEach(inject([TestComponentBuilder], _tcb => {
		tcb = _tcb;
	}));

	it("should initialize value from input", done => {
		tcb.createAsync(IntegerField).then( (fixture) => {
			fixture.detectChanges();
			let fieldComponent = fixture.componentInstance;

			fieldComponent.value=THE_VALUE;
			fixture.detectChanges();

			let element = fixture.debugElement.nativeElement.querySelector("input");
			expect(element.value).toBe(THE_VALUE.toString());
			done();
		}).catch(exception => done.fail(exception));

	});

});
