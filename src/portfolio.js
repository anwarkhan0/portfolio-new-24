/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Syed Anwar's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Syed Anwar Portfolio",
    type: "website",
    url: "http://anwarsyed.com/",
  },
};

//Home Page
const greeting = {
  title: "Syed Anwar",
  logo_name: "SyedAnwar",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/anwarkhan0",
  githubProfile: "https://github.com/anwarkhan0",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/anwarkhan0",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/syed-anwar-4017831a4/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Whatsapp",
    link: "mailto:ianwarsyed@gmail.com",
    fontAwesomeIcon: "fa-whatsapp", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#25D366", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/ianwarsyedkhan",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },

    {
      title: "Data Analytics & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Swat",
      subtitle: "B.S. in Computer Science",
      logo_path: "",
      alt_name: "USwat",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied Computer Science subjects like DS, Algorithms, DBMS, OS, CA, AI, Computer architecture etc.",
        "⚡ Apart from this, I have done courses on Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://uswat.edu.pk/",
    },
    // {
    //   title: "Al-nafi Academy",
    //   subtitle: "Diploma in Cloud Security",
    //   logo_path: "",
    //   alt_name: "Al-nafi Academy",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Cyber Security and Cloud Computing which correspond to Linux OS, Cyber Security, Cloud Computing etc.",
    //     "⚡ At this Academy, I have also done training labs. I have worked on RHEL 6,7. File Systems, User Management, Permissions, Shell scripting, Network Configuration, Server Setup and Configuration, Monitoring Tasks, Trouble Shooting, Optimizaiton, AWS Services like EC2, S3, EBS, VPC, ELB, RDS.",
    //   ],
    //   website_link: "https://alnafi.com/",
    // },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Foundation: Data, Data, Everywhere",
      subtitle: "- Google Career Certificates",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/TGB7N9HDLW56",
      alt_name: "Coursera",
      color_code: "#F5EDED",
    },
    {
      title: "Ask Questions to Make Data-Driven Decisions",
      subtitle: "- Google Career Certificates",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5R7LFAVQUBYZ",
      alt_name: "Coursera",
      color_code: "#F5EDED",
    },
    {
      title: "Prepare Data for Exploration",
      subtitle: "- Google Career Certificates",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6XM9UBXT9GMP",
      alt_name: "Coursera",
      color_code: "#F5EDED",
    },
    {
      title: "Analyze Data to Answer Questions",
      subtitle: "- Google Career Certificates",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/Z5EYNCE237WB",
      alt_name: "Coursera",
      color_code: "#F5EDED",
    },
    {
      title: "Data Analysis with R Programming",
      subtitle: "- Google Career Certificates",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/8N429P4H2SHD",
      alt_name: "Coursera",
      color_code: "#F5EDED",
    },
    {
      title: "Certified Information System Security Professional (CISSP)",
      subtitle: "- Muhammad Faisal",
      logo_path: "alnafi-logo.jpg",
      certificate_link: "https://portal.alnafi.com/certificates/flv1z8h6nq",
      alt_name: "Al-nafi",
      color_code: "#FFFFFF",
    },
    {
      title: "Python Gamma",
      subtitle: "- Muhammad Faisal",
      logo_path: "alnafi-logo.jpg",
      certificate_link: "https://portal.alnafi.com/certificates/juvkrlwhmi",
      alt_name: "Al-nafi",
      color_code: "#FFFFFF",
    },
    {
      title: "Linux",
      subtitle: "- Muhammad Faisal",
      logo_path: "alnafi-logo.jpg",
      certificate_link: "https://portal.alnafi.com/certificates/mzadl2cpcq",
      alt_name: "Al-nafi",
      color_code: "#FFFFFF",
    },
    {
      title: "Cyber Security Essentials Revisit after CISSP",
      subtitle: "- Muhammad Faisal",
      logo_path: "alnafi-logo.jpg",
      certificate_link: "https://portal.alnafi.com/certificates/dpdmbbkgug",
      alt_name: "Al-nafi",
      color_code: "#FFFFFF",
    },
    {
      title: "TypeScript Essential Training",
      subtitle: "- Jess Chadwick",
      logo_path: "linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/7bb40136a9abe4a65e1e8d5a0b1e4e47551aaba8d684f6775c56500d2f8cb922",
      alt_name: "LinkedIn",
      color_code: "#3572EF",
    },
    {
      title: "React: Building Progressive Web Apps (PWAs)",
      subtitle: "- Eve Porcello",
      logo_path: "linkedin-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/9d1a09944b87ea7eedf431b1477b2a4b70152a32e1a51d8601fba2b7140de9e8",
      alt_name: "LinkedIn",
      color_code: "#3572EF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Web Developer",
          company: "Pixelium Technologies pvt Ltd.",
          company_url: "https://www.thepixelium.com/",
          logo_path: "pixelium-logo.png",
          duration: "June 2021 - Present",
          location: "Swat, KPK, PK",
          description:
            "As a seasoned freelancer or remote developer, I have successfully managed a diverse range of web development projects. My expertise includes API development, deployments, server maintenance, AWS hosting, and creating dynamic services using Node.js and JavaScript. Additionally, I have extensive experience building responsive and interactive front-end applications with React.js. My role encompasses the full development lifecycle, from initial planning and design to implementation, testing, and ongoing support, ensuring robust and scalable solutions tailored to clients' needs.",
          color: "#000000",
        },
        {
          title: "Dynamics CRM Developer",
          company: "Skysoftconnections pvt ltd.",
          company_url: "https://skysoftconnections.com/",
          logo_path: "sky-logo.png",
          duration: "Aug 2022 - Jan 2023",
          location: "Islamabad, PK",
          description:
            "As a Junior Dynamics CRM Developer in a remote contract role, I was responsible for assisting in the customization, configuration, and maintenance of Microsoft Dynamics CRM systems. My tasks included developing and implementing solutions to improve business processes, supporting data integration efforts, and troubleshooting issues. Working closely with senior developers and project managers, I contribute to the successful delivery of CRM projects, ensuring the platform meets the specific needs of clients. This role allowed me to build on my foundational skills in Dynamics CRM while gaining valuable experience in a collaborative and flexible remote work environment.",
          color: "#0879bf",
        },
        {
          title: "Freelance IT Technician and Developer",
          company: "Freelance",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2020 - Present",
          location: "Swat, KPK, PK",
          description:
            "As a versatile freelancer, I specialize in a wide range of development and technical support services. My expertise spans web development, software development, and software solutions for various tech devices. I create dynamic websites, robust software applications, and tailor-made solutions to meet clients' specific needs. Additionally, I offer comprehensive troubleshooting and repair services for computers and other tech devices, ensuring optimal performance and resolving any issues efficiently. My commitment to delivering high-quality, reliable solutions makes me a valuable resource for businesses and individuals seeking professional technical support and development services.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineering Job Simulation",
          company: "Forage",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "forage-logo.png",
          duration: "Dec, 2021",
          location: "San Francisco, USA",
          description:
            "Interface with a stock price data feed, Use JPMorgan Chase & Co. frameworks and tools,Display data visually for traders.",
          color: "#000000",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_anwar.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Dynamics CRM, Cloud and Web Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.d.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Dadahara, Kabal, Swat, PK 19060",
    locality: "San Jose",
    country: "PK",
    region: "Swat",
    postalCode: "19060",
    streetAddress: "dadahara",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/Q6t2e2sK4z3zD4uE6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
