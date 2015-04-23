
// Creates an array full of objects, or users, that can visit our site.
// This makes it easier to add or remove types of visitors without having
// to change them in multiple places.

var userTypes = [{
        user     : 'Current Member',
        id       : 'js-logic-path-current-member',
        content  : 'You are awesome as a current member!',
        form     : '<a href="https://google.com">Google</a>'
    },
    {
        user     : 'Future Member',
        id       : 'js-logic-path-future-member',
        content  : 'You are awesome for thinking about being a member!',
        form     : 'futureMemberForm'
    },
    {
        user     : 'Employer',
        id       : 'js-logic-path-employer',
        content  : 'You should hire all of us cause we are awesome!',
        form     : 'employerForm'
    },
    {
        user     : 'Other',
        id       : 'js-logic-path-other',
        content  : 'You are awesome...',
        form     : 'otherForm'
    }
];

function triggerView(){
    for (var i = 0; i < userTypes.length; i++){
        document.getElementById(userTypes[i].id).onclick = function(){
            document.getElementById('js-user').innerHTML    = userTypes[0].user;
            document.getElementById('js-content').innerHTML = userTypes[0].content;
            document.getElementById('js-form').innerHTML    = userTypes[0].form;
        }
    }
}

triggerView();

//// This function targets the element that was clicked by the user and inserts
//// the relevant information into the DOM for that specific user.
//
//function triggerLogicPath() {
//
//    // Old Member path
//    userTypes.oldMember.onclick = function() {
//        console.log(this);
//    };
//
//    // New Member path
//    userTypes.newMember.onclick = function() {
//        console.log(this);
//    };
//
//    // Employer path
//    userTypes.employerMember.onclick = function() {
//        console.log(this);
//    };
//
//    // Other path
//    userTypes.otherMember.onclick = function() {
//        console.log(this);
//    };
//}
//
//triggerLogicPath();
//
////console.log( Object.keys(typesOfUsers) );


