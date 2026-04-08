import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Launch } from '../../models/launch.model';

@Component({
  selector: 'app-launch-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './launch-list.component.html',
  styleUrl: './launch-list.component.css'
})
export class LaunchListComponent {
  @Input() launches: Launch[] = [];

  getLaunchStatus(launch: Launch): 'upcoming' | 'successful' | 'failed' {
    if (launch.upcoming) {
      return 'upcoming';
    }

    return launch.success ? 'successful' : 'failed';
  }
}
