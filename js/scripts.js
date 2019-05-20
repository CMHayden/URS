const Projects = [
    {
        title: "VW - Puebla, Mexico",
        description: "New paint robots",
        date: "Jun 2011 - Aug 2011"
    },
    {
        title: "VW - Puebla, Mexico",
        description: "New paint robots",
        date: "Dec 2011 - Apr 2012"
    },
    {
        title: "Nissan / Renault - Tangier, Morocco",
        description: "Paint Process Consulting",
        date: "Jul 2012 - Aug 2012"
    },
    {
        title: "SVW - Nanjing, China",
        description: "New car model painting",
        date: "Aug 2012 - Dec 2012"
    },
    {
        title: "VW - Taubaté, Brazil",
        description: "Two new painting lines",
        date: "Aug 2012 - Dec 2012"
    },
    {
        title: "SVW - Ningbo, China",
        description: "Praint process consulting",
        date: "Dec 2011 - Apr 2012"
    },
    {
        title: "Skoda - Mlada Boleslav, Check Republic",
        description: "Configuration, programing, optimization and production support of Interior Stations of two Top Coat Lines Contractor D¸rr Systems GmbH ( Durr Paint Robots)",
        date: "2012 - 2013"
    },
    {
        title: "FAW / VW - Foshan, Guangdong, China",
        description: "Configuration, programing, optimization and production support of two complete Top Coat Lines Contractor D¸rr Systems GmbH ( Durr Paint Robots)",
        date: "2013 - 2014"
    },
    {
        title: "Hyundai Assam - Izmit, Turkey",
        description: "New paint robots",
        date: "Feb 2014 - May 2014"
    },
    {
        title: "Jaguar / Land Rover - Solihull, UK",
        description: "New exterior painting robots",
        date: "Aug 2014 - Sep 2014"
    },
    {
        title: "SVW - Yizheng, China",
        description: "New UBS robots",
        date: "Oct 2014"
    },
    {
        title: "VW - Chattanooga, USA",
        description: "New model",
        date: "Dec 2014"
    },
    {
        title: "Audi - Ingolstadt, Germany",
        description: "Programing and optimization of FAD station Contractor IAG Industrial Analysis GmbH (ABB Robots)",
        date: "2014"
    },
    {
        title: "SVW / VW Anting - Shanghai, China",
        description: "Configuration, Programing, optimization and production support of two complete Top Coat Lines Contractor D¸rr Systems GmbH ( Durr Paint Robots)",
        date: "2014 - 2015"
    },
    {
        title: "Ficosa",
        description: "Process support",
        date: "Jan 2015 - Jan 2016"
    },
    {
        title: "BMW Brilliance",
        description: "New IPP line",
        date: "Jun 2015 - Jan 2016"
    },
    {
        title: "BMW Teixi - Shenyang, China",
        description: "Configuration, Programing, optimization and production support of one complete Top Coat Line Contractor D¸rr Systems GmbH ( Durr Paint Robots)",
        date: "2015 - 2016"
    },
    {
        title: "VDL NedCar",
        description: "New interior paint stations",
        date: "Sep 2016 - May 2017"
    },
    {
        title: "VW - Mexico",
        description: "New exterior painting stations",
        date: "Sep 2016 - May 2017"
    },
    {
        title: "VW - Bratislava, Slovakia",
        description: "Programing of 3 new types complete line, including object measure and tracking setup in primer, D¸rr Systems GmbH ( Durr Paint Robots)",
        date: "2016"
    },
    {
        title: "VW - Wrzesnia, Poland",
        description: "Programing of 2 new types, Contractor D¸rr Systems GmbH ( Durr Paint Robots)",
        date: "2016"
    },
    {
        title: "Volvo Trucks - Virginia, USA",
        description: "Commissioning and programing of 6 Base Coat Robots, Contractor D¸rr Systems GmbH ( Durr Paint Robots)",
        date: "2016"
    },
    {
        title: "Audi - Győr, Hungary",
        description: false,
        date: "Jul 2017 - Sep 2017"
    },
    {
        title: "OPEL - Gilwice, Poland",
        description: false,
        date: "Oct 2017 - Nov 2017"
    },
    {
        title: "SMP - Alabama, USA",
        description: "Commissioning and Optimization, Full Plastics paint line double sided, Contractor D¸rr Systems GmbH ( Durr Paint Robots)",
        date: "2017"
    },
    {
        title: "SMP - Puebla, Mexico",
        description: "Implementation of new Bumper types for Pre Quality Approval and translation to new USA plant, Contractor D¸rr Systems GmbH ( Durr Paint Robots)",
        date: "2017"
    },
    {
        title: "VW - Wrzesnia, Poland",
        description: "Programing of 2 new Robots underbody wax application, Contractor Eftec (Kuka Wax Robots)",
        date: "2017",
    },
    {
        title: "Volvo Trucks - USA",
        description: false,
        date: "Mar 2018 - Apr 2018"
    },
    {
        title: "BMW - Mexico",
        description: false,
        date: "May 2018 - Present"
    },
    {
        title: "Po Greer - USA",
        description: "Commissioning and setup of complete Plastics line double sided, Programing and Optimizing contract parts and colours, Contractor D¸rr Systems GmbH ( Durr Paint Robots)",
        date: "2018"
    },
    {
        title: "Sygmantec - Lyon, France",
        description: "Measure Robots and Objects for future implementation in USA plant, Contractor D¸rr Systems GmbH ( Durr Paint Robots)",
        date: "2018"
    },
    {
        title: "VW - Bratislava, Slovakia",
        description: "Commissioning and Optimization, 12 Primer Robots, Contractor D¸rr Systems GmbH ( Durr Paint Robots)",
        date: "2018"
    },
    {
        title: "PO Greer - USA",
        description: "Commissioning and setup of complete Plastics line Single sided, Contractor D¸rr Systems GmbH ( Durr Paint Robots)",
        date: "2019"
    }/*,
    
    {
        title: "company - location",
        description: "todo" or false,
        date: "todo" or false,
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
        if (Projects[i].date != false) {
            div_mobile.innerHTML += '<p class="desc">' + Projects[i].date + '</p><br/><br/>';
        }
        if (i % 2 != 0) {
            div_left.innerHTML += '<p class="title">' + Projects[i].title + '</p>';
            if (Projects[i].description != false) {
                div_left.innerHTML += '<p class="desc">' + Projects[i].description + '</p>';
            }
            if (Projects[i].date != false) {
                div_left.innerHTML += '<p class="desc">' + Projects[i].date + '</p><br/><br/>';
            }
        } else {
            div_right.innerHTML += '<p class="title">' + Projects[i].title + '</p>';
            if (Projects[i].description != false) {
                div_right.innerHTML += '<p class="desc">' + Projects[i].description + '</p>';
            }
            if (Projects[i].date != false) {
                div_right.innerHTML += '<p class="desc">' + Projects[i].date + '</p><br/><br/>';
            }
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
            url: 'https://www.urs.pt/php/sendEmail.php',
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
