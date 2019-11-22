import { TestBed } from '@angular/core/testing';

import { AssignforceEntityClientFactoryService } from './assignforce-entity-client-factory.service';

describe('AssignforceEntityClientFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssignforceEntityClientFactoryService = TestBed.get(AssignforceEntityClientFactoryService);
    expect(service).toBeTruthy();
  });
});
