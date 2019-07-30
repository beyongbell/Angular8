import { TestBed } from '@angular/core/testing';

import { EmployeesHttpService } from './employees-http.service';

describe('EmployeesHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeesHttpService = TestBed.get(EmployeesHttpService);
    expect(service).toBeTruthy();
  });
});
