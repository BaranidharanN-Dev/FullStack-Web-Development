
// const btnEl = addEventListener("click", function(){
//     runcode()
// }) 


const terminal = { msg: [


    "[+] Initializing secure terminal session...",
    "[+] Establishing encrypted communication channel...",
    "[+] Loading kernel modules...",
    "[+] Verifying system integrity...",
    "[+] Enumerating active network interfaces...",
    "[+] Scanning available network nodes...",
    "[+] Resolving target endpoint...",
    "[+] Establishing authenticated session...",
    "[+] Negotiating encryption parameters...",
    "[+] Loading cryptographic subsystem...",
    "[+] Validating access credentials...",
    "[+] Authentication handshake initiated...",
    "[+] Session token generated...",
    "[+] Privilege verification in progress...",
    "[+] Checking access control policies...",
    "[+] Enumerating available resources...",
    "[+] Mapping remote services...",
    "[+] Analyzing service fingerprints...",
    "[+] Inspecting open communication ports...",
    "[+] Processing response packets...",
    "[+] Correlating network telemetry...",
    "[+] Anomaly detected in traffic pattern...",
    "[+] Bypassing restricted interface...",
    "[+] Access layer modified...",
    "[+] Elevated session established...",
    "[+] Loading encrypted payload...",
    "[+] Decrypting data stream...",
    "[+] Integrity checksum verified...",
    "[+] Secure channel stabilized...",
    "[+] Synchronizing remote filesystem...",
    "[+] Indexing accessible directories...",
    "[+] Processing system metadata...",
    "[+] Extracting encrypted archives...",
    "[+] Decompression sequence initiated...",
    "[+] Memory allocation confirmed...",
    "[+] Injecting runtime module...",
    "[+] Runtime module initialized...",
    "[+] Executing authorized operations...",
    "[+] Operation completed successfully.",
    "[+] Clearing temporary session data...",
    "[+] Terminating remote connection...",
    "[+] Session closed.",
    "[+] Secure terminal standing by..."
],

i: 0, 

loops() {

   let message = this.msg[i]

    this.i++

    if ( this.i === this.msg.length) {
        
       this.i = 0
    }

    return message

    
},


runcode() {

   const output =  setInterval( () => { console.log(this.loops())

    },3000)

    return output

}




}

