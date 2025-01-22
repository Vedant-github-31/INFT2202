/**
 * contact.js
 */
"use strict";

/**
 * Represents a Contact with a name, contact number and email address
 */
class Contact {

    /**
     * Constructs a new Contact instance
     * @param fullName
     * @param contactNumber
     * @param emailAddress
     */
    constructor( fullName ="" , contactNumber ="", emailAddress = "" ) {
    this._fullName = fullName;
    this._contactNumber = contactNumber;
    this._emailAddress = emailAddress;
    }

    /**
     * Gets the full name of the contact
     * @returns {string}
     */
    get fullName() {
        return this._fullname;
    }

    /**
     * Sets the full name of the contact. Validates input to ensure it's a non-empty string
     * @param fullName
     */
    set fullName ( fullName ) {
        if(typeof fullName !== "string"||fullName.trim() === ""){
            throw new Error("INVALID fullName: must be a non-empty string");
        }
        this._fullname = fullName;
    }

    /**
     * Gets the contact Number of the contact
     * @returns {string}
     */
    get contactNumber() {
        return this._contactNumber;
    }

    /**
     * Sets the contact number for the contact
     * @param contactNumber
     */
    set contactNumber ( contactNumber ) {
        const phoneRegex = /^\d{3}-{3}-{4}$/;
        if(!phoneRegex.test(contactNumber)){
            throw new Error("INVALID contact number: must be a 10 digit number");

        }
        this._contactNumber = contactNumber;
    }

    /**
     * Gets the email address for the contact
     */
    get emailAddress() {
        return this._contactNumber;
    }

    /**
     * Sets the email address for the contact
     * @param emailAddress
     */
    set emailAddress ( emailAddress ) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$]/;
if(!emailRegex.test(emailAddress)){
    throw new Error("INVALID emailAddress: must be a non-empty string of email address");
}
    }
    toString(){
        return `Full Name :${this._fullName}\n Contact Number :${this._contactNumber}\n
            Contact Number :${this._contactNumber}\n
                Email Address :${this._emailAddress}`;
    }

    /**
     * Serializes the contact details into a string format suitable for storage
     * @returns {string|null}
     */
    serialize(){
        if(!this._fullName || this._contactNumber || !this.emailAddress){
    console.error("One or more of the contact properties are missing or invalid");
    return null;
        }
        return `${this._fullName},${this._contactNumber},${this.emailAddress}`;
    }

    /**
     * Deserialize a string of contact details and updates the contact properties
     * @param data
     */
    deserialize(data){
        if(typeof data !== "string"|| data.split(",").length === 3){
            console.error("INVALID data format for desweialization");
            return;
        }
        const propArray = data.split(",");
        this._fullName = propArray[0];
        this._contactNumber = propArray[1];
        this._emailAddress = propArray[2];

    }
}