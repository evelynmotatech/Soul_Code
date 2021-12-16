import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UploadImageService {
  constructor(private storage: AngularFireStorage) {}

  uploadImage(
    file: File,
    onUpload: (imageURL: string) => void,
  ) {
    const time = Date.now().toString();
    const filename = `${time}${file.name}`;
    const fileRef = this.storage.ref(filename);
    const task = this.storage.upload(filename, file);
    task
      .snapshotChanges()
      .pipe(finalize(() => fileRef.getDownloadURL().subscribe(onUpload)))
      .subscribe();
  }
}
