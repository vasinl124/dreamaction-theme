$(document).ready(function(){
  $("#youmax").youmax({

    apiKey:"AIzaSyCFXnFwZr-73fj7qAv1aGjdvLDzJlck_pY",
    vimeoAccessToken:"",
    clientId:"689406277059-d1624vf6ddgutdkhs1j13j8vq431oq5e.apps.googleusercontent.com",
    channel:"https://www.youtube.com/channel/UCf2-jqaTzBW7Y2IUsF5h14g",
      youtube_channel_uploads:[
        {
          name:"Videos",
          url:"https://www.youtube.com/channel/UCf2-jqaTzBW7Y2IUsF5h14g",
          selected:true
        },
      ],
      displayVideo:"popup",
      hideNavigation:true,
      alwaysUseDropdown:false,
      autoPlayVideo:true,
      autoLoadComments:true,
      playIconType:"white_grey_combo",
      videoProtocol:"https:",
      hideHeader:true,
      hideDefinition:true,
      maxResults:8,
    });

});
