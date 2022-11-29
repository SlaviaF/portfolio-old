
const skillsData =[
    {
    id: 1,
    img: "https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw=w240-h480-rw", 
    skill: "HTML"
},
{
    id: 2,
    img: "https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo", 
    skill: "CSS"
},
{
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png?20141107110902", 
    skill: "JAVASCRIPT"
},
{
    id: 4,
    img: "https://pbs.twimg.com/profile_images/1121395911849062400/7exmJEg4_400x400.png",
    skill: "Svelte"
},
{
    id: 5,
    img: "https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg", 
    skill: "Tailwind CSS"
},
{
    id: 6,
    img: "https://res.cloudinary.com/teepublic/image/private/s--3G28Z3Jo--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_42332c,e_outline:35/co_42332c,e_outline:inner_fill:35/co_ffffff,e_outline:35/co_ffffff,e_outline:inner_fill:35/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1589988736/production/designs/10390341_0.jpg", 
    skill: "Git "
},
{
    id: 7,
    img: "data:image/png;base64,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", 
    skill: "Hasura GraphQL"
},
{
    id: 8,
    img: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png", 
    skill: "ReactJS"
}
]

export default skillsData;

