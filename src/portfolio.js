/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji'

const illustration = {
  animated: true // set to false to use static SVG
}

const greeting = {
  username: 'Gabriela Nicolau',
  title: 'Gabriela Nicolau',
  subTitle: emoji(
	'A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks. '
  ),
  resumeLink:
	'https://career.io/r/FFGLOSiFB',
  displayGreeting: true // Set false to hide this section, defaults to true
}

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/pgnicolau',
  linkedin: 'https://www.linkedin.com/in/gabriela-nicolau-602191b3/',
  gmail: "p.gabriela.nicolau@gmail.com",
  instagram: 'https://www.instagram.com/pau_nicolau/',
  display: true // Set true to display this section, defaults to false
}

// Skills Section

const skillsSection = {
  title: 'About',
  subTitle: 'My journey into software development started at a Point of Sale (POS) company, where I gained invaluable experience in building customer-facing products. Over the course of 5+ years, I have honed my craft in writing high-quality, well-tested code that is both maintainable and clean. I have a solid foundation in Javascript and TypeScript, with hands-on experience in React.My enthusiasm for frontend development extends beyond writing code. I am committed to the entire product development lifecycle, from idea conception to design and through to implementation. I thrive in fast-paced environments, striking a thoughtful balance between delivering code swiftly and maintaining high quality by adhering to best practices.',
  skills: [
	emoji(
	  '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
	),
	emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
	emoji(
	  '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
	)
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
	{
	  skillName: 'html-5',
	  fontAwesomeClassname: 'fab fa-html5'
	},
	{
	  skillName: 'css3',
	  fontAwesomeClassname: 'fab fa-css3-alt'
	},
	{
	  skillName: 'sass',
	  fontAwesomeClassname: 'fab fa-sass'
	},
	{
	  skillName: 'JavaScript',
	  fontAwesomeClassname: 'fab fa-js'
	},
	{
	  skillName: 'reactjs',
	  fontAwesomeClassname: 'fab fa-react'
	},
	{
	  skillName: 'nodejs',
	  fontAwesomeClassname: 'fab fa-node'
	},
	{
	  skillName: 'npm',
	  fontAwesomeClassname: 'fab fa-npm'
	},
	{
	  skillName: 'sql-database',
	  fontAwesomeClassname: 'fas fa-database'
	},
	{
	  skillName: 'firebase',
	  fontAwesomeClassname: 'fas fa-fire'
	},
	// {
	//   skillName: "swift",
	//   fontAwesomeClassname: "fab fa-swift"
	// },
  ],
  display: true // Set false to hide this section, defaults to true
}

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
	{
	  schoolName: 'City Varsity College',
	  logo: require('./assets/images/cv.jpeg'),
	  subHeader: 'New Media Development',
	  duration: 'February 2017 - November 2018',
	  desc: 'Received training in: HTML, AMP HTML, CSS3, PHP, Javascript, MYSQL, Angular JS, DOM, Node JS , Jquery, Responsive web design, Wordpress, AJAX.',
	  // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
	},
	{
	  schoolName: 'Queen\'s University',
	  logo: require('./assets/images/queens-university-8-logo-png-transparent.png'),
	  subHeader: 'Bachelor of Philosophy',
	  duration: 'September 2010 - April 2015',
	  desc:
		'Strengthened my critical thinking, problem solving skills and communication skills. \n These skills  provided me with a strong foundation for learning programming languages and communicating with clients.',
	  // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
	}
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
	{
	  Stack: 'Frontend / Design', //Insert stack or technology you have experience in
	  progressPercentage: '90%' //Insert relative proficiency in percentage
	},
	{
	  Stack: 'Backend',
	  progressPercentage: '70%'
	},
	{
	  Stack: 'Programming',
	  progressPercentage: '90%'
	}
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
}

// Work experience section
// TODO: Fill Out
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
	{
	  role: 'Front End Developer',
	  company: 'FP Digital',
	  date: 'Apr 2021 - Present',
	  desc:
		'Lead the development of interactive and user-friendly web applications using React and Next.js. - Collaborated closely with UI/UX designers to implement responsive and intuitive user interfaces.',
	  skills: ['React', 'Next' , 'SCSS', 'Javascript', 'PHP']
	},
	{
	  role: 'Front End Developer',
	  company: 'Unavine',
	  date: '2020 - 2021',
	  desc:
		'Developed interactive views for the Coaching Portal utiliVing React, Next.js, and Firebase as the backend service. The Portal facilitated scheduling appointments with coaches and enabled video calls via Twilio (WebRTC).',
	  skills: ['React', 'Next' , 'SCSS', 'Javascript']
	},
	{
	  role: 'QA Automation',
	  company: 'Outbox',
	  date: '2018 – 2019',
	  desc:
		'Contributed to an Agile team automating ticketing software products.Automated sprint stories based on acceptance criteria. Proficient in qit, qitHub, and continuous integration.',
	  skills: ['React', 'Next' , 'SCSS', 'Javascript']
	},
	{
	  role: 'Full Stack Software Developer',
	  company: 'CloudOne.mobi',
	  date: '2018 – 2019',
	  desc:
		'Designed and developed an updated admin panel for TallOrder POS system using React, Redux and Typescript.',
	  skills: ['React', 'Next' , 'SCSS', 'Javascript', 'PHP']
	}
  ]
}

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'pgnicolau', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
}

// Some big projects you have worked on

const bigProjects = {
  title: '',
  subtitle: '',
  projects: [
	{
	  image: require('./assets/images/kk.png'),
	  projectName: 'Der Grüne Brief',
	  projectDesc: 'Internal app platform for tax counselling company in Austria.',
	  footerLink: [
		{
		  name: 'Visit Website',
		  url: 'https://gruenerbrief.at/'
		}
		//  you can add extra buttons here.
	  ]
	},
	{
	  image: require('./assets/images/kk2.jpeg'),
	  projectName: 'Kanzlei Kleiner Karriere',
	  projectDesc: '',
	  footerLink: [
		{
		  name: 'Visit Website',
		  url: 'https://karriere.kanzleikleiner.at/'
		}
	  ]
	},
	{
	  image: require('./assets/images/unavine.jpeg'),
	  projectName: 'Unavine',
	  projectDesc: 'Video only dating & coaching platform',
	  footerLink: [
		{
		  name: 'Visit Website',
		  url: 'https://unavine.com/'
		}
	  ]
	},
  ],
  display: true // Set false to hide this section, defaults to true
}

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
	'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!',

  achievementsCards: [
	{
	  title: 'Slack clone',
	  subtitle: 'Developed slack clone for learning',
	  image: require('./assets/images/slack.png'),
	  footerLink: [
		{
		  name: 'Project',
		  url:
			''
		}
	  ]
	},
	{
	  title: 'Shopify API Challenge',
	  subtitle: '',
	  image: require('./assets/images/shopify.webp'),
	  footerLink: [
		{
		  name: 'Shopify code-in challenge',
		  url:
			''
		}
	  ]
	},
	{
	  title: 'Whatsapp Mern Project',
	  subtitle: '',
	  image: require('./assets/images/whatsapp.png'),
	  footerLink: [
		{
		  name: 'Code-in challenge',
		  url:
			''
		}
	  ]
	},
	// {
	//     title: "Google Code-In Finalist",
	//     subtitle:
	//         "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
	//     image: require("./assets/images/codeInLogo.webp"),
	//     footerLink: [
	//         {
	//             name: "Certification",
	//             url:
	//                 ""
	//         },
	//         {
	//             name: "Award Letter",
	//             url:
	//                 ""
	//         },
	//         {
	//             name: "Google Code-in Blog",
	//             url:
	//                 ""
	//         }
	//     ]
	// },
	// {
	//     title: "Google Assistant Action",
	//     subtitle:
	//         "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
	//     image: require("./assets/images/googleAssistantLogo.webp"),
	//     footerLink: [
	//         {
	//             name: "View Google Assistant Action",
	//             url:
	//                 ""
	//         }
	//     ]
	// },
	//
	// {
	//     title: "PWA Web App Developer",
	//     subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
	//     image: require("./assets/images/pwaLogo.webp"),
	//     footerLink: [
	//         {name: "Certification", url: ""},
	//         {
	//             name: "Final Project",
	//             url: ""
	//         }
	//     ]
	// }
  ],
  display: false // Set false to hide this section, defaults to true
}

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
	'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
	{
	  url:
		'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
	  title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
	  description:
		'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?'
	},
	{
	  url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
	  title: 'Why REACT is The Best?',
	  description:
		'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.'
	}
  ],
  display: false // Set false to hide this section, defaults to true
}

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
	''
  ),

  talks: [
	{
	  title: '',
	  subtitle: '',
	  slides_url: '',
	  event_url: ''
	}
  ],
  display: false // Set false to hide this section, defaults to true
}

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',
  // Please Provide with Your Podcast embeded Link
  podcast: [
	''
  ],
  display: false // Set false to hide this section, defaults to true
}

const contactInfo = {
  title: 'Contact Me',
  subtitle:
	'Discuss a project or just want to say hi? My Inbox is open for all.',
  // number: "(323) 768 0674",
  email_address: 'p.gabriela.nicolau[at]gmail.com',
  display: false
}

// Twitter Section
const twitterDetails = {
  userName: '', //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
}

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
}
