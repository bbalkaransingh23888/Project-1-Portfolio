
//const $div1;
const $h1 = $('<h1>'); $h1.text('Welcome to My Site!'); $('.welcomeMessage').append($h1)
//const $div2;
const $img = $('<img>'); $img.attr('src','/Users/marilynbalkaransingh/Documents/Project_1_Portfolio/images/portfolio_profile_pic.PNG'); $img.append('.intro')
const $p1 = $('<p>'); $p1.text('Hi, my name is Brandon Balkaransingh. I am a full-stack developer-in-training'); $('.intro').append($p1)
//const $div3;
const $ul = $('<ul>'); $('.menu').append($ul)
const $li = $('<li>'); $li.text('About me '); $ul.append($li); $li.click(function() {
    alert('You clicked About Me!')
}); 
const $li3 = $('<li>'); $li3.text(' Contact '); $ul.append($li3); $li3.click(function() {
    alert('You clicked Contact!')
});
const $li4 = $('<li>'); $li4.text(' Sites'); $ul.append($li4); $li4.click(function() {
    alert('You clicked Sites!')
});
const $li2 = $('<li>'); $li2.text(' Projects '); $ul.append($li2); $li2.click(function() {
    alert('You clicked Projects!')
});
//const $div4;
const $h2a = $('<h2>'); $h2a.text('About Me'); $('.aboutMe').append($h2a)
const $p2 = $('<p>'); $p2.text('I graduated from the Laguardia TechHire OpenCode Bootcamp, done in partnership with General Assembly. I have learned HTML, CSS, JavaScript, the command line, and GitHub so far.'); $('.aboutMe').append($p2)
const $p3 = $('<p>'); $p3.text('I graduated from college as an English major, Philosophy minor. I have a myriad of hobbies and interests both including and apart from coding. '); $('.aboutMe').append($p3)
const $p4 = $('<p>'); $p4.text('resume').addClass('resume'); $('.aboutMe').append($p4)
const $a = $('<a>'); $a.attr('href','resume'); $p4.append($a); $a.click(function() {
    alert('You clicked my resume!')
});
//const $div5;
const $h2c = $('<h2>'); $h2c.text('Contact Me'); $('.contactMe').append($h2c)
const $p5 =  $('<p>'); $p5.text('email: bbalkaransingh2223@gmail.com'); $('.contactMe').append($p5)
const $p6 = $('<p>'); $p6.text('phone: (646)265-4025'); $('.contactMe').append($p6)
const $div6 = $('<div>'); $div6.text('name/company').addClass('name'); $('.contactMe').append($div6)
const $input = $('<input type="textbox">'); $input.addClass('name'); $('.contactMe').append($div6) 
const $br = $('<br>'); $('.contactMe').append($br)
const $div7 = $('<div>'); $div7.text('email').addClass('email'); $('.contactMe').append($div7)
const $br2 = $('<br>'); $('.contactMe').append($br2)
const $div8 = $('<div>'); $div8.text('phone').addClass('phone'); $('.contactMe').append($div8)
const $br3 = $('<br>'); $('.contactMe').append($br3)
const $div9 = $('<div>'); $div9.text('message').addClass('message'); $('.contactMe').append($div9)
const $br4 = $('<br>'); $('.contactMe').append($br4)
const $button = $('<button>'); $button.text('submit'); $('.contactMe').append($button); $button.click(function(){
    alert('You clicked submit!')
})
//const $div10;
const $h2d = $('<h2>'); $h2d.text('Sites'); $('.sites').append($h2d)
const $p7 = $('<p>'); $p7.text('Blog'); $('.sites').append($p7)
const $a2 = $('<a>'); $a2.attr('href',"blog"); $p7.prepend($a2)
const $p8 = $('<p>'); $p8.text('GitHub'); $('.sites').append($p8)
const $a3 = $('<a>'); $a3.attr('href',"https://github.com/bbalkaransingh23888"); $p8.prepend($a3)
const $p9 = $('<p>'); $p9.text('LinkedIn'); $('.sites').append($p9)
const $a4 = $('<a>'); $a4.attr('href',"GitHub"); $p9.prepend($a4)
const $h2b = $('<h2>'); $h2b.text('Projects'); $('.projects').append($h2b)
//const $div12;

const url = 'https://spreadsheets.google.com/feeds/list/1-YSo0tilzPyTV_wXSQqfx_MjTEpFxqZ6dzO3xqVfkAA/od6/public/values?alt=json'
//takes our url and get json data from it
fetch(url)
    // make sure our response is converted to a json format
  .then(response => response.json())
  // take that data and perform following things (lines 10-20ish) on it
  .then(data => {
    console.log('unclean', data)
    console.log(data.feed.entry)
    //tidying up the json formatted data that comes back
    //turning it into a simple array of objects
    //so when trying to access data of each of your projects,
    //you can simply use project.title, instead of project.gsx$title.$t
    const projects = data.feed.entry.map(entry => {
          // you spit ouit that data out as tidier array of objects
            return {
                title: entry.gsx$title.$t,
                image: entry.gsx$image.$t,
                description: entry.gsx$description.$t,
                url: entry.gsx$url.$t
            }
    })
    //you use the tidied up projects array and pass it into the app function (html generator)
    app(projects);
    })
    // function that generates HTML elements for each of the rows on your google sheet (i.e., each of the elements in your projects array)
  const app = (data) => {
        console.log('app is running!')
        console.log(data)
        const createProjectElement = (project) => {
           const $div11 = $('<div>')
            $div11.append($('<h2>').attr('class', 'project-header').text(project.title))
            $div11.append($('<p>').text(project.description))
            $div11.append($('<img>').attr('src', project.image).addClass('project-images'))
            $div11.append($('<a>').attr('href', project.url))
            return $div11
        }
        data.forEach( project => {
            const $projectDiv = createProjectElement(project)
            $('body').append($projectDiv)
        })
    }
$h2b.append($div11)

//const $footer;
//const $p10 = $('<p>'); $p10.text('Social Media Links:'); $('footer').append($p10).addClass('footer')

