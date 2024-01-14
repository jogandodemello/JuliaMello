AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Assistant Admissions Counselor",
    cardImage: "assets/images/experience-page/Illinois Tech.png",
    place: "Illinois Institute of Technology (IIT)",
    time: "(Jan 2024 - Present)",
     desp: "<li>Contributed to the strategic development of the new office layout, showcasing an understanding of spatial design and functionality.</li><li>Orchestrated successful events, demonstrating organizational and logistical skills crucial in managing architectural project timelines and client engagements.</li>",
  },
  {
  title: "Landscape Architecture Intern",
  cardImage: "assets/images/experience-page/Landsacape DesiArch.jpg",
  place: "Pamela Self Landscape Architecture",
  time: "(May - Jun, 2023)",
  desp: "<li>Advanced architectural drawing skills through hands-on experience in contributing to and interpreting technical drawings.</li><li>Gained practical experience with on-site project management, emphasizing the ability to translate conceptual ideas into actionable plans within the constraints of a dynamic environment.</li>",
},
  {
    title: "Architectural Intern",
    cardImage: "assets/images/experience-page/LegacyScreenshot.png",
    place: "Odebretch Realizacoes Imobiliarias e Empreendimentos",
    time: "(May - Jul, 2022)",
    desp: "<li>Applied technical expertise to produce accurate and visually compelling drawings, contributing to the overall success of architectural design projects.</li><li>Coordinated with architects, designers, and external parties to refine architectural drawings and marketing materials, ensuring alignment with project goals.</li>",
  },
  {
    title: "Hawk Ambassador",
    cardImage: "assets/images/experience-page/Illinois Tech.png",
    place: "Illinois Institute of Technology",
    time: "(Jan 2022 - December 2023)",
    desp: "<li>Engaged directly with prospective students as a Hawk Ambassador, offering personalized campus tours and embodying the school's values.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};


document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Activity Name",
    cardImage: "assets/images/SIMPLE_outline_clear.jpg",
    description:
      "Lorem Ipsom Dolor....",
  },
  {
    title: "Activity Name",
    cardImage: "assets/images/IMG_0625.jpeg",
    description:
      "Lorem Ipsom Dolor...",
  },
   {
    title: "Acticity Name",
    cardImage: "assets/images/SAE_International_logo.svg.png",
    description:
      "Lorem Ipsom Dolor....",
  },
    {
    title: "Activity Name",
    cardImage: "assets/images/experience-page/download.jpg",
    description:
      "Lorem Ipsom Dolor....",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Volunteer Activity",
    subtitle: "role name",
    image: "assets/images/elm_icon_mentorship-01.jpg",
    desp: "Description",
    href: "https://www.iit.edu/elm",
  },
  {
    title: "Volunteer Activity",
    subtitle: "Role",
    image: "assets/images/IMG_1111.jpeg",
    desp: "Description",
    href: "https://justrootschicago.org",
  },
  {
    title: "Volunteer Activity",
    subtitle: "Volunteer",
    image: "assets/images/KtuvE6gA-1024x682.jpeg",
    desp: "Description",
    href: "https://www.eaa.org/airventure/features-and-attractions/kidventure",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
