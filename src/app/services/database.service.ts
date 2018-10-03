import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  userList$: AngularFireList<any>;

  constructor(private database: AngularFireDatabase) {
    this.userList$ = this.database.list('/usersWhoProvides');
  }

  addData(key, object) {
    this.database.list(`usersWhoProvides/${key}/`).push(object);
  }
}
