import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  userList$: AngularFireList<any>;

  constructor(private database: AngularFireDatabase) {
    this.userList$ = this.database.list('/users');
  }

  addData(path, object) {
    this.database.list(path).push(object);
  }
}
