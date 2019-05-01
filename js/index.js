/*global  console */
var myLunch = document.getElementById("myLunch"),
    myDinner =document.getElementById("myDinner"),
    myBf = document.getElementById("myBf"),
    myMenu = document.getElementById("myMenu");
function myM(){
    myMenu.style.opacity = "1";
}
myM();
function lunchMenu(){
    
myLunch.style.opacity = "1";
 myLunch.style.transitionDuration ="7s";
    myMenu.style.opacity = "0";
    myMenu.style.transitionDuration ="3s";
    myBf.style.opacity ="0";
     myDinner.style.opacity ="0";
   
}

function bfhMenu(){

 myBf.style.opacity = "1";
  
    myBf.style.transitionDuration ="7s";
    myMenu.style.opacity = "0";
     myMenu.style.transitionDuration ="3s";
    myLunch.style.opacity ="0";
     myDinner.style.opacity ="0";
    }

function dinnerMenu(){
    
myDinner.style.opacity = "1";
    
   myDinner.style.transitionDuration ="7s";
    myMenu.style.opacity = "0";
     myMenu.style.transitionDuration ="3s";
   myBf.style.opacity ="0";
     myLunch.style.opacity ="0";
}


var m = document.querySelector('#imagesRandom');

var images = [
    "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "http://www.kbc.co.ke/wp-content/uploads/2018/11/Brunch-cover.jpg",
    "https://www.whole-sisters.com/wp-content/uploads/2017/03/Breakfast-Toast.jpg",
    "https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1513194902/beef-tenderloin-horseradish-cream-1801-ck.jpg?itok=IqTF3sKn",
    "https://www.tasteofhome.com/wp-content/uploads/2017/10/exps16805_CFT163900B01_20_4b-1-696x696.jpg",
    "https://www.tasteofhome.com/wp-content/uploads/2017/10/Slow-Simmered-Burgundy-Beef-Stew_EXPS_SDAS17_201283_B04_12_3b-696x696.jpg",
    "https://allwine.ge/media/articles/restorani_gvino.jpg",
    "https://www.thecricketers-hartleywintney.co.uk/wp-content/uploads/2018/11/xmas.jpg",
    "http://compauta.com.br/wp-content/uploads/2015/12/Ceia.jpg",
    "http://ballinnn.com/wp-content/uploads/2016/08/christmas.jpg",
    "http://www.travelmombasa.com/wp-content/uploads/2015/09/mombasa-food1.jpg",
    "https://format-com-cld-res.cloudinary.com/image/private/s--uduPWjx7--/c_limit,g_center,h_550,w_65535/a_auto,fl_keep_iptc.progressive,q_95/v1/c562af8b2ba9034ad718dba6eeb4bbfb/raas-25.jpg",
    "https://olo-images-live.imgix.net/95/9516a55a242d4876b99cb36eb5fd2e31.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=860&h=484&fit=fill&bg=%23fff&s=b1110fc9a4756ae82d6db5cf00663c07"
];






var myTime = setInterval(sImage, 3000);




function sImage(){
   var myRnum = Math.random(),
    mNi = Math.floor(myRnum * images.length);
    m.src = images[mNi];
}