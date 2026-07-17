import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
//import { environment } from './environments/environment';
import { environment } from './environments/environment.development';


// Initialize app
const app = initializeApp(environment.clave);
const analytics = getAnalytics(app);


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
