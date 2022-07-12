import { Injectable } from '@angular/core';
import { Observable, of, map, filter, flatMap, mergeMap, from, reduce, merge, toArray } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private api: ApiService) { }

  getQualificationType() {
    return (this.api.getAllQualifications().pipe(map((v: any) => v.result)));
  }
  getNameOfTheDegree(qualType:any) {

    return this.api.getAllNameOftheDegree().pipe(
      mergeMap((v: any) => v.result), filter((d: any) => d.parentLookupCode == qualType), toArray()
      );
    //  return (this.api.getAllNameOftheDegree().pipe(map((v: any) => v.result)));
  }
  getSubject(degreeType:any) {
    
    //return (this.api.getAllSubject().pipe(map((v: any) => v.result)));
     return this.api.getAllSubject().pipe(
      mergeMap((v: any) => v.result), filter((d: any) => d.parentLookupCode == degreeType), toArray()
      );
  }
}

