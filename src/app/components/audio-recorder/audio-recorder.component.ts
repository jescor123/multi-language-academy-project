import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AudioRecordingService } from 'src/app/services/audio-recording.service';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-audio-recorder',
  templateUrl: './audio-recorder.component.html',
  styleUrls: ['./audio-recorder.component.css']
})
export class AudioRecorderComponent implements OnInit {  

  isRecording = false;
  audioURL: string | null = null;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  constructor(private audioRecordingService: AudioRecordingService, private cd: ChangeDetectorRef,
    private uploadFileService: UploadFileService) {}

  ngOnInit(): void {
    this.audioRecordingService.audioBlob$.subscribe(blob => {
      this.audioURL = window.URL.createObjectURL(blob);
      this.audioPlayer.nativeElement.src = this.audioURL;
      this.cd.detectChanges();      
    });
  }

  startRecording() {
    this.isRecording = true;
    this.audioRecordingService.startRecording();
  }

  stopRecording() {
    this.isRecording = false;
    this.audioRecordingService.stopRecording();    
  }

}
