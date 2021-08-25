
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
    img: "https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png",
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

