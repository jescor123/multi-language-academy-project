import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { SpeakingMeetingService } from 'src/app/services/speaking-meeting.service';

@Component({
  selector: 'app-speaking-meeting-list',
  templateUrl: './speaking-meeting-list.component.html',
  styleUrls: ['./speaking-meeting-list.component.css']
})
export class SpeakingMeetingListComponent implements OnInit {

    speakingMeetingList?: Observable<any>;
    data: any[] = [];
    
    videoUrl = "https://www.youtube.com/embed/icCQkBxydGU?autoplay=1&mute=1";
  
    constructor(private speakingMeetingService: SpeakingMeetingService, private sanitizer: DomSanitizer) {

    }
  
    ngOnInit(): void {
      this.speakingMeetingService.getSpeakingMeetingList().subscribe(response =>
        {
          this.data = response;          
        }
      );
    }

    urlSanitizer(url: any): any {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);      
    }

}
