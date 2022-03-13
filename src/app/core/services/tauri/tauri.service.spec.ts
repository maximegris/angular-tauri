import { TestBed } from '@angular/core/testing';

import { TauriService } from './tauri.service';

describe('TauriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TauriService = TestBed.get(TauriService);
    expect(service).toBeTruthy();
  });
});
