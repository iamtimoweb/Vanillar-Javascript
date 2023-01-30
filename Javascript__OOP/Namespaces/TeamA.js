// creating a namespace for the function
var PragimTech = PragimTech || {};

PragimTech.TeamA = PragimTech.TeamA || {};

PragimTech.TeamA.customer = function (firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

    this.getFullName = function () {
        return this.firstname + " " + this.lastname;
    };

    return this;
};
