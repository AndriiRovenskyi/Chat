app.controller('homeCtrl',['dataUsers',function(dataUsers){
    
    var vm = this;
    vm.posts=posts;
    vm.message="Home message"
    vm.writePost=function(){
        dataUsers.addPost(vm.text,localStorage.getItem('name'),localStorage.getItem('log'));
        console.log(posts);
    }
    
}])