import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestAPICall';

  emojiArray: any = [];

  constructor(private api: ApiService) { }

  getEmojiArray() {
    this.api.getApiCallURL().subscribe(data => {
      for (const d of (data as any)) {
        this.emojiArray.push({
          label: d.label,
          emoji: d.emoji
        });
      }
      console.log(this.emojiArray);
    })
  }

}
