import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  

  private subject = new ReplaySubject<any>(1);
  
  sendMessage(id: number)
  {
    this.subject.next(id)
  }
  
  onMessage(): Observable<any>
  {
    return this.subject.asObservable();
  }


  
}
