import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import Web3 from 'web3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  web3: any;

  constructor(public navCtrl: NavController) {
    if (typeof this.web3 !== 'undefined') {
      this.web3 = new Web3(this.web3.currentProvider);
      console.log('current provider', this.web3.currentProvider);
    } else {
      this.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/215YEWoGbuFJip9tBo6M"));
      console.log('web3 version:', this.web3.version);
    }
  }

}
