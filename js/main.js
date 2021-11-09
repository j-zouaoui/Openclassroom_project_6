var sliderImageBox_0 = document.querySelector(".to_be_watched")
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

/* actions list */
var actions = [];
                   
/* ajax request to get infromation of best movies*/
var xhr_best_movies = new XMLHttpRequest(); 
xhr_best_movies.open('GET', 'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score');
xhr_best_movies.onreadystatechange = function() {
  if (xhr_best_movies.readyState === 4) {
    var reponse = JSON.parse(xhr_best_movies.responseText);
    sliderImageBox_0.setAttribute('src', (reponse.results[0].image_url));
    sliderImageBox_0.setAttribute('id', (reponse.results[0].id));

    sliderImageBox_1.setAttribute('src', (reponse.results[0].image_url));
    sliderImageBox_1.setAttribute('id', (reponse.results[0].id));

    sliderImageBox_2.setAttribute('src', (reponse.results[1].image_url));
    sliderImageBox_2.setAttribute('id', (reponse.results[1].id));

    sliderImageBox_3.setAttribute('src', (reponse.results[2].image_url));
    sliderImageBox_3.setAttribute('id', (reponse.results[2].id));

    sliderImageBox_4.setAttribute('src', (reponse.results[3].image_url));
    sliderImageBox_4.setAttribute('id', (reponse.results[3].id));
  };
};
xhr_best_movies.send();

/* ajax request to get infromation of actin movies*/
var xhr_action_movies = new XMLHttpRequest(); 
xhr_action_movies.open('GET', 'http://localhost:8000/api/v1/titles/?genre=action&sort_by=-imdb_score');
xhr_action_movies.onreadystatechange = function() {
  if (xhr_action_movies.readyState === 4) {
    var reponse = JSON.parse(xhr_action_movies.responseText);
    sliderImageBox_5.setAttribute('src', (reponse.results[0].image_url));
    sliderImageBox_5.setAttribute('id', (reponse.results[0].id));

    sliderImageBox_6.setAttribute('src', (reponse.results[1].image_url));
    sliderImageBox_6.setAttribute('id', (reponse.results[1].id));

    sliderImageBox_7.setAttribute('src', (reponse.results[2].image_url));
    sliderImageBox_7.setAttribute('id', (reponse.results[2].id));

    sliderImageBox_8.setAttribute('src', (reponse.results[3].image_url)); 
    sliderImageBox_8.setAttribute('id', (reponse.results[4].id));
  };
};
xhr_action_movies.send();

/* ajax request to get infromation of Adventrure movies*/
var xhr_adventure_movies = new XMLHttpRequest(); 
xhr_adventure_movies.open('GET', 'http://localhost:8000/api/v1/titles/?&genre=adventure&sort_by=-imdb_score');
xhr_adventure_movies.onreadystatechange = function() {
  if (xhr_adventure_movies.readyState === 4) {
    var reponse = JSON.parse(xhr_adventure_movies.responseText);
    sliderImageBox_9.setAttribute('src', (reponse.results[0].image_url));
    sliderImageBox_9.setAttribute('id', (reponse.results[0].id));

    sliderImageBox_10.setAttribute('src', (reponse.results[1].image_url));
    sliderImageBox_10.setAttribute('id', (reponse.results[1].id));

    sliderImageBox_11.setAttribute('src', (reponse.results[2].image_url));
    sliderImageBox_11.setAttribute('id', (reponse.results[2].id));

    sliderImageBox_12.setAttribute('src', (reponse.results[3].image_url));
    sliderImageBox_12.setAttribute('id', (reponse.results[3].id)); 
  };
};
xhr_adventure_movies.send();

/* ajax request to get infromation of Comedi movies*/
var xhr_comedy_movies = new XMLHttpRequest(); 
xhr_comedy_movies.open('GET', 'http://localhost:8000/api/v1/titles/?genre=comedy&sort_by=-imdb_score');
xhr_comedy_movies.onreadystatechange = function() {
  if (xhr_comedy_movies.readyState === 4) {
    var reponse = JSON.parse(xhr_comedy_movies.responseText);
    sliderImageBox_13.setAttribute('src', (reponse.results[0].image_url));
    sliderImageBox_13.setAttribute('id', (reponse.results[0].id));

    sliderImageBox_14.setAttribute('src', (reponse.results[1].image_url));
    sliderImageBox_14.setAttribute('id', (reponse.results[1].id));

    sliderImageBox_15.setAttribute('src', (reponse.results[2].image_url));
    sliderImageBox_15.setAttribute('id', (reponse.results[2].id));

    sliderImageBox_16.setAttribute('src', (reponse.results[3].image_url));
    sliderImageBox_16.setAttribute('id', (reponse.results[3].id));

  };
};
xhr_comedy_movies.send();


var counter = 0;
/*set counter value based on previous button onclick*/
function previous(div){

    if (counter <=0) counter = (7-3);
    counter--;
    return setSRCimage(div);   
}

/*set counter value based on next button onclick */
function next(div){

    if (counter >= (7 - 4)) counter = -1;
    counter++;
    return setSRCimage(div)

}

/* set scr image function allows to change the scr of vategories pictures to reflect the button actions (next/previous) */
function setSRCimage(div){
switch(div ){
    case 'box_1':     /*updated image picture of the best movies categories based on clikon button */
      if (counter < 2){  

        /* ajax request to get infromation of best movies*/
        var xhr_best_movies = new XMLHttpRequest(); 
        xhr_best_movies.open('GET', 'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score');
        xhr_best_movies.onreadystatechange = function() {
          if (xhr_best_movies.readyState === 4) {
            var reponse = JSON.parse(xhr_best_movies.responseText);
            sliderImageBox_1.setAttribute('src', (reponse.results[counter].image_url));
            sliderImageBox_1.setAttribute('id', (reponse.results[counter].id));
            sliderImageBox_2.setAttribute('src', (reponse.results[counter+1].image_url));
            sliderImageBox_2.setAttribute('id', (reponse.results[counter+1].id));
            sliderImageBox_3.setAttribute('src', (reponse.results[counter+2].image_url));
            sliderImageBox_3.setAttribute('id', (reponse.results[counter+2].id));
            sliderImageBox_4.setAttribute('src', (reponse.results[counter+3].image_url));
            sliderImageBox_4.setAttribute('id', (reponse.results[counter+3].id));
          };
        };
        xhr_best_movies.send();
      }
      else if(counter === 2){       

        /* ajax request to get infromation of best movies*/
        var xhr_best_movies = new XMLHttpRequest(); 
        xhr_best_movies.open('GET', 'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score');
        xhr_best_movies.onreadystatechange = function() {
          if (xhr_best_movies.readyState === 4) {
            var reponse = JSON.parse(xhr_best_movies.responseText);
            sliderImageBox_1.setAttribute('src', (reponse.results[counter].image_url));
            sliderImageBox_1.setAttribute('id', (reponse.results[counter].id));
            sliderImageBox_2.setAttribute('src', (reponse.results[counter+1].image_url));
            sliderImageBox_2.setAttribute('id', (reponse.results[counter+1].id));
            sliderImageBox_3.setAttribute('src', (reponse.results[counter+2].image_url));
            sliderImageBox_3.setAttribute('id', (reponse.results[counter+2].id));
          };
        };
        xhr_best_movies.send();

        /* ajax request to get infromation of best movies from page2*/
        var xhr_best_movies_page1 = new XMLHttpRequest(); 
        xhr_best_movies_page1.open('GET', 'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page=2');
        xhr_best_movies_page1.onreadystatechange = function() {
          if (xhr_best_movies_page1.readyState === 4) {
            var reponse = JSON.parse(xhr_best_movies_page1.responseText);
            sliderImageBox_4.setAttribute('src', (reponse.results[0].image_url));
            sliderImageBox_4.setAttribute('id', (reponse.results[0].id));          
          };
        };
                xhr_best_movies_page1.send(); 


      }
      else {  

        /* ajax request to get infromation of best movies*/
        var xhr_best_movies = new XMLHttpRequest(); 
        xhr_best_movies.open('GET', 'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score');
        xhr_best_movies.onreadystatechange = function() {
          if (xhr_best_movies.readyState === 4) {
            var reponse = JSON.parse(xhr_best_movies.responseText);
            sliderImageBox_1.setAttribute('src', (reponse.results[counter].image_url));
            sliderImageBox_1.setAttribute('id', (reponse.results[counter].id));
            sliderImageBox_2.setAttribute('src', (reponse.results[counter+1].image_url));
            sliderImageBox_2.setAttribute('id', (reponse.results[counter+1].id));
            
          };
        };
        xhr_best_movies.send();

        /* ajax request to get infromation of best movies from page2*/
        var xhr_best_movies_page1 = new XMLHttpRequest(); 
        xhr_best_movies_page1.open('GET', 'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page=2');
        xhr_best_movies_page1.onreadystatechange = function() {
          if (xhr_best_movies_page1.readyState === 4) {
            var reponse = JSON.parse(xhr_best_movies_page1.responseText);
            sliderImageBox_3.setAttribute('src', (reponse.results[counter -3].image_url));
            sliderImageBox_3.setAttribute('id', (reponse.results[counter -3].id));
            sliderImageBox_4.setAttribute('src', (reponse.results[counter - 2].image_url));
            sliderImageBox_4.setAttribute('id', (reponse.results[counter -2].id));          
          };
        };
        xhr_best_movies_page1.send();
      }


    break;
    case 'box_2':     /*updated image picture of the action movies categories based on clikon button */
    if (counter < 2){  

      /* ajax request to get infromation of best movies*/
      var xhr_best_movies = new XMLHttpRequest(); 
      xhr_best_movies.open('GET', 'http://localhost:8000/api/v1/titles/?genre=action&sort_by=-imdb_score');
      xhr_best_movies.onreadystatechange = function() {
        if (xhr_best_movies.readyState === 4) {
          var reponse = JSON.parse(xhr_best_movies.responseText);
          sliderImageBox_5.setAttribute('src', (reponse.results[counter].image_url));
          sliderImageBox_5.setAttribute('id', (reponse.results[counter].id));
          sliderImageBox_6.setAttribute('src', (reponse.results[counter+1].image_url));
          sliderImageBox_6.setAttribute('id', (reponse.results[counter+1].id));
          sliderImageBox_7.setAttribute('src', (reponse.results[counter+2].image_url));
          sliderImageBox_7.setAttribute('id', (reponse.results[counter+2].id));
          sliderImageBox_8.setAttribute('src', (reponse.results[counter+3].image_url));
          sliderImageBox_8.setAttribute('id', (reponse.results[counter+3].id));
        };
      };
      xhr_best_movies.send();
    }
    else if(counter === 2){       

      /* ajax request to get infromation of best movies*/
      var xhr_best_movies = new XMLHttpRequest(); 
      xhr_best_movies.open('GET', 'http://localhost:8000/api/v1/titles/?genre=action&sort_by=-imdb_score');
      xhr_best_movies.onreadystatechange = function() {
        if (xhr_best_movies.readyState === 4) {
          var reponse = JSON.parse(xhr_best_movies.responseText);
          sliderImageBox_5.setAttribute('src', (reponse.results[counter].image_url));
          sliderImageBox_5.setAttribute('id', (reponse.results[counter].id));
          sliderImageBox_6.setAttribute('src', (reponse.results[counter+1].image_url));
          sliderImageBox_6.setAttribute('id', (reponse.results[counter+1].id));
          sliderImageBox_7.setAttribute('src', (reponse.results[counter+2].image_url));
          sliderImageBox_7.setAttribute('id', (reponse.results[counter+2].id));
        };
      };
      xhr_best_movies.send();

      /* ajax request to get infromation of best movies from page2*/
      var xhr_best_movies_page1 = new XMLHttpRequest(); 
      xhr_best_movies_page1.open('GET', 'http://localhost:8000/api/v1/titles/?genre=action&sort_by=-imdb_score&page=2');
      xhr_best_movies_page1.onreadystatechange = function() {
        if (xhr_best_movies_page1.readyState === 4) {
          var reponse = JSON.parse(xhr_best_movies_page1.responseText);
          sliderImageBox_8.setAttribute('src', (reponse.results[0].image_url));
          sliderImageBox_8.setAttribute('id', (reponse.results[0].id));          
        };
      };
              xhr_best_movies_page1.send(); 


    }
    else {  

      /* ajax request to get infromation of best movies*/
      var xhr_best_movies = new XMLHttpRequest(); 
      xhr_best_movies.open('GET', 'http://localhost:8000/api/v1/titles/?genre=action&sort_by=-imdb_score');
      xhr_best_movies.onreadystatechange = function() {
        if (xhr_best_movies.readyState === 4) {
          var reponse = JSON.parse(xhr_best_movies.responseText);
          sliderImageBox_5.setAttribute('src', (reponse.results[counter].image_url));
          sliderImageBox_5.setAttribute('id', (reponse.results[counter].id));
          sliderImageBox_6.setAttribute('src', (reponse.results[counter+1].image_url));
          sliderImageBox_6.setAttribute('id', (reponse.results[counter+1].id));
          
        };
      };
      xhr_best_movies.send();

      /* ajax request to get infromation of best movies from page2*/
      var xhr_best_movies_page1 = new XMLHttpRequest(); 
      xhr_best_movies_page1.open('GET', 'http://localhost:8000/api/v1/titles/?genre=action&sort_by=-imdb_score&page=2');
      xhr_best_movies_page1.onreadystatechange = function() {
        if (xhr_best_movies_page1.readyState === 4) {
          var reponse = JSON.parse(xhr_best_movies_page1.responseText);
          sliderImageBox_7.setAttribute('src', (reponse.results[counter -3].image_url));
          sliderImageBox_7.setAttribute('id', (reponse.results[counter -3].id));
          sliderImageBox_8.setAttribute('src', (reponse.results[counter - 2].image_url));
          sliderImageBox_8.setAttribute('id', (reponse.results[counter -2].id));          
        };
      };
      xhr_best_movies_page1.send();
    }

    break; 
    case 'box_3':     /*updated image picture of the adventure movies categories based on clikon button */
    if (counter < 2){  

      /* ajax request to get infromation of best movies*/
      var xhr_best_movies = new XMLHttpRequest(); 
      xhr_best_movies.open('GET', 'http://localhost:8000/api/v1/titles/?&genre=adventure&sort_by=-imdb_score');
      xhr_best_movies.onreadystatechange = function() {
        if (xhr_best_movies.readyState === 4) {
          var reponse = JSON.parse(xhr_best_movies.responseText);
          sliderImageBox_9.setAttribute('src', (reponse.results[counter].image_url));
          sliderImageBox_9.setAttribute('id', (reponse.results[counter].id));
          sliderImageBox_10.setAttribute('src', (reponse.results[counter+1].image_url));
          sliderImageBox_10.setAttribute('id', (reponse.results[counter+1].id));
          sliderImageBox_11.setAttribute('src', (reponse.results[counter+2].image_url));
          sliderImageBox_11.setAttribute('id', (reponse.results[counter+2].id));
          sliderImageBox_12.setAttribute('src', (reponse.results[counter+3].image_url));
          sliderImageBox_12.setAttribute('id', (reponse.results[counter+3].id));
        };
      };
      xhr_best_movies.send();
    }
    else if(counter === 2){       

      /* ajax request to get infromation of best movies*/
      var xhr_best_movies = new XMLHttpRequest(); 
      xhr_best_movies.open('GET', 'http://localhost:8000/api/v1/titles/?&genre=adventure&sort_by=-imdb_score');
      xhr_best_movies.onreadystatechange = function() {
        if (xhr_best_movies.readyState === 4) {
          var reponse = JSON.parse(xhr_best_movies.responseText);
          sliderImageBox_9.setAttribute('src', (reponse.results[counter].image_url));
          sliderImageBox_9.setAttribute('id', (reponse.results[counter].id));
          sliderImageBox_10.setAttribute('src', (reponse.results[counter+1].image_url));
          sliderImageBox_10.setAttribute('id', (reponse.results[counter+1].id));
          sliderImageBox_11.setAttribute('src', (reponse.results[counter+2].image_url));
          sliderImageBox_11.setAttribute('id', (reponse.results[counter+2].id));
        };
      };
      xhr_best_movies.send();

      /* ajax request to get infromation of best movies from page2*/
      var xhr_best_movies_page1 = new XMLHttpRequest(); 
      xhr_best_movies_page1.open('GET', 'http://localhost:8000/api/v1/titles/?&genre=adventure&sort_by=-imdb_score&page=2');
      xhr_best_movies_page1.onreadystatechange = function() {
        if (xhr_best_movies_page1.readyState === 4) {
          var reponse = JSON.parse(xhr_best_movies_page1.responseText);
          sliderImageBox_12.setAttribute('src', (reponse.results[0].image_url));
          sliderImageBox_12.setAttribute('id', (reponse.results[0].id));          
        };
      };
              xhr_best_movies_page1.send(); 


    }
    else {  

      /* ajax request to get infromation of best movies*/
      var xhr_best_movies = new XMLHttpRequest(); 
      xhr_best_movies.open('GET', 'http://localhost:8000/api/v1/titles/?&genre=adventure&sort_by=-imdb_score');
      xhr_best_movies.onreadystatechange = function() {
        if (xhr_best_movies.readyState === 4) {
          var reponse = JSON.parse(xhr_best_movies.responseText);
          sliderImageBox_9.setAttribute('src', (reponse.results[counter].image_url));
          sliderImageBox_9.setAttribute('id', (reponse.results[counter].id));
          sliderImageBox_10.setAttribute('src', (reponse.results[counter+1].image_url));
          sliderImageBox_10.setAttribute('id', (reponse.results[counter+1].id));
          
        };
      };
      xhr_best_movies.send();

      /* ajax request to get infromation of best movies from page2*/
      var xhr_best_movies_page1 = new XMLHttpRequest(); 
      xhr_best_movies_page1.open('GET', 'http://localhost:8000/api/v1/titles/?&genre=adventure&sort_by=-imdb_score&page=2');
      xhr_best_movies_page1.onreadystatechange = function() {
        if (xhr_best_movies_page1.readyState === 4) {
          var reponse = JSON.parse(xhr_best_movies_page1.responseText);
          sliderImageBox_11.setAttribute('src', (reponse.results[counter -3].image_url));
          sliderImageBox_11.setAttribute('id', (reponse.results[counter -3].id));
          sliderImageBox_12.setAttribute('src', (reponse.results[counter - 2].image_url));
          sliderImageBox_12.setAttribute('id', (reponse.results[counter -2].id));          
        };
      };
      xhr_best_movies_page1.send();
    }   
    
    break;
    case 'box_4':     /*updated image picture of the comdedi movies categories based on clikon button */
      if (counter < 2){  

        /* ajax request to get infromation of best movies*/
        var xhr_best_movies = new XMLHttpRequest(); 
        xhr_best_movies.open('GET', 'http://localhost:8000/api/v1/titles/?genre=comedy&sort_by=-imdb_score');
        xhr_best_movies.onreadystatechange = function() {
          if (xhr_best_movies.readyState === 4) {
            var reponse = JSON.parse(xhr_best_movies.responseText);
            sliderImageBox_13.setAttribute('src', (reponse.results[counter].image_url));
            sliderImageBox_13.setAttribute('id', (reponse.results[counter].id));
            sliderImageBox_14.setAttribute('src', (reponse.results[counter+1].image_url));
            sliderImageBox_14.setAttribute('id', (reponse.results[counter+1].id));
            sliderImageBox_15.setAttribute('src', (reponse.results[counter+2].image_url));
            sliderImageBox_15.setAttribute('id', (reponse.results[counter+2].id));
            sliderImageBox_16.setAttribute('src', (reponse.results[counter+3].image_url));
            sliderImageBox_16.setAttribute('id', (reponse.results[counter+3].id));
          };
        };
        xhr_best_movies.send();
      }
      else if(counter === 2){       

        /* ajax request to get infromation of best movies*/
        var xhr_best_movies = new XMLHttpRequest(); 
        xhr_best_movies.open('GET', 'http://localhost:8000/api/v1/titles/?genre=comedy&sort_by=-imdb_score');
        xhr_best_movies.onreadystatechange = function() {
          if (xhr_best_movies.readyState === 4) {
            var reponse = JSON.parse(xhr_best_movies.responseText);
            sliderImageBox_13.setAttribute('src', (reponse.results[counter].image_url));
            sliderImageBox_13.setAttribute('id', (reponse.results[counter].id));
            sliderImageBox_14.setAttribute('src', (reponse.results[counter+1].image_url));
            sliderImageBox_14.setAttribute('id', (reponse.results[counter+1].id));
            sliderImageBox_15.setAttribute('src', (reponse.results[counter+2].image_url));
            sliderImageBox_15.setAttribute('id', (reponse.results[counter+2].id));
          };
        };
        xhr_best_movies.send();

        /* ajax request to get infromation of best movies from page2*/
        var xhr_best_movies_page1 = new XMLHttpRequest(); 
        xhr_best_movies_page1.open('GET', 'http://localhost:8000/api/v1/titles/?genre=comedy&sort_by=-imdb_score&page=2');
        xhr_best_movies_page1.onreadystatechange = function() {
          if (xhr_best_movies_page1.readyState === 4) {
            var reponse = JSON.parse(xhr_best_movies_page1.responseText);
            sliderImageBox_16.setAttribute('src', (reponse.results[0].image_url));
            sliderImageBox_16.setAttribute('id', (reponse.results[0].id));          
          };
        };
                xhr_best_movies_page1.send(); 


      }
      else {  

        /* ajax request to get infromation of best movies*/
        var xhr_best_movies = new XMLHttpRequest(); 
        xhr_best_movies.open('GET', 'http://localhost:8000/api/v1/titles/?genre=comedy&sort_by=-imdb_score');
        xhr_best_movies.onreadystatechange = function() {
          if (xhr_best_movies.readyState === 4) {
            var reponse = JSON.parse(xhr_best_movies.responseText);
            sliderImageBox_13.setAttribute('src', (reponse.results[counter].image_url));
            sliderImageBox_13.setAttribute('id', (reponse.results[counter].id));
            sliderImageBox_14.setAttribute('src', (reponse.results[counter+1].image_url));
            sliderImageBox_14.setAttribute('id', (reponse.results[counter+1].id));
            
          };
        };
        xhr_best_movies.send();

        /* ajax request to get infromation of best movies from page2*/
        var xhr_best_movies_page1 = new XMLHttpRequest(); 
        xhr_best_movies_page1.open('GET', 'http://localhost:8000/api/v1/titles/?genre=comedy&sort_by=-imdb_score&page=2');
        xhr_best_movies_page1.onreadystatechange = function() {
          if (xhr_best_movies_page1.readyState === 4) {
            var reponse = JSON.parse(xhr_best_movies_page1.responseText);
            sliderImageBox_15.setAttribute('src', (reponse.results[counter -3].image_url));
            sliderImageBox_15.setAttribute('id', (reponse.results[counter -3].id));
            sliderImageBox_16.setAttribute('src', (reponse.results[counter - 2].image_url));
            sliderImageBox_16.setAttribute('id', (reponse.results[counter -2].id));          
          };
        };
        xhr_best_movies_page1.send();
      }
    }
    actions = [action_1, action_2, action_3, action_4];
    return actions
}

/* popup displaying informations abouts selected movies.
the requested data are:title, genre, relaise date, rate, imdb dcore, film maker, 
actors, duration, native country, box office result and small summary of the movie */
document.querySelectorAll(".image_box img").forEach(image =>{
    image.onclick = () =>{
        document.querySelector(".popup_div").style.display = 'block';
        document.querySelector(" .popup_div img").src = image.getAttribute('src');
        var url = 'http://localhost:8000/api/v1/titles/' + image.getAttribute('id');


        /* ajax request to get details informations of clicked picture movies*/
        var xhr_movies_informations = new XMLHttpRequest(); 
        xhr_movies_informations.open('GET', url);
        xhr_movies_informations.onreadystatechange = function() {
        if (xhr_movies_informations.readyState === 4) {
            var reponse = JSON.parse(xhr_movies_informations.responseText);

            document.getElementById('movies_story').innerHTML = "Résumé du film: " + reponse.long_description;

            document.getElementById('title').innerHTML = "Titel: " + reponse.title;
            document.getElementById('genre').innerHTML = "Genre: " + reponse.genres;
            document.getElementById('relaise_date').innerHTML = "Date de srotie: " + reponse.date_published;
            document.getElementById('rate').innerHTML = "Rate: " + reponse.rated;    
            document.getElementById('imdb_score').innerHTML = "Score Imbd: " + reponse.imdb_score;
            document.getElementById('film_maker').innerHTML = "Réalisateur: " + reponse.directors;
            document.getElementById('actors').innerHTML = "Acteurs: " + reponse.actors;
            document.getElementById('duration').innerHTML = "Durée: " + reponse.duration;
            document.getElementById('native_country').innerHTML = "Pays d'orgine: " + reponse.countries;
            document.getElementById('box_office_result').innerHTML = "Résultat au Box Office:" + reponse.worldwide_gross_income;     
         
        };
        };
        xhr_movies_informations.send();











        



















    }    
});

/* close the popup */
document.querySelector('.popup_div span').onclick = ()=>{
    document.querySelector(".popup_div").style.display = 'none';
}

