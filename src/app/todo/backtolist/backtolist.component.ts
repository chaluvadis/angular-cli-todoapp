import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-backtolist',
  templateUrl: './backtolist.component.html'
})
export class BacktolistComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }
  backToList() {
    this.router.navigate(['/list']);
  }
}
