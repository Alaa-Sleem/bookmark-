var stored = []; 
var linkName = document.getElementById("siteName");
var linkUrl = document.getElementById("siteUrl");

if (localStorage.getItem("UrlDetail") !=null ) // already has prouduct to display 
{
    stored=JSON.parse(localStorage.getItem("UrlDetail"));
    displyProuduct(stored)
}

function submit()
{

    //object to pu the values inn
    var UrlDetail = {
        urlName : linkName.value,
        urlAdress :linkUrl.value,
     
    }
      
    stored.push(UrlDetail)
     displyProuduct(stored)
     localStorage.setItem("UrlDetail", JSON.stringify(stored))
     clearForm()
}


function clearForm()
{
    linkName.value="";
    linkUrl.value="";

}



function displyProuduct(arr)
{
    var cartona ="";
    for (let i = 0; i < arr.length; i++)
     {
       
         cartona += 
         ` 
         <tr"> 
         <td>${stored[i].urlName} </td>
         <td><a href="${stored[i].urlAdress }" target="_blank"><button class="btn btn-info"   onclick=""> Visit</button></a></td> 
         <td > <button class="btn btn-danger" onclick="deleteProudct(${i})" >Delete</button></td>
         </tr>
            `
    }
    
    document.getElementById("bookmarkList").innerHTML= cartona;
}


function deleteProudct(prouductIndex)
{
    stored.splice(prouductIndex,1)
    localStorage.setItem("UrlDetail", JSON.stringify(stored))
    displyProuduct(stored)
}