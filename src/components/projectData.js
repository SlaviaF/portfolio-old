import giphy from "../images/project-images/giphy.png"
import githubUser from "../images/project-images/github_user.png"
import mealSharing from "../images/project-images/meal_sharing_app.png"
import weatherApp from "../images/project-images/weather_app.png"
import simplyNameIt from "../images/project-images/simply_name_it.png"
import wordpay from "../images/project-images/word_pay.png"
const projectsData =[
    {
        id: 1,
        title: "Simply Name it",
        img: simplyNameIt,
        source: "https://github.com/HackYourFuture-CPH/simply-name.it", 
        url:"https://staging-simply-name-it.herokuapp.com/ "
    
    },
    {
    id: 2,
    title: "Meal Sharing App", 
    img: mealSharing, 
    source: "https://github.com/SlaviaF/Meal-Sharing/tree/master/src",
    url:"https://meal-sharing-by-slavia.herokuapp.com/"
},
{
    id: 3,
    title: "Wordpay Project-Landing Page Only", 
    img: wordpay, 
    source: "https://github.com/SlaviaF/wordpay-challenge",
    url:"http://wordpay-challenge.herokuapp.com/"
},
{
    id: 4,
    title: "Giphy Searcher App",
    img: giphy,
    source: "https://github.com/SlaviaF/giphySearcher", 
    url:"https://slaviaf.github.io/giphySearcher/ "

},
{
    id: 5,
    title: "Weather App",
    img: weatherApp,  
    source: "https://github.com/SlaviaF/weather",   
    url:"https://slaviaf.github.io/weather/"
},
{
    id: 6,
    title: "Github Users",
    img: githubUser,
    source: "https://github.com/SlaviaF/hyf-homework/tree/master/react/week4/gitusers"
}
]

export default projectsData;