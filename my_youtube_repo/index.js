
 //const api_key ="AIzaSyAXLW16y1rFqh8Z1cA3sPOZNXnSHbunMOA";
  const api_key = "AIzaSyCmTE_phNIfLBWzV6lvzYESXsUEgkZzrVE"
 
 let search = async() =>{
 
    try{
       let query = document.querySelector("#query").value;
     // console.log(query)
     let url = `https:youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;
    let res = await fetch(url);

    let data = await res.json();
    
  
    data.items.forEach(({id:{videoId},snippet:{thumbnails:{high:{url}},title}})=>{
        let obj = {
            id:videoId,
            thumbnails:url,
            title:title
        }
        let arr = [];
        arr.push(obj);
         //  for_append(arr)
        for_append(arr)
         
   })
     //for_append(arr)
    }catch(err){
        alert(err.message)
    }
   
}


let getData =async () => {
    let url = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyAXLW16y1rFqh8Z1cA3sPOZNXnSHbunMOA'
    let res = await fetch(url);
    let data = await res.json();
    //for_append(data.items)
    data.items.forEach(function({id,snippet:{thumbnails:{high:{url}},title}}){
           let obj1 = {
               id:id,
               thumbnails:url,
               title:title
           }
           let arr1 =[];
           arr1.push(obj1)
       for_append(arr1)
    })
     
   // console.log(data.items)
}
getData()
 
   
    let for_append = (data) =>{
         let container = document.getElementById("results");
     // container.innerHTML="";
          
    // container.innerHTML="";
     data.forEach(({id,thumbnails,title})=>{
    let display_box = document.createElement("div");
     let img = document.createElement("img");
     img.src=thumbnails;
   let iframe = document.createElement("iframe");
   iframe.src = `https://www.youtube.com/embed/${id}`;
   iframe.allow = "fullscreen"
    let Title = document.createElement("h3");
   Title.innerText=title;
   
    display_box.append(img,Title)
   
     //
  let movei_obj = {
      id,
      thumbnails, // thumbnail url.
      title,
  }
//    console.log(movei_obj)
  display_box.onclick=()=>{
      pass_obj(movei_obj)
    
  };
 container.append(display_box)
   })
//  console.log(data)
 
 }

function pass_obj(movei_obj){
    localStorage.setItem("play_data",JSON.stringify(movei_obj))
    window.location.href="video.html";
    // console.log(movei_obj)
    // console.log(movei_obj)
}

