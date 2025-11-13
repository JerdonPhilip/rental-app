import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user = { name: 'Jerdon', role: 'admin' };

  get isAdmin() {
    return this.user.role === 'admin';
  }

  adminMenu = [
    { name: 'Manage Properties', icon: '🏠' },
    { name: 'View Tenants', icon: '👥' },
    { name: 'Check Payments', icon: '💰' }
  ];

  userMenu = [
    { name: 'My Rentals', icon: '🏘️' },
    { name: 'Payment History', icon: '💵' }
  ];
}
