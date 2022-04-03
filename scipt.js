function onload(){
    for(var i=1;i<=3;i++){
        document.getElementById('hide-btn'+i).style.display = "none";
    document.getElementById('readmore'+i).style.display = "none";
    }    
}

function filterBlogs(value){
    console.log("hi")
    if(value==1){
        document.getElementById('category1').style.display = "block";
        document.getElementById('category2').style.display = "block";
        document.getElementById('category3').style.display = "block";
        document.getElementById('hr1').style.display = "block";
        document.getElementById('hr2').style.display = "block";
    }else if(value==2){
        document.getElementById('category1').style.display = "block";
        document.getElementById('category2').style.display = "none";
        document.getElementById('category3').style.display = "none";
        document.getElementById('hr1').style.display = "none";
        document.getElementById('hr2').style.display = "none";
    }else if(value==3){
        document.getElementById('category1').style.display = "none";
        document.getElementById('category2').style.display = "block";
        document.getElementById('category3').style.display = "none";
        document.getElementById('hr1').style.display = "none";
        document.getElementById('hr2').style.display = "none";
    }else{
        document.getElementById('category1').style.display = "none";
        document.getElementById('category2').style.display = "none";
        document.getElementById('category3').style.display = "block";
        document.getElementById('hr1').style.display = "none";
        document.getElementById('hr2').style.display = "none";
    }
}

function showMore(value){
    document.getElementById('readmore'+value).style.display = "block";
    document.getElementById('cnt-btn'+value).style.display = "none";
    document.getElementById('hide-btn'+value).style.display = "block";

}

function hideMore(value){
    document.getElementById('readmore'+value).style.display = "none";
    document.getElementById('cnt-btn'+value).style.display = "block";
    document.getElementById('hide-btn'+value).style.display = "none";
   
}