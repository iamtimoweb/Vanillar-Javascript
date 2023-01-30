var PragimTech = PragimTech || {};

PragimTech.TeamB = PragimTech.TeamB || {};

PragimTech.TeamB.customer = function (firstname, middlename, lastname) {
    this.firstname = firstname;
    this.middlename = middlename;
    this.lastname = lastname;

    this.getFullName = function () {
        return this.firstname + " " + this.middlename + " " + this.lastname;
    };

    return this;
};
