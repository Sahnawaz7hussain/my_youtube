

 let video = JSON.parse(localStorage.getItem("play_data"));
 //console.log(video);
 //console.log(video.title)
   let {id,url,title} =video;
  let iframe = document.createElement("iframe");
  iframe.src=`https://www.youtube.com/embed/${id} `;
  iframe.allow = "fullscreen"
 // iframe.allow="autoplay";
  let Title = document.createElement("h3");
  Title.innerText=title;
  let box = document.createElement("div");
  box.append(iframe,title);
  let container = document.querySelector("#play_video");
  container.append(box);