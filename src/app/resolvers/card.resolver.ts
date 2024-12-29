import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';
import { CatService } from '../services/cat.service';
import { Cat } from '../services/cat.interface';
import {Observable} from 'rxjs';
import {inject} from "@angular/core";

export const cardResolver: ResolveFn<Cat[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot ) : Observable<Cat[]> => {
    const catService = inject(CatService);
    return catService.getCats();
}
