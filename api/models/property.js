"use strict";

var property = function (data) {
    this.data = data;
};

property.prototype.data = {};

property.prototype.checkType = function (type) {
    if ("type" in this.data && this.data.type === type) {
        return true;
    } else {
        return false;
    }
};

property.prototype.checkWorkflow = function (workflow) {
    if ("workflow" in this.data && this.data.workflow === workflow) {
        return true;
    } else {
        return false;
    }
};

property.prototype.getContactAddress = function () {
    var currentAddress = "";
    if (this.data.hasOwnProperty("address") && this.data.address != null) {
        var addressFieldArray = [
            "buildingNumber",
            "street",
            "suburb",
            "postcode"
        ];
        var address = this.data.address; 
        addressFieldArray.filter (function (addressField) {
            if (address.hasOwnProperty(addressField)) {
                if (currentAddress.length > 0) {
                    currentAddress = currentAddress.concat(" ");
                }
                currentAddress = currentAddress.concat(address[addressField]);     
            }
        });
    }

    return currentAddress;
};

property.prototype.getResult = function (type, workflow) {
    var result = null; 
    var contactAddress = this.getContactAddress();
    if (this.checkType(type) && this.checkWorkflow(workflow) 
        && contactAddress !== "") { //match type,workflow and contactAddress not empty
        result =  {
            contactAddress: contactAddress,
            type: this.data.type,
            workflow: this.data.workflow        
        };
    }

    return result;
};

module.exports = property;