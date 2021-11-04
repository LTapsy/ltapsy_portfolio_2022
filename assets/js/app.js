var menu = 0;

function dropDownMenu(){
    if(menu == 0){
        menu++;
        document.querySelector('.dropDown').style="margin-top:60px !important; transition:0.5s;"
    }else{
        menu--;
        document.querySelector('.dropDown').style="margin-top:-300px !important; transition:0.5s;"
    }
}