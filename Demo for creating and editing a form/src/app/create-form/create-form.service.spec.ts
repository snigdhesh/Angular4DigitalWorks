import { TestBed, inject } from '@angular/core/testing';

import { CreateFormService } from './create-form.service';

describe('CreateFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateFormService]
    });
  });

  it('should be created', inject([CreateFormService], (service: CreateFormService) => {
    expect(service).toBeTruthy();
  }));
});
