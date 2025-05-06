// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

uint256 constant TOTAL_TICKETS = 20;
uint256 constant TOTAL_OSCILLOSCOPES = 20;
uint256 constant TOTAL_FUNCTIONS = 20;
uint256 constant TOTAL_ANTENNAS = 20;
address constant adminAddress = 0x359c359D84679d2a12437B78359D68a1B4DE0e65;
address constant test = 0xE6DC684c4f53e59caF5ca0f341978D9DBc5A48Eb;

contract Tickets {
    address public owner = msg.sender;

    struct Ticket {
        uint256 price;
        address owner;
    }
    struct Oscilloscope {
        uint256 price;
        address owner;
    }
    struct Function {
        uint256 price;
        address owner;
    }
    struct Antenna {
        uint256 price;
        address owner;
    }

    Ticket[TOTAL_TICKETS] public tickets;
    Oscilloscope[TOTAL_OSCILLOSCOPES] public oscilloscopes;
    Function[TOTAL_FUNCTIONS] public functions;
    Antenna[TOTAL_ANTENNAS] public antennas;

    constructor() {
        for (
            uint256 i = 0;
            i < TOTAL_TICKETS &&
                i < TOTAL_OSCILLOSCOPES &&
                i < TOTAL_FUNCTIONS &&
                i < TOTAL_ANTENNAS;
            i++
        ) {
            tickets[i].price = 1e17; // 0.1 ETH
            tickets[i].owner = address(0x0);
            oscilloscopes[i].price = 1e17; // 0.1 ETH
            oscilloscopes[i].owner = address(0x0);
            functions[i].price = 1e17; // 0.1 ETH
            functions[i].owner = address(0x0);
            antennas[i].price = 1e17; // 0.1 ETH
            antennas[i].owner = address(0x0);
        }
    }

    function buyTicket(uint256 _index) external payable {
        require(_index < TOTAL_TICKETS && _index >= 0);
        require(tickets[_index].owner == address(0x0));
        require(msg.value >= tickets[_index].price);
        tickets[_index].owner = msg.sender;
    }

    function buyOscilloscope(uint256 _index) external payable {
        require(_index < TOTAL_OSCILLOSCOPES && _index >= 0);
        require(oscilloscopes[_index].owner == address(0x0));
        require(msg.value >= oscilloscopes[_index].price);
        oscilloscopes[_index].owner = msg.sender;
    }

    function buyfunctiongenerator(uint256 _index) external payable {
        require(_index < TOTAL_FUNCTIONS && _index >= 0);
        require(functions[_index].owner == address(0x0));
        require(msg.value >= functions[_index].price);
        functions[_index].owner = msg.sender;
    }

    function buyantenna(uint256 _index) external payable {
        require(_index < TOTAL_ANTENNAS && _index >= 0);
        require(antennas[_index].owner == address(0x0));
        require(msg.value >= antennas[_index].price);
        antennas[_index].owner = msg.sender;
    }
}
