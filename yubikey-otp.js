var yubikeyotp = require('yubikeyotp');
 
// hex-encoded AES key
var aeskey = 'e6cdae77f55ac1db4acd3b7fd8151334';
 
// modhex-encoded OTP key generated by Yubikey programmed with above key
var otp = 'khdnrutkdendbrbghdjcidkhveuhbrcuublkdjfttcrk';
 
// result contents documented below
var result = yubikeyotp.parseOTP(otp, aeskey);
 
console.log(result);