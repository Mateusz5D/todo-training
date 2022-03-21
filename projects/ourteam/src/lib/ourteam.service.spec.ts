import { TestBed } from '@angular/core/testing';

import { OurteamService } from './ourteam.service';

describe('OurteamService', () => {
  let service: OurteamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurteamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
