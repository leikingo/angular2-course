//only add toPromise as an optimization and not 'rxjs/Rx' which would load all operations
import 'rxjs/add/operator/toPromise';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
