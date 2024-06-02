// device-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {
  deviceId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.deviceId = params.get('id');
      // Fetch sensors and actuators for the device using the device ID
      // Example: this.fetchDeviceDetails(this.deviceId);
    });
  }

  // Implement method to fetch device details
  // fetchDeviceDetails(deviceId: string) { ... }
}
