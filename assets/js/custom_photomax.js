$(document).ready(function(){
  $("#photomax").photomax({

    instagramAccessToken:"3271373411.0efbe26.d68ef59c17894edb977d4701e045082c",
    facebookAccessToken:"",
    googleApiKey:"",
    instagram_user_photos:[
      {
        name:"Instagram Photos",
        url:"https://instagram.com/godreamaction",
        selected:true
      },
    ],

    loadButtonSize:"small",
    photoProtocol:"https:",
    hideHeader:true,
    hideNavigation:true,
    hidePhotoDetails:false,

  });

});
