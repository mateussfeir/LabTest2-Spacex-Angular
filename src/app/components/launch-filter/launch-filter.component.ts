import { TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LaunchFilterValues, LaunchStatusFilter } from '../../models/launch.model';

@Component({
  selector: 'app-launch-filter',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, TitleCasePipe],
  templateUrl: './launch-filter.component.html',
  styleUrl: './launch-filter.component.css'
})
export class LaunchFilterComponent implements OnInit {
  @Output() filtersChanged = new EventEmitter<LaunchFilterValues>();

  private readonly formBuilder = inject(FormBuilder);

  readonly statusOptions: LaunchStatusFilter[] = ['all', 'successful', 'failed', 'upcoming'];

  readonly filterForm = this.formBuilder.nonNullable.group({
    searchText: [''],
    status: ['all' as LaunchStatusFilter]
  });

  ngOnInit(): void {
    this.emitFilters();
    this.filterForm.valueChanges.subscribe(() => this.emitFilters());
  }

  private emitFilters(): void {
    this.filtersChanged.emit(this.filterForm.getRawValue());
  }
}
