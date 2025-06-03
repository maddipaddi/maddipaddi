import CCLogo from "../assets/CC-logo.png";
import AHLogo from "../assets/AH-logo-dark.png";
import FHLogo from "../assets/FH-logo-dark.png";
import FHVideo from "../assets/Fireside-Holidaze.mp4";

export const projects = [
  {
    id: "clicketycart",
    title: "ClicketyCart",
    icon: CCLogo,
    blurb: "An e-commerce prototype focused on accessibility and performance.",
    collab: "",
    about:
      "This project was built using React and Tailwind...This project was built using React and TailwindThis project was built using React and TailwindThis project was built using React and Tailwind",
    techStack: ["React", "Tailwind", "Vite"],
    repo: "https://github.com/maddie/clicketycart",
    live: "https://clicketycart.live",
  },
  {
    id: "auctionhouse",
    title: "Auction House",
    icon: AHLogo,
    blurb: "An online auctions app focused on buying and selling luxury items.",
    collab: "",
    about: "This project was built using React and Tailwind...",
    techStack: ["Vanilla JS", "Tailwind", "Vite"],
    repo: "https://github.com/maddie/clicketycart",
    live: "https://clicketycart.live",
  },
  {
    id: "holidaze",
    title: "Holidaze",
    icon: FHLogo,
    video: FHVideo,
    blurb: "An airbnb-esque prototype built around hosting and renting cabins.",
    collab:
      "This project is a collaboration between Veronika Aas, Herman Hylland, and myself (Madelen Sletteberg).",
    welcome:
      "Each getaway is handpicked to deliver the essence of slow living - think crackling fireplaces, cozy interiors, and snow-dusted pines just outside your window. From serene forest hideaways to mountainside retreats, our collection invites you to pause, breathe, and rediscover the beauty of being still. At Holidaze, comfort isn't a feature - it's the entire experience.",
    about:
      "This project is the frontend implementation of Holidaze, built on an existing backend API provided by Noroff. The API handles user management, venue listings, and booking functionality, while this frontend brings the user interface to life with a cozy, responsive design.",
    features: [
      "User registration and login for authenticated access for both customers and venue managers.",
      "Browse and search venues (available to all users).",
      "Create, edit and delete venues, as well as see upcoming bookings on the venues (authenticated users - venue managers).",
      "Book venues and view upcoming bookings (authenticated users - customers).",
      "Profile management, including avatar updates (authenticated users - customers and venue managers).",
    ],
    techStack: ["React", "Tailwind", "Vite"],
    reflection:
      "Here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow!",
    repo: "https://github.com/maddipaddi/Fireside-Holidaze",
    live: "https://fireside-holidaze.netlify.app",
  },
];
