function Order(name,refid,roomtype)
{
    return {name,refid,roomtype}
}

const orderlist=[
    Order("John","A1000","Single Room"),
    Order("James","A6000","Single Room"),
    Order("Mike","A2000","Double Room"),
    Order("Nelson","A3000","Single Room"),
    Order("Oliver","A4000","Family Room"),
    Order("Adam","A5000","Single Room"),
];
console.log(orderlist[0].name)

function searchOrder(orderlist,refid,custid, contentid){
    let str = document.getElementById(custid).value;
    let searchorder = []

    if(str==="")
        searchorder = orderlist;
    else
    {
        for(let i =0; i<orderlist.length;i++)
        {
            if(orderlist[i].name.includes(str))
                searchorder.push(orderlist[i])
        }
    }

    displayOrder(searchorder,contentid)
}


function displayOrder(searchorder,id)
{
    let html = ''
    for(let i =0; i<searchorder.length;i++)
    {
    html+= `
        <div class="book-item">
        <h3>${searchorder[i].name}</h3>
        <p>${searchorder[i].roomtype}</p>
        <p>${searchorder[i].refid}</p>
        <a href="#">Check In</a>
        </div>
    `
    console.log(html);
    console.log(id);
    document.getElementById(id).innerHTML = html;

    }
}