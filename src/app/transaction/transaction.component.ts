import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transaction: Transaction[] = [];
  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getAllTransactions().subscribe((res: Transaction[]) => {
      this.transaction = res
      console.log(JSON.stringify(this.transaction));
    })
  }

}
