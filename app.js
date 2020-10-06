//Introduction Section

//const $div1;
const $h1 = $('<h1>'); $h1.text('Welcome to My Site!'); $('.welcomeMessage').append($h1)
//const $div2;
//const $img = $('<img>'); $img.attr('src','https://i.imgur.com/I7Ul8TYb.jpg'); $img.append('.intro')
const $p1 = $('<p>'); $p1.text('Hi, my name is Brandon Balkaransingh. I am a Fullstack Software Engineer'); $('.intro').append($p1)
//const $div3;

//Nav Menu Section

const $ul = $('<ul>'); $('.menu').append($ul)
const $li = $('<li>'); $li.text('About me '); $ul.append($li); $li.click(function() {
    //alert('You clicked About Me') -> test
    window.scrollBy(0,480)
}); 
const $li2 = $('<li>'); $li2.text(' Contact '); $ul.append($li2); $li2.click(function() {
    //alert('You clicked Contact!') -> test
     window.scrollBy(0,1111)
});
const $li3 = $('<li>'); $li3.text(' Sites'); $ul.append($li3); $li3.click(function() {
    //alert('You clicked Sites!') -> test
    window.scrollBy(0,1888)
});
const $li4 = $('<li>'); $li4.text(' Projects '); $ul.append($li4); $li4.click(function() {
    //alert('You clicked Projects!') -> test
    window.scrollBy(0,2280)
});
const $li5 = $('<li>'); $li5.text(' Skills '); $ul.append($li5); $li5.click(function() {
    //alert('You clicked Projects!') -> test
    window.scrollBy(0,5100)
});
const $hamburger = $('.hamburger')
let show = false;
const showMenu = (event) => {
    if (show) {
        $('li').each(function(index) {
            $(this).css('display', 'none')
        })
        show = false
    } else {
        $('li').each(function(index) {
            $(this).css('display', 'flex')
        })
        show = true;
    }
}
$hamburger.on('click', showMenu)

//About Me Section

//const $div4;
const $h2a = $('<h2>'); $h2a.text('About Me'); $('.aboutMe').append($h2a)
const $p2 = $('<p>'); $p2.text('I am a self-starting, fast-learning videogame nerd looking to jumpstart a software engineering career following stints in sales and finance. I am analytical yet creative and a versatile team-player. I am ambitious, hard-working, enjoy acquiring new skills, and possess strong problem solving skills. I strive to be the best version of myself, to be better than my previous self, and derive joy from the sense of accomplishment of completing a task. I am a health-nut who enjoys travelling; sports; nature; and my family, friends, and dog.'); $('.aboutMe').append($p2)
// const $p3 = $('<p>'); $p3.text('resume').addClass('resume'); $('.aboutMe').append($p3)
// const $a = $('<a>'); $('a[href$="PmP6PXF"]').attr('href',"https://docdro.id/PmP6PXF"); $p3.append($a); $a.click(function(){
//          alert('You clicked my resume!')
//  });

//Contact Section

//const $div5;

//const $iframe = $('<iframe>'); $iframe.attr('src', "https://docs.google.com/forms/d/e/1FAIpQLSee9b-FvwXLN_jM3DMPBGWGj7EtE_ax6LHY5YQx1eAvsb_NAQ/viewform?embedded=true"); $iframe.append('.contactMe') 

//Sites Section

//const $div10;
//const $h2d = $('<h2>'); $h2d.text('Sites'); $('.sites').append($h2d)
//const $p7 = $('<p>'); $p7.text('Blog'); $('.sites').append($p7)
//const $a2 = $('<a>'); $a2.attr('href',"https://wordpress.com/view/brandonbalkaransingh23.wordpress.com"); $p7.prepend($a2)
//const $p8 = $('<p>'); $p8.text('GitHub'); $('.sites').append($p8)
//const $a3 = $('<a>'); $a3.attr('href',"https://github.com/bbalkaransingh23888"); $p8.prepend($a3)
//const $p9 = $('<p>'); $p9.text('LinkedIn'); $('.sites').append($p9)
//const $a4 = $('<a>'); $a4.attr('href',"www.linkedin.com/in/brandon-balkaransingh23"); $p9.prepend($a4)

//Project Section

//const $h2b = $('<h2>'); $h2b.text('Projects'); 
//$('.projects').append($h2b)
//const $div12;

const url = 'https://spreadsheets.google.com/feeds/list/1-YSo0tilzPyTV_wXSQqfx_MjTEpFxqZ6dzO3xqVfkAA/od6/public/values?alt=json'
//takes our url and get json data from it
fetch(url)
    // make sure our response is converted to a json format
  .then(response => response.json())
  // take that data and perform following things (lines 10-20ish) on it
  .then(data => {

    //tidying up the json formatted data that comes back
    //turning it into a simple array of objects
    //so when trying to access data of each of your projects,
    //you can simply use project.title, instead of project.gsx$title.$t
    const projects = data.feed.entry.map(entry => {
          // you spit ouit that data out as tidier array of objects
            return {
                title: entry.gsx$title.$t,
                url: entry.gsx$url.$t,
                description: entry.gsx$description.$t,
                repo: entry.gsx$repo.$t, 
                image: entry.gsx$image.$t,
            }
    })
    //you use the tidied up projects array and pass it into the app function (html generator)
    app(projects);
    })
    // function that generates HTML elements for each of the rows on your google sheet (i.e., each of the elements in your projects array)
  const app = (data) => {
        const createProjectElement = (project) => {
           const $div11 = $('<div>')
            $div11.append($('<h4>').attr('class', 'project-header').text(project.title))
            $div11.append($('<img>').attr('src', project.image).addClass('project-images'))
            $div11.append($('<a>').attr('href', project.url).attr('target','_blank').text('Site')).addClass('project-link') 
            $div11.append($('<p>').text(project.description)).addClass('project-description')
            $div11.append($('<a>').attr('href', project.repo).attr('target','_blank').text('Repo')).addClass('project-repo') 
            return $div11
        }
        data.forEach( project => {
            const $projectDiv = createProjectElement(project)
            $('.projects-section').append($projectDiv)
        })
    }


//const $footer;
//const $p10 = $('<p>'); $p10.text('Social Media Links:'); $('footer').append($p10).addClass('footer')

