# clientSideEncrypterDemo
Michael Seltzer
COMP 116: Security
Tufts University
Mentor: Ming Chow

Demonstration of Encryption within the Browser

##Usage
- Allows for encrypting of a payload (string) and a passphrase 
  - (simulating client side sending the encryption to a server)
- Allows for decryption of an encrypted payload and a matching passphrase
  - (simulating server side receiving an encrpyted payload)
- Illustrates a potential vulnerability that injected javascript could attach to the encryption button and extract the payload before it is encrypted ("Attack the Encryption" button at bottom of page will show unencrpyted payload upon clicking encrypt) 
  - (simulating an attack of the code base)

##Technical Details
- Uses the crpyto-js library (through the angular mdo-angular-cryptography package)

