import { TestBed, async, inject } from '@angular/core/testing';

import { OnyLoggedInUsersGuard } from './auth.guard';

describe('OnyLoggedInUsersGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnyLoggedInUsersGuard]
    });
  });

  it('should ...', inject([OnyLoggedInUsersGuard], (guard: OnyLoggedInUsersGuard) => {
    expect(guard).toBeTruthy();
  }));
});
