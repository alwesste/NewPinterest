import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { cardResolver } from './card.resolver';

describe('cardResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => cardResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
