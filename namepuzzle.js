var a = document.getElementById("namelink");

let alreadyClicked = false;

function nameFunction()
{
    if (alreadyClicked == false)
    {
        
        var array1 = ["Matt Johnson", "Bart Paden", "Ryan Doss", "Jared Malcolm"];
        var array2 = ["Matt Johnson", "Bart Paden", "Jordan Heigle", "Tyler Viles"];
        
        //Filters repeat names
        var nameArray = array1.concat(array2.filter((item) => array1.indexOf(item) < 0))
        
        //Adds list elements to the bulleted list
        nameArray.forEach(element => {
            document.getElementById("names-list").innerHTML += "<li>"+element+"</li>";
        });
        alreadyClicked = true;
    }
    else
    {
        //Alert if user has already generated the bulleted list
        alert("You've already generated the list below.");
    }
    
}

    



