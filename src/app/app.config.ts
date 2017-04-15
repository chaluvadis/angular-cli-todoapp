import { RequestOptions, Http, Headers } from '@angular/http';

export class AppConfig {
    public appUrl: string = 'http://localhost:3000/task';
    private  headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    public options: RequestOptions = new RequestOptions({ headers: this.headers });
}

