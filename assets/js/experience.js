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
    place: "Pamela Seld Landscape Architecture",
    time: "(May - Jun, 2023)",
    desp: "
      <li>Advanced architectural drawing skills through hands-on experience in contributing to and interpreting technical drawings.</li>
      <li>Gained practical experience in on-site project management, emphasizing the ability to translate conceptual ideas into actionable plans within the constraints of a dynamic environment.</li>",
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
    title: "M.A and Lila Self Leadership Academy(Present)",
    cardImage: "assets/images/SIMPLE_outline_clear.jpg",
    description:
      "'The M. A. and Lila Self Leadership Academy Full-Ride Scholarship is awarded to individuals who exude extraordinary leadership potential.'",
  },
  {
    title: "Private Pilot Training",
    cardImage: "assets/images/IMG_0625.jpeg",
    description:
      "I'm a Private Pilot-I'm constantly honing my skills, and striving to achieve a higher order of precision and hone my decision making skills.",
  },
   {
    title: "IIT Motorsports",
    cardImage: "assets/images/SAE_International_logo.svg.png",
    description:
      "As I return to campus I'm getting active with IIT motorsports - a cross-disciplinary team where students can convert knowledge into practical experience via the design of a race car.",
  },
    {
    title: "IIT Student Government",
    cardImage: "assets/images/experience-page/download.jpg",
    description:
      "I'm a Senator for the IIT Student Government Association.  It's my goal to ensure the needs of all +8,000 students are met, and IIT becomes a driving force in global change.",
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
    title: "Empowerment, Leadership, Mentorship Program",
    subtitle: "Mentor",
    image: "assets/images/elm_icon_mentorship-01.jpg",
    desp: "I would be responsible for utilizing a battery of tools acquired in my academic and professional journey to mentor members of the IIT community and motivate them as they reach toward new goals.",
    href: "https://www.iit.edu/elm",
  },
  {
    title: "Just Roots",
    subtitle: "Cultivator",
    image: "assets/images/IMG_1111.jpeg",
    desp: "Just Roots is an urban farm focused on developing methods to provide fresh and healthy produce to the local Bronzeville community.",
    href: "https://justrootschicago.org",
  },
  {
    title: "EAA Kidventure",
    subtitle: "Volunteer",
    image: "assets/images/KtuvE6gA-1024x682.jpeg",
    desp: "Kidventure is a workshop event within the broader EAA Airventure umbrella, where children interact with aviation in new and inspirational ways.",
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
