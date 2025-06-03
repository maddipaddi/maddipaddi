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
    collab:
      "This project is a collaboration between Herman Hylland and myself (Madelen Sletteberg).",
    welcome:
      "At ClicketyCart, we believe shopping should be as quick and seamless as a single click. No delays, no hassle—just instant access to the products you love. With a sleek, turbo-charged checkout process and lightning-fast delivery, we take online shopping to the next level. Whether you're browsing on the go or making last-minute buys, ClicketyCart gets it done faster than you can say 'add to cart.'",
    about:
      "This project is the frontend implementation of a fictional e-commerce store, built on an existing backend API provided by Noroff. The aim is to bring the user interface to life with a fun, retro design and modern React functionality.",
    features: [
      "The Homepage has a list of all the products. There is a look-ahead search bar that filters products when typing in a product name. Clicking on a product takes a user to an individual product page.",
      "The individual product page displays data for a single product. There is an Add to cart button which, upon clicking, adds the product to the cart.",
      "Clicking on the Cart icon will load the Cart page, which will list all of the products as well as a total. The Cart page has a Checkout button. Clicking this Checkout button then goes to a Checkout success page.",
      "The Checkout success page displays a message to the user notifying them that their order was successful.",
    ],
    techStack: ["React", "Tailwind", "Vite"],
    reflection:
      "Here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow!",
    repo: "https://github.com/maddipaddi/frameworks-CA",
    live: "https://clicketycart.netlify.app",
  },
  {
    id: "auctionhouse",
    title: "Auction House",
    icon: AHLogo,
    blurb: "An online auctions app focused on buying and selling luxury items.",
    collab:
      "This project is a collaboration between Veronika Aas and myself (Madelen Sletteberg).",
    welcome:
      "Auction House is an exclusive platform for buying and selling luxury items, specializing in watches, handbags, bags, and jewelry. Our mission is to create a refined, user-friendly experience that matches the elegance of the products featured on our platform.",
    about:
      "This project is the frontend implementation of Auction House, built on an existing backend API provided by Noroff. The API handles user management, auction listings, and bidding functionality, while this frontend will bring the user interface to life with a luxurious, responsive design.",
    features: [
      "Users can register using an email address ending in @stud.noroff.no.",
      "As a registered user, you can update your profile banner, profile picture, and bio.",
      "A registered user can create a listing that includes: title, description, deadline date, category, and images.",
      "As a registered user, you can place bids on other users' listings.",
      "Visitors who are not registered can browse listings but cannot place bids or view profiles.",
      "The Wishlist feature is a proof of concept. It is implemented using local storage since the API does not support this functionality or custom fields.",
    ],
    techStack: ["Vanilla JS", "Tailwind", "Vite"],
    reflection:
      "Here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow - here are all my reflections wow!",
    repo: "https://github.com/maddipaddi/FED2-semester-project-2",
    live: "https://luxauctionhouse.netlify.app",
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
