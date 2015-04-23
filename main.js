
// Creates an object with all of the types of users that can visit our site.
// This makes it easier to add or remove types of visitors without having
// to change them in multiple places.

var typesOfUsers = {
    oldMember      : document.getElementById('js-logicPathOldMember'),
    newMember      : document.getElementById('js-logicPathNewMember'),
    employerMember : document.getElementById('js-logicPathEmployer'),
    otherMember    : document.getElementById('js-logicPathOther')
};

// This function targets the element that was clicked by the user and inserts
// the relevant information into the DOM for that specific user.

function triggerLogicPath() {

    // Old Member path
    typesOfUsers.oldMember.onclick = function() {
        console.log(this);
    };

    // New Member path
    typesOfUsers.newMember.onclick = function() {
        console.log(this);
    };

    // Employer path
    typesOfUsers.employerMember.onclick = function() {
        console.log(this);
    };

    // Other path
    typesOfUsers.otherMember.onclick = function() {
        console.log(this);
    };
}

triggerLogicPath();

//console.log( Object.keys(typesOfUsers) );


