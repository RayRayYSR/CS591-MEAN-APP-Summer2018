import { Injectable } from '@angular/core';
import {CONTACT} from '../models/contactModel';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactsEndpoint = 'http://localhost:3000/ps4';
  getContacts(): Observable<CONTACT> {
    //console.log('called service')
    return this.httpClient.get<CONTACT>(this.contactsEndpoint);
  }

  constructor(private httpClient: HttpClient) { }
} 
