import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import { AuthenticationResponse } from 'src/app/models/authentication-response';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccessGuardService implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const storedUser = localStorage.getItem('user');
      if (storedUser) {
          const authResponse: AuthenticationResponse = JSON.parse(storedUser);
          const token = authResponse.token;
          if (token) {
              const jwtHelper = new JwtHelperService();
              const isTokenNonExpired = !jwtHelper.isTokenExpired(token);
              if (isTokenNonExpired) {
                  return true;
              }
          }
      }
      this.router.navigate(['login']);
      return false;
  }
}
