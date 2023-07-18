import { TestBed } from '@angular/core/testing';

import { JsonFileReaderService } from './json-file-reader.service';

describe('JsonFileReaderService', () => {
  let service: JsonFileReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonFileReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
