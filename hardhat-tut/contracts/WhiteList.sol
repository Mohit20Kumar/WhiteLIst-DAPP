// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract Whitelist {
    // max number of listed address allowed for us this will be 10
    uint8 public maxWhiteListedAddresses;

    // lets create a mapping of whitelisted addresses
    // if an address is whitelisted, we would set it to true, it is false by default for all other addresses.
    mapping(address => bool) public whiteListedAddresses;

    // numAddressesWhitelisted would be used to keep track of how many addresses have been whitelisted
    //very imp dont change the variable name
    uint8 public numAddressesWhitelisted;

    // Setting the Max number of whitelisted addresses
    // User will put the value at the time of deployment
    constructor(uint8 _maxWhiteListedAddresses) {
        maxWhiteListedAddresses = _maxWhiteListedAddresses;
    }

    /**
    addAddressToWhitelist - This function adds the address of the sender to the
    whitelist
    */

    function addAddressToWhileList() public {
        // checking if user has already been whitelisted on not!
        require(
            !whiteListedAddresses[msg.sender],
            "This Sender Has Already Been Whitelisted!!"
        );

        // checking if the limit has been reached or not
        require(
            numAddressesWhitelisted < maxWhiteListedAddresses,
            "More Addresses Cannot Be Added, Limit Reached!!"
        );

        // add the address which call the function to the whitelist mapp
        whiteListedAddresses[msg.sender] = true;

        // increase the number of addresses whitelisted
        numAddressesWhitelisted += 1;
    }
}
