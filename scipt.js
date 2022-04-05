function onload(){
    for(var i=1;i<=3;i++){
        document.getElementById('hide-btn'+i).style.display = "none";
        document.getElementById('readmore'+i).style.display = "none";
    }    
}
function subscribe(input){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.value.match(validRegex)) {

        alert("You are subscribed");

        document.form1.text1.focus();

        return true;

    } else {

        alert("Invalid email address!");

        document.form1.text1.focus();

        return false;

    }
}

function filterBlogsByCategory(value){
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