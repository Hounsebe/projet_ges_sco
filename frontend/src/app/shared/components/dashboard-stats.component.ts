import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export interface StatItem {
  label: string;
  value: string | number;
  icon: string;
  trend?: string;
  trendUp?: boolean;
}

@Component({
  selector: 'app-dashboard-stats',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      @for (stat of stats(); track stat.label) {
        <div class="relative group">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-zinc-200 to-zinc-100 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
          <div class="relative p-6 bg-white border border-zinc-200/60 rounded-3xl shadow-sm hover:shadow-premium transition-all">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900 shadow-inner-light">
                <mat-icon class="scale-110">{{ stat.icon }}</mat-icon>
              </div>
              @if (stat.trend) {
                <div [class]="'px-2.5 py-1 rounded-full text-[11px] font-bold ' + (stat.trendUp ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-red-600')">
                  {{ stat.trend }}
                </div>
              }
            </div>
            <div>
              <p class="text-[11px] font-extrabold text-zinc-400 uppercase tracking-widest mb-1">{{ stat.label }}</p>
              <h3 class="text-3xl font-black text-zinc-900 tracking-tight">{{ stat.value }}</h3>
            </div>
          </div>
        </div>
      }
    </div>
  `
})
export class DashboardStatsComponent {
  stats = input.required<StatItem[]>();
}
