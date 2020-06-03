$(document).ready(function(){
    var url = "https://www.googleapis.com/youtube/v3/video" + 
    "?key=AIzaSyCJ4xZXPrq_FfmCfS9zAhlw3jBoecB1ZS4" +
    "&part=snippet" +
    "&type=video" +
    "?q=howfun" +
    "&maxResults=20";
    var data;
    var viewBox = document.querySelectorAll(".view-box");

    $.ajax({
        url: url,
        type: 'GET',
        data: {
            data: [],
        },
        datatype: 'JSON',
        success: function(res) {
            data = res.items;
            console.log(data);
            setBox();
        },
        error: function() {
            console.log(err);
        }

    });

    function setBox() {
        for(var i=0; i<viewBox.length; i++){
            viewBox[i].querySelector("img").src = data[i].snippet.thumbnails.high.url;
            viewBox[i].querySelector("h3").textContent = data[i].snippet.title;
            viewBox[i].querySelector("p.author").textContent = data[i].snippet.channelTitle;
            viewBox[i].querySelector("p.description").textContent = data[i].snippet.description
        }
        
    }


})