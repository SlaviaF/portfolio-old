
const skillsData =[
    {
    id: 1,
    img: "https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/html5-512.png", 
    skill: "HTML"
},
{
    id: 2,
    img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png", 
    skill: "CSS"
},
{
    id: 3,
    img: "https://raw.githubusercontent.com/krishaayjois21/krishaayjois21/master/assets/javascript.png", 
    skill: "JAVASCRIPT"
},
{
    id: 4,
    img: "http://talenthometraining.in/wp-content/uploads/2019/02/Icons-SQL-01-1024x1024.png",
    skill: "MY SQL"
},
{
    id: 5,
    img: "data:image/png;base64,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", 
    skill: "NODE"
},
{
    id: 6,
    img: "https://yogalayout.com/static/reactnative.4e03ea5d.png", 
    skill: "REACT"
},
{
    id: 7,
    img: "https://icon-library.com/images/bootstrap-icon-png/bootstrap-icon-png-28.jpg", 
    skill: "BOOTSTRAP"
},
]

export default skillsData;

