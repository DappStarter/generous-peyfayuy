require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remind arrow just credit furnace tube'; 
let testAccounts = [
"0x652f902b655d1b55dfec4d45c8ef93cab03c493782c5477a67b01ee6be87c709",
"0x73c07e4544209fdbd9c21112224c4aad3b324ba537ef5242171897eabda54f01",
"0x57dac3f666b4ee645d2a61b7b929fe6073075d939369a909a4aca4261b3ddd7f",
"0xec1c99675e1431d14b5116867b9b416ebd0885fcbe8dcdfe99179c381722963a",
"0x49623be714c68b53b070f7fcf382e1eac4792569809c1fa82b3719ee0a4077c9",
"0xc5899c0cfe5f9bf7dd7ffeefe730a4aae055051c8d96855e94d4d9c34d2f74d5",
"0xa57edd915c7bec3153376836f25be83db4cd84661bedd490e2fb4e065252f471",
"0x1c01c97e9e771946a35def82106ee26cb59aa371b2193cb899d90de8892017a0",
"0x56b5ca448969f4f5a02a63a500e0b8d2a9b9f62a34716ee9e71f4e0f5359827b",
"0xeba4bdac839ed01c4454a726ae7c96791b4de2d8103e6169c0530a27a771c98e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
