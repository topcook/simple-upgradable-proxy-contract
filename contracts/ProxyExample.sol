// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract ProxyExample is Initializable {
    uint256 private width;
    uint256 private height;

    function initialize(uint256 _width) public initializer {
        width = _width;
    }

    function getWidth() public view returns(uint256) {
        return width;
    }

    function setWidth(uint256 _width) public {
        width = _width;
    }

    function getHeight() public view returns(uint256) {
        return height;
    }

    function setHeight(uint256 _height) public {
        height = _height;
    }
}