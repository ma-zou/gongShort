import { Component } from '@angular/core';
import { ShortenedUrl } from '../shortened-url';
import { NgFor } from '@angular/common';
import { dateFormatter } from '../../utils/date';
import { UiButtonComponent } from '../ui-button/ui-button.component';

@Component({
  selector: 'app-url-table',
  standalone: true,
  imports: [NgFor, UiButtonComponent],
  templateUrl: './url-table.component.html',
  styleUrl: './url-table.component.css'
})
export class UrlTableComponent {
  urls: ShortenedUrl[] = [
    { url: 'example.com', shortUrl: 'mzsd.de/abc123', clicks: 100, createdAt: new Date('2022-01-01'), id:'3b8fbb09-2f9c-4a9f-8c22-9bc6b7e7c36a' },
    { url: 'google.com', shortUrl: 'mzsd.de/def456', clicks: 50, createdAt: new Date('2022-02-15'), id: '6c9d2c85-1b64-4b1e-b8b1-53b0d9b9d6f9' },
    { url: 'amazon.com', shortUrl: 'mzsd.de/ghi789', clicks: 75, createdAt: new Date('2022-03-20'), id: '7c2d7690-5f73-4e76-8b5b-7e5b3c8d5f91' },
    { url: 'facebook.com', shortUrl: 'mzsd.de/jkl012', clicks: 120, createdAt: new Date('2022-04-05'), id: '8e9a2e4c-7f1a-4d1f-8648-a6b04dc7d0a7'},
    { url: 'twitter.com', shortUrl: 'mzsd.de/mno345', clicks: 90, createdAt: new Date('2022-05-10'), id: '9f0b5e3c-2a5e-4f0a-8c6d-1eaf0c8e1f7d'}
  ]

  getFormattedDate(date: Date | string): string {
    return dateFormatter(date).formatToDateTime();
  }
}
