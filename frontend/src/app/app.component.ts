import { Component } from '@angular/core';
import { UrlTableComponent } from './url-table/url-table.component';
import { UrlFormComponent } from './url-form/url-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UrlTableComponent,
    UrlFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngShortUrl';
}
