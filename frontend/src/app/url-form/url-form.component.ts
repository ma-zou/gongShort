import { Component, Input } from '@angular/core';
import { UiButtonComponent } from '../ui-button/ui-button.component';
import { formatURL } from '../../utils/url';

@Component({
  selector: 'app-url-form',
  standalone: true,
  imports: [UiButtonComponent],
  templateUrl: './url-form.component.html',
  styleUrl: './url-form.component.css'
})
export class UrlFormComponent {
  @Input() url: string = '';
  @Input() generatedShortUrl: string = '';

  error: boolean = false;
  errorMessage: string = '';

  updateURL(event: Event) {
    if(this.url.length === 0) {
      this.error = false;
      this.errorMessage = ''; 
    }

    try {
      this.url = formatURL((event.target as HTMLInputElement).value)

      this.error = false;
      this.errorMessage = '';
    } catch(e: any) {
      this.error = true;
      if(typeof e.toString === 'function') {
        this.errorMessage = e.toString();
      } else {
        this.errorMessage = 'Please enter a valid URL';
      }
    }
  }

  updateShortURL(event: Event) {
    this.generatedShortUrl = (event.target as HTMLInputElement).value
  }
}
