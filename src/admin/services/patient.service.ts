import { Injectable } from '@angular/core';
import { BlockchainService } from 'src/services/blockchain.service';
import { IpfsService } from 'src/services/ipfs.service';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  web3: any;
  contract: any;
  account: any;

  ipfs: any;

  addprogress:boolean = false;
  added:boolean = false
  failed:boolean = false

  constructor(
    private blockchainService: BlockchainService,
    private ipfsService: IpfsService
  ) {
    this.web3 = blockchainService.getWeb3();

    this.contract = blockchainService.getContract();
    
    this.getAcccount();

    this.ipfs = ipfsService.getIPFS();
  }

  addPatient(pat_id: any, data: any) {
    console.log("adding Patient");
    this.contract = this.blockchainService.getContract()
    this.addprogress = true
    this.added = true
  }

  getAcccount() {
    console.log('geting Account...');
    let getacc = setInterval(() => {
      this.account = this.blockchainService.getAccount();
      if (this.account != null) {
        clearInterval(getacc);
        return this.account;
      }
    }, 1000);
  }
}
