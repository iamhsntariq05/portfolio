
import remmiImage from "./assets/images/portfolio/remi.png";
import quffahImage from "./assets/images/portfolio/quffah.jpg"
import propertyImage from "./assets/images/portfolio/PropertyManagement.jpg"
import flexiWork from "./assets/images/portfolio/Flexiwork.png"
import EDM from "./assets/images/portfolio/edm2.PNG"
import DiscordGaming from "./assets/images/portfolio/discordGaming.png"


const logotext = "Hasan";
const meta = {
    title: "Hasan",
    description: "I’m Hasan Tariq MERN stack devloper,currently working in Islamabad",
};

const introdata = {
    title: "I’m Hasan Tariq",
    animated: {
        first: "Mern Stack Developer",
        second: "",
        third: "DevOps Engineer",
    },
    talk:{
        about : "Talks about Blockchain!",
    },
    description: "Passionate Full Stack Developer",
    your_img_url: "src/assets/image/portfolio.png",
};
const dataabout = [{
    title: "Bachelor's Degree",
    describe: "Comsats University Islamabad",
    date : "2018 - 2022"
},
{
    title: "Cloudsekho challange",
    describe: "Completed Season 3,4 ",
    date : "2021"
}
];
const worktimeline = [
    {
        jobtitle: "Sr Backend Developer",
        where: "Xenex Media, Brisbane",
        date: "2022-Present",
    },
    {
        jobtitle: "Mern Stack developer",
        where: "Ideal Innovative Solutions",
        date: "2021-2022",
        projects : ["TechBar", "EDM"]
    },
    {
        jobtitle: "Node Js developer",
        where: "Turing",
        date: "2022-2023",
    },
];

const skills = [
    {
        name: "TypeScript",
        value: 90,
    },
    {
        name: "NestJs",
        value: 80,
    },
    {
        name: "NextJs",
        value: 70,
    },
    {
        name: "Node",
        value:  90,
    },
    {
        name: "Flutter",
        value: 70,
    },
    {
        name: "PostgreSQL",
        value: 80,
    },
    {
        name: "Python",
        value: 70,
    },
];

const services = [{
        title: "Website Development",
        description: "Helps businesses and individuals design, build, and maintain websites, which include website design, programming and coding, content creation, server and hosting setup, website optimization, and ongoing maintenance and support",
    },
    {
        title: "Android Apps Development",
        description: "Provides businesses and individuals with the tools and expertise necessary to create high-quality, user-friendly apps that run on Android-powered devices. The goal is to create an app that provides a seamless user experience, is easy to use, and meets the needs and requirements of the target audience.",
    },
    {
        title: "Website Designing",
        description: "Helps businesses and individuals for the creation of a website's layout, graphics, color scheme, and overall aesthetic, as well as its functionality and navigation. The goal of a web design service is to create a website that effectively communicates the client's brand and message, and provides a positive user experience for visitors.",
    },
];

const dataportfolio = [{
        img: remmiImage,
        title : "Remmi",
        desctiption: "Brisbane's trusted software for hassle-free property management.",
        link: "https://portal-upgrade.remmi.com.au/",
    },
    {
        img: quffahImage,
        title : "Quffah",
        desctiption: "POS system designed for smart business management",
        // link: "#",
    },
    {
        img: propertyImage,
        title :"Property Management Software",
        desctiption: "A powerful property management software for seamless rental and tenant management",
        link: "https://staging-proporb.vercel.app/",
    },
    {
        img:EDM,
        title : "EDM",
        desctiption: "EDM is an advanced E Distribution System that streamlines POS operations with seamless transactions and efficient inventory management.",
        // link: "#",
    },
    {
        img: flexiWork,
        title : "FlexiWork",
        desctiption: "FlexiWork is a premier on-demand hiring platform connecting businesses with vetted physical workers",
        link: "https://apps.apple.com/pk/app/flexiwork/id6503910755",  
    },
    {
        img: DiscordGaming,
        title : "DueL Bet",
        desctiption: "DueL Bet is a Discord-integrated gaming platform where players compete in exciting tournaments, and win exclusive rewards.",
        // link: "#",
    },
];

const contactConfig = {
    MY_EMAIL: "HassanTariq5544@gmail.com",
    YOUR_FONE: "+92317-7892469",
    description: "",
    YOUR_SERVICE_ID: "service_yeuxob9",
    YOUR_TEMPLATE_ID: "template_0d5911m",   
    YOUR_USER_ID: "zrKv051AOw88ek2wv",
};

const socialprofils = {
    github: "https://github.com/iamhsntariq05",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com/in/hsn-tariq/",
    twitter: "https://twitter.com/iamhsntariq",
    youtube: "https://www.youtube.com/@hassantariq2459",
    gitlab: "https://gitlab.4iisolutions.com/hassan",
    stackoverflow : "https://stackoverflow.com/users/12553511/iamhsntariq"
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
