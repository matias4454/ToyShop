import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  

  private subject = new Subject<any>();
  
  sendMessage(id: number)
  {
    this.subject.next(id)
  }
  
  onMessage(): Observable<any>
  {
    return this.subject.asObservable();
  }


  
}
