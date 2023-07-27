const TempratureField = document.querySelector(".weather1");
const CityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

let target = "Noida";

const FetchData= async (target) =>
{
    try {
        let url = `https://api.weatherapi.com/v1/current.json?key=af159aeac7da40de98152658231207&q=${target}`;

    const response =  await fetch(url);
    const data = await response.json();

    console.log(data);
    

//    destructuring

    const 
    {
     current:{temp_c,condition:{text,icon}}, location:{name , localtime}


    } =data;
    
    UpdateDom(temp_c,name,localtime,icon,text)
    } 
    
    catch (error) 
    {
        alert("Location Not found");
    }


};

function UpdateDom(temp,city,time,emoji,text)
{
   TempratureField.innerText = temp;
   CityField.innerText = city;

   const exactTime = time.split(" ")[1];
   const exactDate = time.split(" ")[0];
   const exactDay = new Date(exactDate).getDay();
   
   

   emojiField.src = emoji;
   weatherField.innerText = text;
   dateField.innerText = `${exactTime}-${getdayfullname(exactDay)} ${exactDate} `;
}

FetchData(target);

function getdayfullname(num) {
    switch (num) {
        case 0: 
            return "Sunday";
            break;

            case 1: 
            return "Monday";
            break;
            
            case 2: 
            return "Tuesday";
            break;

            case 3: 
            return "Wednesday";
            break;

            case 4: 
            return "Thrusday";
            break;

            case 5: 
            return "Friday";
            break;

            case 6: 
            return "Saturday";
            break;
    
        default:  "Don't Know!"
            break;
    }
    
}


const search =(e)=>
{
 e.preventDefault();

 target = searchField.value ;
 console.log(target);
 FetchData(target);

  
}

form.addEventListener("submit",search)
