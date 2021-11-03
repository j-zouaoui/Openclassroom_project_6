var sliderImageBox_1 = document.querySelector(".slider-img-BM-box1");
var sliderImageBox_2 = document.querySelector(".slider-img-BM-box2");
var sliderImageBox_3 = document.querySelector(".slider-img-BM-box3");
var sliderImageBox_4 = document.querySelector(".slider-img-BM-box4");

var sliderImageBox_5 = document.querySelector(".slider-img-AM-box1");
var sliderImageBox_6 = document.querySelector(".slider-img-AM-box2");
var sliderImageBox_7 = document.querySelector(".slider-img-AM-box3");
var sliderImageBox_8 = document.querySelector(".slider-img-AM-box4");

var sliderImageBox_9 = document.querySelector(".slider-img-AV-box1");
var sliderImageBox_10 = document.querySelector(".slider-img-AV-box2");
var sliderImageBox_11 = document.querySelector(".slider-img-AV-box3");
var sliderImageBox_12 = document.querySelector(".slider-img-AV-box4");

var sliderImageBox_13 = document.querySelector(".slider-img-CO-box1");
var sliderImageBox_14 = document.querySelector(".slider-img-CO-box2");
var sliderImageBox_15 = document.querySelector(".slider-img-CO-box3");
var sliderImageBox_16 = document.querySelector(".slider-img-CO-box4");

var boxlist =[[".slider-img-BM-box1", ".slider-img-BM-box2", ".slider-img-BM-box3", ".slider-img-BM-box4"],
              [".slider-img-AM-box1", ".slider-img-AM-box2", ".slider-img-AM-box3",".slider-img-AM-box4"],
              [".slider-img-AV-box1",".slider-img-AV-box2",".slider-img-AV-box3",".slider-img-AV-box4"],
              [".slider-img-CO-box1", ".slider-img-CO-box2", ".slider-img-CO-box3", ".slider-img-CO-box4"]]


var bestMovieImageList = ["images/best_movies/best_movies_1.jpg",
                            "images/best_movies/best_movies_2.jpg",
                            "images/best_movies/best_movies_3.jpg",
                            "images/best_movies/best_movies_4.jpg",
                            "images/best_movies/best_movies_5.jpg",
                            "images/best_movies/best_movies_6.jpg",
                            "images/best_movies/best_movies_7.jpg",
                            "images/best_movies/best_movies_8.jpg",
                            "images/best_movies/best_movies_9.jpg",
                            "images/best_movies/best_movies_10.jpg"];

var actionMovieImageList = ["images/actions/action-1.jpg", 
                            "images/actions/action-2.jpg",
                            "images/actions/action-3.jpg",
                            "images/actions/action-4.jpg",
                            "images/actions/action-5.jpg",
                            "images/actions/action-6.jpg",
                            "images/actions/action-7.jpg",
                            "images/actions/action-8.jpg",
                            "images/actions/action-9.jpg"]

var aventuresMovieImageList = ["images/aventures/aventures-1.jpg", 
                            "images/aventures/aventures-2.jpg",
                            "images/aventures/aventures-3.jpg",
                            "images/aventures/aventures-4.jpg",
                            "images/aventures/aventures-5.jpg",
                            "images/aventures/aventures-6.jpg",
                            "images/aventures/aventures-7.jpg",
                            "images/aventures/aventures-8.jpg"]
 
var comediMovieImageList = ["images/comedi/comedi-1.jpg", 
                              "images/comedi/comedi-2.jpg",
                              "images/comedi/comedi-3.jpg",
                              "images/comedi/comedi-4.jpg",
                              "images/comedi/comedi-5.jpg",
                              "images/comedi/comedi-6.jpg",
                              "images/comedi/comedi-7.jpg",
                             ]                            





var actions = [];
var counter = 0;
var length_lists =[bestMovieImageList.length,
                   actionMovieImageList.length,
                   aventuresMovieImageList.length,
                   comediMovieImageList.length] 

function previous(div){
    let categories_length = 0;
    if (div == 'box_1') {categories_length = length_lists[0]}
    else if (div =='box_2') {categories_length = length_lists[1]} 
    else if (div =='box_3') {categories_length = length_lists[2]}
    else{categories_length = length_lists[3]} 

    if (counter <=0) counter = categories_length-3;
    counter--;
    return setSCRimage(div);   
}

function next(div){
    let categories_length = 0;
    if (div == 'box_1') {categories_length = length_lists[0]}
    else if (div =='box_2') {categories_length = length_lists[1]} 
    else if (div =='box_3') {categories_length = length_lists[2]} 
    else{categories_length = length_lists[3]}

    if (counter >= categories_length - 4) counter = -1;
    counter++;
    return setSCRimage(div)

}

function setSCRimage(div){
switch(div ){
    case 'box_1':       
    var action_1 = sliderImageBox_1.setAttribute('src', bestMovieImageList[counter]);
    var action_2 = sliderImageBox_2.setAttribute('src', bestMovieImageList[counter+1]);
    var action_3 = sliderImageBox_3.setAttribute('src', bestMovieImageList[counter+2]);
    var action_4 = sliderImageBox_4.setAttribute('src', bestMovieImageList[counter+3]);
    break;
    case 'box_2': 
    var action_1 = sliderImageBox_5.setAttribute('src', actionMovieImageList[counter]);
    var action_2 = sliderImageBox_6.setAttribute('src', actionMovieImageList[counter+1]);
    var action_3 = sliderImageBox_7.setAttribute('src', actionMovieImageList[counter+2]);
    var action_4 = sliderImageBox_8.setAttribute('src', actionMovieImageList[counter+3]); 
    break; 
    case 'box_3':    
    var action_1 = sliderImageBox_9.setAttribute('src', aventuresMovieImageList[counter]);
    var action_2 = sliderImageBox_10.setAttribute('src', aventuresMovieImageList[counter+1]);
    var action_3 = sliderImageBox_11.setAttribute('src', aventuresMovieImageList[counter+2]);
    var action_4 = sliderImageBox_12.setAttribute('src', aventuresMovieImageList[counter+3]);  
    break;
    case 'box_4':
    var action_1 = sliderImageBox_13.setAttribute('src', comediMovieImageList[counter]);
    var action_2 = sliderImageBox_14.setAttribute('src', comediMovieImageList[counter+1]);
    var action_3 = sliderImageBox_15.setAttribute('src', comediMovieImageList[counter+2]);
    var action_4 = sliderImageBox_16.setAttribute('src', comediMovieImageList[counter+3]); 

}
    actions = [action_1, action_2, action_3, action_4];
    return actions
}

document.querySelectorAll(".image_box img").forEach(image =>{
    image.onclick = () =>{
        document.querySelector(".popup_div").style.display = 'block';
        document.querySelector(" .popup_div img").src =
         image.getAttribute('src');
    }
});
document.querySelector('.popup_div span').onclick = ()=>{
    document.querySelector(".popup_div").style.display = 'none';
}




