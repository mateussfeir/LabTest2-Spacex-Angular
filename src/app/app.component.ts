import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { LaunchFilterComponent } from './components/launch-filter/launch-filter.component';
import { LaunchListComponent } from './components/launch-list/launch-list.component';
import { Launch, LaunchFilterValues, LaunchStatusFilter } from './models/launch.model';
import { SpacexService } from './services/spacex.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LaunchFilterComponent, LaunchListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private readonly spacexService = inject(SpacexService);

  readonly launches = signal<Launch[]>([]);
  readonly loading = signal(true);
  readonly errorMessage = signal('');
  readonly searchText = signal('');
  readonly statusFilter = signal<LaunchStatusFilter>('all');

  readonly filteredLaunches = computed(() => {
    const searchValue = this.searchText().trim().toLowerCase();
    const statusValue = this.statusFilter();

    return this.launches().filter((launch) => {
      const matchesSearch = launch.name.toLowerCase().includes(searchValue);

      if (!matchesSearch) {
        return false;
      }

      switch (statusValue) {
        case 'successful':
          return launch.success === true && !launch.upcoming;
        case 'failed':
          return launch.success === false && !launch.upcoming;
        case 'upcoming':
          return launch.upcoming === true;
        default:
          return true;
      }
    });
  });

  ngOnInit(): void {
    this.loadLaunches();
  }

  onFiltersChanged(filters: LaunchFilterValues): void {
    this.searchText.set(filters.searchText);
    this.statusFilter.set(filters.status);
  }

  private loadLaunches(): void {
    this.loading.set(true);
    this.errorMessage.set('');

    this.spacexService.getLaunches().subscribe({
      next: (launches) => {
        this.launches.set(launches);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set('Unable to load SpaceX launches right now.');
        this.loading.set(false);
      }
    });
  }
}
