import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPFSHTTPClient } from 'ipfs-http-client/dist/src/types';
import { IPFS } from 'src/environments/environment';
import { BlockchainService } from 'src/services/blockchain.service';
import { IpfsService } from 'src/services/ipfs.service';
import { Buffer } from "buffer";

import {Web3} from 'web3';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  web3: any;
  abi: any = {};
  netWorkData: any = {};
  netId: any;
  address: any;
  contract: any;
  account: any;

  ipfs: IPFSHTTPClient;

  msg_text: string = '';

  result: any;

  Doctors: any;

  DoctorDetails: string[] = [];

  drInfoload: boolean = false;

  constructor(
    private bs: BlockchainService,
    ipfsService: IpfsService,
    private http: HttpClient
  ) {

    this.contract = bs.getContract().then((c: any) => {
      return c
    })
    this.ipfs = ipfsService.getIPFS();
  }

  getDrs(): Promise<any> {
    return new Promise((resolve) => {
      this.bs.getContract().then((contract: any) => {
        this.Doctors = contract.methods.getAllDrs()
          .call()
          .then((docs: any) => {
            this.Doctors = docs;
            console.log(this.Doctors);
            resolve(this.Doctors)
          });
      })

    })
  }

  getDoctorDetails(docID: any): Promise<any> {
    console.log(docID);

    return new Promise((resolve) => {
      this.bs.getContract().then((contract: any) => {
        contract.methods
          .getDr(docID)
          .call()
          .then((ipfsHash: string) => {
            console.log(ipfsHash);
            this.http.get(IPFS.localIPFSGet + ipfsHash)
              .subscribe((data: any) => {
                console.log(data);
                resolve(data);
              });
          });
      })
    })
  }

  async addDoctor(docId: string, data: any): Promise<any> {
// Initialize a Web3 instance with Ganache's HTTP provider
const web3 = new Web3('http://127.0.0.1:7545')
console.log(web3)
    const privateKey = '0x78283381422002bc7dad0e4b9d12dd7d6014dd1ed6614f30d0958002ffe6ec0b'
    return new Promise(async (resolve, reject) => {
      try {
          // Convert the private key to a Buffer
          const privateKeyBuffer = Buffer.from(privateKey, 'hex');

          // Get the account address from the private key
          const accountAddress = web3.eth.accounts.privateKeyToAccount(privateKey).address;

          // Import the account into Metamask
          await window.ethereum.request({
            method: 'eth_requestAccounts',
        });

          resolve(`Account with address ${accountAddress} imported into Metamask successfully.`);
      } catch (error) {
          reject(error);
      }
    });
  }
  async addRecord(data: any) {
    let IPFSHash = await (await (this.ipfs.add(Buffer.from(JSON.stringify(data))))).path
    return IPFSHash
  }
}
