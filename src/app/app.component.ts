import {Component, inject} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG } from '../environments/environment';
import { TauriService } from './core/services';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet]
})
export class AppComponent {
  private readonly tauriService = inject(TauriService);
  private readonly translate = inject(TranslateService);

  constructor() {
    this.translate.setFallbackLang('en');
    console.log('APP_CONFIG', APP_CONFIG);

    if (this.tauriService.isTauri) {
      console.log('Run in Tauri');
      this.tauriService.callHelloWorld();
    } else {
      console.log('Run in browser');
    }
  }
}
