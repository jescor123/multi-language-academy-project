import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { bufferToWave } from './audio-helper';
import { UploadFileService } from './upload-file.service';

@Injectable({
  providedIn: 'root'
})
export class AudioRecordingService {

  private chunks: any[] = [];
  private mediaRecorder: any;
  private audioContext: AudioContext = new AudioContext();
  private audioBlobSubject = new Subject<Blob>();

  constructor(private uploadFileService: UploadFileService) { }  

  audioBlob$ = this.audioBlobSubject.asObservable();

  async startRecording() {
    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    this.mediaRecorder = new MediaRecorder(stream);
    this.mediaRecorder.ondataavailable = (event: any) => this.chunks.push(event.data);
    this.mediaRecorder.start();
  }

  async stopRecording() {
    if (this.mediaRecorder) {
      this.mediaRecorder.onstop = async () => {
        const audioData = await new Blob(this.chunks).arrayBuffer();
        const audioBuffer = await this.audioContext.decodeAudioData(audioData);
        const wavBlob = bufferToWave(audioBuffer, audioBuffer.length);        
        this.audioBlobSubject.next(wavBlob);
        this.chunks = [];
        const response = await this.uploadFileService.uploadBlob(wavBlob, this.getFileName());
        console.log(response);
        alert("Audio File Uploaded Successfully");
      };
      this.mediaRecorder.stop();      
    }
  }

  getFileName() {
    let date = new Date();
    return  "audio-"+date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()+"-"+date.getTime()+".wav";
  }

}
