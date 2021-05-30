import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Organization} from "../../shared/models/organization.model";


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs: AngularFirestore) { }


  get(collectionName: string): Observable<Organization[]> {
    return this.afs.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.orderBy('title', 'asc');
      return query;
    }).valueChanges() as Observable<Organization[]>;
  }


  async add(collectionName: string, data: Organization): Promise<string> {
    const uid = this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  update(collectionName: string, id: string, data: Organization): Promise<void> {
    return this.afs.collection(collectionName).doc(id).update(data).then(
      result => { console.log(result); }, err => { console.log(err); }).finally(() => { console.log('finally'); });
  }

  delete(collectionName: string, id: string): Promise<void> {
    return this.afs.collection(collectionName).doc(id).delete();
  }

}
