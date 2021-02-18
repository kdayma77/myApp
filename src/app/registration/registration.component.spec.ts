import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
class RouterStub {
  navigate(url: string) { return url; }
}

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [InputTextModule,
        FormsModule,
        DropdownModule,
        CalendarModule,
        ReactiveFormsModule,
        TableModule,
        ButtonModule],
        providers: [
          { provide: Router, useClass: RouterStub }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('#onSubmit', () => {
    it('onSubmit to have been called', () => {
      component.firstName = "krishna";
      component.lastName = "dayma";
      component.dateValue = new Date();
      component.dateValue.setYear("2000");
      component.genderValue = "m";
      component.email = "kdayma77@gmail.com";
      component.password = "Krishna@1";
      component.confirmPassword = "Krishna@1"
      component.onSubmit();
      expect(localStorage.getItem('firstname')).toEqual("krishna");
    });
    it('validateForm to validate firstname', () => {
      component.firstName = "123";
      component.lastName = "dayma";
      component.dateValue = new Date();
      component.dateValue.setYear("2000");
      component.genderValue = "m";
      component.email = "kdayma77@gmail.com";
      component.password = "Krishna@1";
      component.confirmPassword = "Krishna@1"
      component.validateForm();
      expect(component.showError).toEqual(true);
    })
    it('validateForm to validate lastName', () => {
      component.firstName = "krishna";
      component.lastName = "123";
      component.dateValue = new Date();
      component.dateValue.setYear("2000");
      component.genderValue = "m";
      component.email = "kdayma77@gmail.com";
      component.password = "Krishna@1";
      component.confirmPassword = "Krishna@1"
      component.validateForm();
      expect(component.showErrorForLastname).toEqual(true);
    })
    it('validateForm to validate date return error', () => {
      component.firstName = "krishna";
      component.lastName = "dayma";
      component.dateValue = new Date();
      component.dateValue.setYear("2021");
      component.genderValue = "m";
      component.email = "kdayma77@gmail.com";
      component.password = "Krishna@1";
      component.confirmPassword = "Krishna@1"
      component.validateForm();
      expect(component.showErrorForDate).toEqual(true);
    })
    it('validateForm to validate date return success', () => {
      component.firstName = "krishna";
      component.lastName = "dayma";
      component.dateValue = new Date();
      component.dateValue.setYear("2000");
      component.genderValue = "m";
      component.email = "kdayma77@gmail.com";
      component.password = "Krishna@1";
      component.confirmPassword = "Krishna@1"
      component.validateForm();
      expect(component.showErrorForDate).toEqual(false);
    })
    it('validateForm to validate email', () => {
      component.firstName = "krishna";
      component.lastName = "dayma";
      component.dateValue = new Date();
      component.dateValue.setYear("2000");
      component.genderValue = "m";
      component.email = "kdayma";
      component.password = "Krishna@1";
      component.confirmPassword = "Krishna@1"
      component.validateForm();
      expect(component.showErrorForEmail).toEqual(true);
    })
    it('validateForm to validate email', () => {
      component.firstName = "krishna";
      component.lastName = "dayma";
      component.dateValue = new Date();
      component.dateValue.setYear("2000");
      component.genderValue = "m";
      component.email = "kdayma77@gmail.com";
      component.password = "Krishna@1";
      component.confirmPassword = "Krishna@1"
      component.validateForm();
      expect(component.showErrorForEmail).toEqual(false);
    })
    it('validateForm to validate password', () => {
      component.firstName = "krishna";
      component.lastName = "dayma";
      component.dateValue = new Date();
      component.dateValue.setYear("2000");
      component.genderValue = "m";
      component.email = "kdayma77@gmail.com";
      component.password = "Krishna";
      component.confirmPassword = "Krishna"
      component.validateForm();
      expect(component.showErrorForPassword).toEqual(true);
    })
  })
});
