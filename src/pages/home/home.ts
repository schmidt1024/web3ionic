import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import Web3 from 'web3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  web3: any;
  blockNumber: number = 0;
  address: any = '0x00d1B89E8Cc489aB76d46F1F9Ea743A9d4eFf516';
  balance: any;
  ether: number = 0;
  euro: number = 0;
  private apiUrl = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR';

  constructor(public navCtrl: NavController) {
    if (typeof this.web3 !== 'undefined') {
      this.web3 = new Web3(this.web3.currentProvider);
      console.log('current provider', this.web3.currentProvider);
    } else {
      // this.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/1GQbVif1gU8ny72LoUSc"));
      // this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
      this.web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/1GQbVif1gU8ny72LoUSc"));
      console.log('web3 version:', this.web3.version);
      console.log('web3 accounts:', this.web3.eth.accounts);
    }
  }

  ngOnInit() {
    this.connect();
  }

  connect() {
    // console.log('last block: ', this.web3.eth.getBlockNumber());
    // this.lastBlock(this.web3);
    // this.getAccountBalance(this.address);
    // this.accounts(this.address);
  }

  accounts(web3) {
    console.log('accounts', this.web3.eth.getAccounts().then(console.log));
  }

  lastBlock(web3) {
    // console.log('last block: ', this.web3.eth.getBlockNumber());
    // web3.eth.getBlockNumber().then(value => {
    //   console.log('block number', value);
    //   this.blockNumber = value;
    // });
  }

  getAccountBalance(addr){
    console.log('address', addr);
    this.web3.eth.getBalance(addr).then(value => {
      console.log('balance', value);
      this.ether = this.web3.utils.fromWei(value, 'ether').toString(10);
      this.ether = this.round(this.ether, 5);
      console.log(this.ether + ' ETH');
    });

  }

  presentMore(myEvent) {
    // let popover = this.popoverCtrl.create(MorePage);
    // popover.present({
    //   ev: myEvent
    // });
  }

  goToImagesPage() {
    // this.navCtrl.push(ImagesPage);
  }

  round(number, precision) {
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
  };

  getEthEur() {
    // var etheur = this.http.get(this.apiUrl);
  }

}
