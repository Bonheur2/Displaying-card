// device-list.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent {
  constructor(private router: Router) { }

  onCardClick(deviceId: string) {
    this.router.navigate(['/device', deviceId]);
  }
}
