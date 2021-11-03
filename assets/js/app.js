var menu = 0;

function dropDownMenu(){
    if(menu == 0){
        menu++;
        document.querySelector('.dropDown').style="top:60px !important; transition:0.5s;"
    }else{
        menu--;
        document.querySelector('.dropDown').style="top:-280px !important; transition:0.5s;"
    }
}