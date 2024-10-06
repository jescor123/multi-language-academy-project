import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-recording-list',
  templateUrl: './recording-list.component.html',
  styleUrls: ['./recording-list.component.css']
})
export class RecordingListComponent implements OnInit {

  fileInfos?: Observable<any>;

  constructor(private uploadFileService: UploadFileService) {}

  ngOnInit(): void {
    this.fileInfos = this.uploadFileService.getFiles();    
  }
 
}
