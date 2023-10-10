

$(() => {

  const members = [
         {
          "name":"Alan",
          "fullname":"Alan OBrien",
          "image":"images/alan.jpg",
          "instruments":[ "Drums", "Vocals", "Bass"],
          "description":"From Kilmeadan, outside of Waterford city. Alan, is the mastermind behind Volcano Predators. The indie record label who'se sole purpose is to promote local music!"
         },
         {
          "name":"Bobby",
          "fullname":"Rob ODonnell",
          "image":"images/bobby_odd.jpg",
          "instruments": [ "Guitar", "Vocals"],
          "description":"From Lemybrien, outside of Waterford city. Bobby Odd is a local musician with a passion for indie-psychedelic music. Bobby has a degree in Sound Engineering and music technology."
         },
         {
          "name":"Craig",
          "fullname":"Craig Dunphy",
          "image":"images/craig.jpg",
          "instruments": [ "Vocals", "Bass"],
          "description":"From Kilmeaden. Craig is the main man from popular local band Woody. Craig loves to play and write music, when he's not busy being a chemistry genius of course."
         },
         {
          "name":"Superb Alien",
          "fullname":"Callum Cream",
          "image":"images/superb_alien.jpg",
          "instruments": ["Guitar", "Keys"],
          "description":"From the heart of Waterford, Superb Alien is deep into heavy metal and brings the distored sounds to Lady Troffea. In his personal music on Spotify, he goes in a different direction with a fresh remix of New York style beats"
         }
      
        ]
  let template = Handlebars.compile($('#members').html());
  let output = template(members);
  $(document.body).html(output);
  
  })

let btn1 = document.querySelector('#btn1');

const showHide = () => {
    let readMoreDiv = document.querySelector("#more");
    let btn1 = document.querySelector('#btn1');
    if (readMoreDiv.style.display === "block") {
      readMoreDiv.style.display = "none"
      btn1.textContent = "Contact Us"
    } else {
      readMoreDiv.style.display = "block";
      btn1.textContent = "Hide"
    }
}

  btn1.addEventListener('click', showHide);
 
  $(() => {
    $('#comments').richText();
 });


 let submitButton = document.querySelector('#submit');
 $('form').submit(function(event) {
  
 event.preventDefault();

 console.log($('form input[name = "contactname"]').val())
 console.log($('form input[name = "email"]').val())

 console.log($('form input[name="toBook"]:checked').val())

 let comments = $('#comments').val();
  console.log(comments);

 let dateVal = $('#bookingdate').val();
  console.log(dateVal);
  
 let countyVal = $('#county').val();
 console.log(countyVal)

console.log($('form input[name = "Venue"]').val())
let ven = $('form input[name = "Venue"]').val()





$('#confirm').text(`Your booking request for ${dateVal} at ${ven} in ${countyVal} has been sent!`)

console.log(`Your booking request for ${dateVal} at ${ven} in ${countyVal} has been sent!`)



let page = 'booking.html';
window.open(page, '_blank', 'width=400, height=400');
});

$(() => {
$('h2').css(
  {
    'color' : 'white',
    'font-weight' : 'bold'
  }
)
})

$(() => {
  $('#btn1').css({
    'display': 'block',
    'margin': '0 auto',
    'text-align': 'center'
  })
 
})

$(() => {
  $('#formPara').css({
   'color' : 'white',
   'font-style' : 'italic'
  });
});


// (() => {
//   $('tbody tr:even').css({
//    'color' : 'blue',
//    'font-style' : 'italic'
//   });
// });

$(() => {

  const gigs = [
         {
          "venue":"Uisce Beatha",
          "county":"Waterford",
          "date":"08/05/2023",
          "time": "9pm"
         },
         {
         "venue":"Reardons",
         "county":"Cork",
         "date":"14/05/2023",
         "time": "9:30pm"
         },
         {
          "venue":"Electric Avenue",
          "county":"Waterford",
          "date":"24/05/2023",
          "time": "10pm"
         },
         {
          "venue":"Geoffs",
          "county":"Waterford",
          "date":"30/05/2023",
          "time": "11pm"
         }
      
        ]
  let template = Handlebars.compile($('#gigPage').html());
  let output = template(gigs);
  $(document.body).html(output);
  
  })


// Moved to  inspirations page, wouldn't work in JS file, link mustn't be properly connected but cant figure out whats wrong

// $(() => {
//   let dec = $('h4')
//    dec.addClass('decor')
// })

// $(() => {

//   const inspirations = [
//          {
//           "band":"The Beatles",
//           "albums":"12",
//           "image":"images/beatles.JPG",
//           "members":[ "Paul", "John", "Ringo", "George"],
//           "description":"The Beatles were an English rock band, formed in Liverpool in 1960, that comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr. They are regarded as the <strong>most influential<strong> band of all time and were integral to the development of 1960s counterculture and popular music's recognition as an art form. "
//          },
//          {
//           "band":"Radiohead",
//           "albums":"9",
//           "image":"images/radiohead.JPG",
//           "members":[ "Thom", "Jonny", "Philip", "Colin", "Ed"],
//           "description":"Radiohead are an English rock band formed in Abingdon, Oxfordshire, in 1985. The band consists of Thom Yorke; brothers Jonny Greenwood and Colin Greenwood; Ed O'Brien; and Philip Selway. They have worked with the producer Nigel Godrich and the cover artist Stanley Donwood since 1994."
//          },
//          {
//           "band":"Skinshape",
//           "albums":"6",
//           "image":"images/skinshape.JPG",
//           "members":[ "Will"],
//           "description":"Skinshape is the studio project of British musician and producer Will Dorey. Skinshape grew out of a love for old music and the way it sounded. The sound has roots in many genres, but in particular 1960s-70s Funk, Soul, Reggae, Psychedelic Rock, Afrobeat and Folk. He is also the co-founder of reggae label."
//           }
      
//         ]
//   let template = Handlebars.compile($('#insp').html());
//   let output = template(inspirations);
//   $(document.body).html(output);
  
//   })

