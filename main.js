
// Creates an array full of objects, or users, that can visit our site.
// This makes it easier to add or remove types of visitors without having
// to change them in multiple places.

var userTypes = [{
        user     : 'Current Member',
        id       : 'js-logic-path-current-member',
        content  : 'You are awesome as a current member!',
        form     : '<a href="https://google.com">Link to a form for current members</a>'
    },
    {
        user     : 'Future Member',
        id       : 'js-logic-path-future-member',
        content  : 'You are awesome for thinking about being a member!',
        form     : '<a href="https://google.com">Link to a form for new members</a>'
    },
    {
        user     : 'Employer',
        id       : 'js-logic-path-employer',
        content  : 'You should hire all of us cause we are awesome!',
        form     : '<a href="https://google.com">Link to a form for employers</a>'
    },
    {
        user     : 'Other',
        id       : 'js-logic-path-other',
        content  : 'You are awesome...',
        form     : '<a href="https://google.com">Link to a form for other peeps</a>'
    }
];


// This is the main js function that listens for onclick events. when an
// onclick event happens, it runs contentChanger()

function triggerView(){

    // The contentChanger() function has some funky stuff going on. 'this'
    // in this context is (userTypes[i]) because we bind it in the onclick
    // function below. (See comment above the for loop).

    // The first part of the contentChanger() function has access to the
    // key value pairs of the objects in the userTypes array, and can
    // insert them into the DOM.

    function contentChanger(){
        document.getElementById('js-user').innerHTML    = this.user;
        document.getElementById('js-content').innerHTML = this.content;
        document.getElementById('js-form').innerHTML    = this.form;
    }

    // Here we are looping through our array of objects, userTypes. When
    // any of these elements are clicked, we bind that object to the
    // contentChanger() function. This way it can access its key value
    // pairs when we want to insert the HTML into the DOM.

    for (var i = 0; i < userTypes.length; i++) {
        document.getElementById(userTypes[i].id).onclick = contentChanger.bind(userTypes[i]);
    }
}

// start listening for that sheezy

triggerView();
