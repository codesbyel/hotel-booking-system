function showAvailableRoom(){
    document.getElementById("room-selection").style.display="grid"
    document.getElementById("blankspace").style.display="none"
}


function showAvailable(id,list)
{
    let html ='';
    // html= list.reduce(
    //     (append,room)=>append +`
    //     <div class="room-container">
    //         <img src="img/room.jpg" alt="room">
    //     </div>
    //     <div class="description">
    //     <h3>${room.roomtype}</h3>`+
    //     renderlist(room.desc) +
        
    //     `</div>
    //         <div class="price">
    //     <p>RM ${room.price}</p>
    //     <button class="book-btr">Book</button>
    //         </div>
    //     `,''
    // );

    for(let i =0;i<list.length;i++)
    {
        html+=`
        <div class="room-container">
             <img src="img/room.jpg" alt="room">
             </div>
             <div class="description">
             <h3>${room[i].roomtype}</h3>`+
             renderlist(room[i].desc) +
             `
             </div>
             <div class="price">
             <p>RM ${room[i].price}</p>
             <button class="book-btr">Book</button>
             </div>
             `;
        
    }
    // console.log(html);
    
   document.getElementById(id).innerHTML=html;
   document.getElementById(id).style.display="grid";   
   document.getElementById("blankspace").style.display="none"  
}

function renderlist(desc)
{
    var str1 = desc;
    // console.log(str1);
    var arr = str1.split("\n");
    let listelement='';
    listelement+='<ul>'
    for(let i=0;i<arr.length;i++)
    {
        listelement+=`
            <li>${arr[i]}</li>
        `
    }
    listelement+='</ul>'
    // console.log(listelement);
    return listelement;
}