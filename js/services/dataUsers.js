app.factory('dataUsers', function ($location) {
    return {
        checkUser: function (user) {
            for (key in users) {
                if (users[key].log == user.log && users[key].pass == user.pass) {
                    $location.url("/home");
                    localStorage.setItem('name', users[key].name);
                    localStorage.setItem('log', users[key].log);
              
                }
            }
        }
        , exitUser: function () {
            $location.url("/logIn");
            localStorage.clear();
        }
        , regShow: function () {
            $location.url("/reg");
        }
        , regUser: function (user) {
            users.push(user);
            $location.url("/logIn");
        },
        addPost:function(a,b,c){
        
            posts.unshift({
                text:a,
                name:b,
                log:c  
            });
        }
    }
});