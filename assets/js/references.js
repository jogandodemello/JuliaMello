/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
  {
    sl1: 1,
   name1 : "John Doe",
        designation1 : "Position, Company", 
        image1: "assets/images/dp_male.svg",
        message1 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus erat eget neque imperdiet, nec tempus velit dapibus. Etiam sed justo ultrices, scelerisque neque id, imperdiet quam.",
        
           sl2:2,
        name2 : "John Doe",
        designation2 : "Position, Company", 
        image2: "assets/images/dp_male.svg",
        message2 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus erat eget neque imperdiet, nec tempus velit dapibus. Etiam sed justo ultrices, scelerisque neque id, imperdiet quam.",
        
        
    },

    {
        sl1:3,
        name1 : "Jane Doe",
        designation1 : "Position, Company",
        image1 : "https://github.com/Mattnej21/WebsiteMain/blob/master/assets/images/dp_female.svg",
        message1 : "Suspendisse massa erat, blandit sagittis quam eget, tempus venenatis nisl. Donec sed aliquam ipsum. Cras mauris leo, elementum et rutrum eu, condimentum eu dui.",
        

        sl2:4,
        name2 : "Jane Doe",
        designation2 : "Position, Company",
        image2 : "https://github.com/Mattnej21/WebsiteMain/blob/master/assets/images/dp_female.svg",
        message2 : "Quisque sit amet vestibulum lectus. Duis condimentum velit sit amet mollis fermentum.",
  },
];

AOS.init();
const fillData = () => {
  let output = "";

  references.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,
      absbox_for_linkedin1,
      sl2,
      image2,
      name2,
      designation2,
      message2,
      absbox_for_linkedin2,
    }) =>
      (output += `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image2}" class="rImg1"></td>
                    </tr>`)
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
