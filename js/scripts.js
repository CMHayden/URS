const Projects = [
    {
        id: 1,
        title: "VW - Puebla, Mexico",
        description: "New paint robots",
        date: "Jun 2011 - Aug 2011"
    },
    {
        id: 2,
        title: "VW - Puebla, Mexico",
        description: "New paint robots",
        date: "Dec 2011 - Apr 2012"
    },
    {
        id: 3,
        title: "Nissan / Renault - Tangier, Morocco",
        description: "Paint Process Consulting",
        date: "Jul 2012 - Aug 2012"
    },
    {
        id: 4,
        title: "SVW - Nanjing, China",
        description: "New car model painting",
        date: "Aug 2012 - Dec 2012"
    },
    {
        id: 5,
        title: "VW - Taubaté, Brazil",
        description: "Two new painting lines",
        date: "Aug 2012 - Dec 2012"
    },
    {
        id: 6,
        title: "Hyundai Assam - Izmit, Turkey",
        description: "New paint robots",
        date: "Feb 2014 - May 2014"
    },
    {
        id: 7,
        title: "SVW - Ningbo, China",
        description: "Praint process consulting",
        date: "Dec 2011 - Apr 2012"
    },
    {
        id: 8,
        title: "Jaguar / Land Rover - Solihull, UK",
        description: "New exterior painting robots",
        date: "Aug 2014 - Sep 2014"
    },
    {
        id: 9,
        title: "SVW - Yizheng, China",
        description: "New UBS robots",
        date: "Oct 2014"
    },
    {
        id: 10,
        title: "VW - Chattanooga, USA",
        description: "New model",
        date: "Dec 2014"
    },
    {
        id: 11,
        title: "Ficosa",
        description: "Process support",
        date: "Jan 2015 - Jan 2016"
    },
    {
        id: 12,
        title: "BMW Brilliance",
        description: "New IPP line",
        date: "Jun 2015 - Jan 2016"
    },
    {
        id: 13,
        title: "VDL NedCar",
        description: "New interior paint stations",
        date: "Sep 2016 - May 2017"
    },
    {
        id: 14,
        title: "VW - Mexico",
        description: "New exterior painting stations",
        date: "Sep 2016 - May 2017"
    },
    {
        id: 15,
        title: "Audi - Győr, Hungary",
        description: false,
        date: "Jul 2017 - Sep 2017"
    },
    {
        id: 16,
        title: "OPEL - Gilwice, Poland",
        description: false,
        date: "Oct 2017 - Nov 2017"
    },
    {
        id: 17,
        title: "Volvo Trucks - USA",
        description: false,
        date: "Mar 2018 - Apr 2018"
    },
    {
        id: 18,
        title: "BMW - Mexico",
        description: false,
        date: "May 2018 - Present"
    }
    /*
    ,
    {
        id: 19,
        title: "todo",
        description: "todo" or false,
        date: "todo"
    }
    */
];

function projectFiller() {
    let i = Projects.length - 1;
    const div_left = document.getElementById("left");
    const div_right = document.getElementById("right");
    const div_mobile = document.getElementById("mobile-projects");

    for (i; i >= 0; i--) {
        div_mobile.innerHTML += '<p class="title">' + Projects[i].title + '</p>';
        if (Projects[i].description != false) {
            div_mobile.innerHTML += '<p class="desc">' + Projects[i].description + '</p>';
        }
        div_mobile.innerHTML += '<p class="date">' + Projects[i].date + '</p><br/><br/>';
        if (i % 2 != 0) {
            div_left.innerHTML += '<p class="title">' + Projects[i].title + '</p>';
            if (Projects[i].description != false) {
                div_left.innerHTML += '<p class="desc">' + Projects[i].description + '</p>';
            }
            div_left.innerHTML += '<p class="date">' + Projects[i].date + '</p><br/><br/>';
        } else {
            div_right.innerHTML += '<p class="title">' + Projects[i].title + '</p>';
            if (Projects[i].description != false) {
                div_right.innerHTML += '<p class="desc">' + Projects[i].description + '</p>';
            }
            div_right.innerHTML += '<p class="date">' + Projects[i].date + '</p><br/><br/>';
        }
    }
}

function mobileNavigation() {
    const links = document.getElementById("mobileLinks");
    const icon = document.getElementById("icon");

    if (links.style.display === "block") {
        links.style.display = "none";
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    } else {
        links.style.display = "block";
        icon.classList.add("fa-times");
        icon.classList.remove("fa-bars");
    }
}

function sendEmail() {
    const good = document.getElementById("success");

    let name = document.getElementById("name");
    let email = document.getElementById("email");


    if (name.value == "") {
        //Empty name
        document.getElementById("name_label").classList.add("invalid");
        document.getElementById("name").classList.add("invalidInput");
        document.getElementById("name_label").innerHTML = "Invalid name";
    } else {
        document.getElementById("name_label").classList.remove("invalid");
        document.getElementById("name_label").innerHTML = "Name";
        document.getElementById("name").classList.remove("invalidInput");
    }
    if (!email.value.match(
        /(?:[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)) {
        //invalid email
        document.getElementById("email_label").classList.add("invalid");
        document.getElementById("email_label").innerHTML = "Invalid email";
        document.getElementById("email").classList.add("invalidInput");
    } else {
        document.getElementById("email_label").classList.remove("invalid");
        document.getElementById("email_label").innerHTML = "Email";
        document.getElementById("email").classList.remove("invalidInput");
    }
    if (email.value.match(
        /(?:[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)
        && name.value != "") {
        $.ajax({
            type: "POST",
            url: 'https://www.callumhayden.com/urs/php/sendEmail.php',
            data: $("#contactForm").serialize(),
            success: function () {
                good.style.display = "unset";
            },
            error: function () {
                good.style.display = "unset";
            }
        });
        return false;
    }

}
