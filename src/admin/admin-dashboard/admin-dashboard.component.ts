import { Component, OnInit, effect } from '@angular/core';
import { Router } from '@angular/router';
import { BlockchainService } from 'src/services/blockchain.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.sass'],
})
export class AdminDashboardComponent implements OnInit {

  isCollapse: boolean = true;

  isAdmin: boolean = false;

  checkProgress: boolean = true;
  progressWarn: boolean = false
  progressMsg: string = 'Checking Admin....';

  constructor(
    private router: Router,
    private bs: BlockchainService
  ) {
    effect(() => {
      this.onCheckAdmin()

    })
  }

  ngOnInit(): void {
    this.onCheckAdmin()
    this.router.navigate(['admin/admin-dashboard']);
  }

  onCheckAdmin() {
    this.isAdmin = true
  }
}
