
//const $div1;
const $h1 = $('<h1>'); $h1.text('Welcome to My Site!'); $('.welcomeMessage').append($h1)
//const $div2;
const $p1 = $('<p>'); $p1.text('Hi, my name is Brandon Balkaransingh. I am a full-stack developer-in-training'); $('.intro').append($p1)
//const $div3;
const $ul = $('<ul>'); $('.menu').append($ul)
const $li = $('<li>'); $li.text('About me '); $ul.append($li)
const $li2 = $('<li>'); $li2.text(' Projects '); $ul.append($li2)
const $li3 = $('<li>'); $li3.text(' Contact '); $ul.append($li3)
const $li4 = $('<li>'); $li4.text(' Sites'); $ul.append($li4)
//const $div4;
const $h2a = $('<h2>'); $h2a.text('About Me'); $('.aboutMe').append($h2a)
const $p2 = $('<p>'); $p2.text('I graduated from the Laguardia TechHire OpenCode Bootcamp, done in partnership with General Assembly. I have learned HTML, CSS, JavaScript, the command line, and GitHub so far.'); $('.aboutMe').append($p2)
const $p3 = $('<p>'); $p3.text('I graduated from college as an English major, Philosophy minor. I have a myriad of hobbies and interests both including and apart from coding. '); $('.aboutMe').append($p3)
const $p4 = $('<p>'); $p4.text('resume').addClass('resume'); $('.aboutMe').append($p4)
const $a = $('<a>'); $a.attr('href',"resume"); $p4.prepend($a)
//const $div5;
const $h2b = $('<h2>'); $h2b.text('Projects'); $('.projects').append($h2b)
//const $div6;
const $h2c = $('<h2>'); $h2c.text('Contact Me'); $('.contactMe').append($h2c)
const $p5 =  $('<p>'); $p5.text('email: bbalkaransingh2223@gmail.com'); $('.contactMe').append($p5)
const $p6 = $('<p>'); $p6.text('phone: (646)265-4025'); $('.contactMe').append($p6)
const $div7 = $('<div>'); $div7.text('name/company').addClass('name'); $('.contactMe').append($div7)
//const $input = $(':input'); $input.attr(':text'); 
const $div8 = $('<div>'); $div8.text('email').addClass('email'); $('.contactMe').append($div8)
const $div9 = $('<div>'); $div9.text('phone').addClass('phone'); $('.contactMe').append($div9)
const $div10 = $('<div>'); $div10.text('message').addClass('message'); $('.contactMe').append($div10)
//const $button;
//const $div11;
const $h2d = $('<h2>'); $h2d.text('Sites'); $('.sites').append($h2d)
const $p7 = $('<p>'); $p7.text('Blog'); $('.sites').append($p7)
const $a2 = $('<a>'); $a2.attr('href',"blog"); $p7.prepend($a2)
const $p8 = $('<p>'); $p8.text('GitHub'); $('.sites').append($p8)
const $a3 = $('<a>'); $a3.attr('href',"https://github.com/bbalkaransingh23888"); $p8.prepend($a3)
const $p9 = $('<p>'); $p9.text('LinkedIn'); $('.sites').append($p9)
const $a4 = $('<a>'); $a4.attr('href',"GitHub"); $p9.prepend($a4)
//const $footer;
const $p10 = $('<p>'); $p10.text('Social Media Links:'); $('footer').append($p10).addClass('footer')

/*
console.log($)

const url = 'https://spreadsheets.google.com/feeds/list/1-YSo0tilzPyTV_wXSQqfx_MjTEpFxqZ6dzO3xqVfkAA/od6/public/values?alt=json'

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.feed.entry)
        const projects = data.feed.entry.map( entry => {
            return {
                title: entry.gsx$title.$t,
                image: entry.gsx$image.$t,
                description: entry.gsx$description.$t,
                url: entry.gsx$url.$t
            }
        })
        console.log(projects); app(projects);
    
    })
    const app = (data) => {
        console.log('app is running!')
        console.log(data)

        const createProjectElement = (project) => {
            const $div = $('<div>')
            $div.append($('<h2>').text(project.title))
            $div.append($('<p>').text(project.description))
            $div.append($('<img>').attr('src', project.image))
            $div.append($('<a>').attr('href', project.url))
            return $div
        }
        data.forEach( project => {
            const $projectDiv = createProjectElement(project)
            $('body').append($projectDiv)
        })
    }*/