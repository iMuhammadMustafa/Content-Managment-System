import mongoose from "mongoose";
import User from "./User.js";
import Post from "./Post.js";
import Comment from "./Comment.js";
import Roles from "./Roles.js";

const dbConnection = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connection = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log(`Connected to database on host ${connection.connection.host}`);
  } catch (e) {
    console.log(e);
  }
};
const users = [
  {
    _id: "65f8a8688187038de876c46b",
    username: "john_doe",
    email: "john.doe@example.com",
    password: "password123",
    role: Roles.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "65f8a8688187038de876c46c",
    username: "jane_smith",
    email: "jane.smith@example.com",
    password: "password456",
    role: Roles.User,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "65f8a8688187038de876c46d",
    username: "alex_jackson",
    email: "alex.jackson@example.com",
    password: "password789",
    role: Roles.User,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "65f8a8688187038de876c46e",
    username: "sara_miller",
    email: "sara.miller@example.com",
    password: "passwordABC",
    role: Roles.User,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "65f8a8688187038de876c46f",
    username: "michael_davis",
    email: "michael.davis@example.com",
    password: "passwordXYZ",
    role: Roles.User,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "65f8a8688187038de876c470",
    username: "emily_thomas",
    email: "emily.thomas@example.com",
    password: "passwordDEF",
    role: Roles.User,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "65f8a8688187038de876c471",
    username: "david_wilson",
    email: "david.wilson@example.com",
    password: "passwordGHI",
    role: Roles.User,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "65f8a8688187038de876c472",
    username: "olivia_johnson",
    email: "olivia.johnson@example.com",
    password: "passwordJKL",
    role: Roles.User,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "65f8a8688187038de876c473",
    username: "james_martin",
    email: "james.martin@example.com",
    password: "passwordMNO",
    role: Roles.User,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "65f8a8688187038de876c474",
    username: "isabella_anderson",
    email: "isabella.anderson@example.com",
    password: "passwordPQR",
    role: Roles.User,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const posts = [
  {
    _id: "65f8a89e0eb2e504ad7235e3",
    title: "The Future of Artificial Intelligence",
    content:
      "Artificial intelligence (AI) is rapidly transforming various industries, from healthcare to finance and beyond. As we look ahead, the potential for AI to revolutionize how we live and work is immense. From advanced machine learning algorithms to neural networks, AI technologies are becoming more sophisticated by the day.",
    published: true,
    userId: "65f8a8688187038de876c46b", // John Doe
    category: "Technology",
    tags: ["AI", "Machine Learning"],
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },
  {
    _id: "65f8a89e0eb2e504ad7235e4",
    title: "Exploring the Mysteries of the Universe",
    coverImgUrl: "https://miro.medium.com/v2/da:true/resize:fit:1200/0*WPpM5KWIs0K4gNMd",
    content:
      "The universe has always captivated human curiosity. With advancements in astronomy and space exploration, we continue to uncover new mysteries and phenomena. From black holes to dark matter, the cosmos is a vast playground of wonders waiting to be explored.",
    published: true,
    userId: "65f8a8688187038de876c46c", // Jane Smith
    category: "Science",
    tags: ["Astronomy", "Space Exploration"],
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 5,
  },
  {
    _id: "65f8a89e0eb2e504ad7235e5",
    title: "The Impact of Climate Change on Global Ecosystems",
    coverImgUrl: "https://scx2.b-cdn.net/gfx/news/hires/2012/39-climatechang.jpg",
    content:
      "Climate change is one of the most pressing issues of our time. Its effects on global ecosystems, from melting ice caps to rising sea levels, are undeniable. We must take urgent action to mitigate these impacts and protect our planet for future generations.",
    published: true,
    userId: "65f8a8688187038de876c46d", // Alex Jackson
    category: "Environment",
    tags: ["Climate Change", "Ecosystems"],
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },
  {
    _id: "65f8a89e0eb2e504ad7235e6",
    title: "The Evolution of Renewable Energy Technologies",
    content:
      "Renewable energy technologies have come a long way in recent years. From solar panels to wind turbines and beyond, we are witnessing a shift towards cleaner and more sustainable energy sources. This evolution is crucial for combating climate change and reducing our dependence on fossil fuels.",
    published: true,
    userId: "65f8a8688187038de876c46e", // Sara Miller
    category: "Energy",
    tags: ["Renewable Energy", "Sustainability"],
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 5,
  },
  {
    _id: "65f8a89e0eb2e504ad7235e7",
    title: "The Art of Culinary Creativity",
    content:
      "Culinary creativity knows no bounds. From fusion cuisines to molecular gastronomy, chefs around the world are pushing the boundaries of taste and presentation. Food has become not just sustenance but also an art form that delights the senses.",
    published: true,
    userId: "65f8a8688187038de876c46f", // Michael Davis
    category: "Food",
    tags: ["Cooking", "Culinary Arts"],
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },
  {
    _id: "65f8a89e0eb2e504ad7235e8",
    title: "The Influence of Social Media on Modern Society",
    content:
      "Social media has revolutionized how we connect and communicate. From viral trends to influencer marketing, its impact on modern society is profound. However, it also raises concerns about privacy, mental health, and misinformation.",
    published: true,
    userId: "65f8a8688187038de876c470", // Emily Thomas
    category: "Social Media",
    tags: ["Social Networks", "Digital Marketing"],
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 5,
  },
  {
    _id: "65f8a89e0eb2e504ad7235e9",
    title: "The Beauty of Natural Landscapes",
    content:
      "Natural landscapes offer a serene escape from the hustle and bustle of urban life. From majestic mountains to tranquil lakes, exploring the beauty of nature can be a transformative experience that rejuvenates the mind and soul.",
    published: true,
    userId: "65f8a8688187038de876c471", // David Wilson
    category: "Travel",
    tags: ["Nature", "Adventure"],
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },
  {
    _id: "65f8a89e0eb2e504ad7235ea",
    title: "The Power of Mindfulness and Meditation",
    content:
      "Mindfulness and meditation practices have gained popularity for their ability to reduce stress and promote mental well-being. Incorporating these techniques into daily life can lead to greater clarity, focus, and overall happiness.",
    coverImgUrl: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Future_Of_Artificial_Intelligence.jpg",
    published: true,
    userId: "65f8a8688187038de876c472", // Olivia Johnson
    category: "Wellness",
    tags: ["Mindfulness", "Meditation"],
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 5,
  },
  {
    _id: "65f8a89e0eb2e504ad7235eb",
    title: "The Rise of Electric Vehicles in the Automotive Industry",
    content:
      "Electric vehicles (EVs) are gaining momentum as eco-friendly alternatives to traditional combustion engine cars. With advancements in battery technology and infrastructure, EVs offer a sustainable transportation solution for the future.",
    published: true,
    userId: "65f8a8688187038de876c473", // James Martin
    category: "Automotive",
    tags: ["Electric Vehicles", "Sustainability"],
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },
  {
    _id: "65f8a89e0eb2e504ad7235ec",
    title: "The Art of Photography: Capturing Moments in Time",
    content:
      "Photography is more than just capturing images; it's about freezing moments in time and telling stories through visuals. From landscapes to portraits, photographers have the power to evoke emotions and inspire imagination.",
    published: true,
    userId: "65f8a8688187038de876c474", // Isabella Anderson
    category: "Photography",
    tags: ["Art", "Visual Storytelling"],
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 5,
  },
];
const comments = [
  {
    _id: "65f8a8688187038de876c46b",
    content: "Great insights into the future of AI!",
    userId: "65f8a8688187038de876c46b", // John Doe's comment
    postId: "65f8a89e0eb2e504ad7235e3", // Post: The Future of Artificial Intelligence
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },
  {
    _id: "65f8a8688187038de876c46c",
    content: "Fascinating exploration of the universe!",
    userId: "65f8a8688187038de876c46c", // Jane Smith's comment
    postId: "65f8a89e0eb2e504ad7235e4", // Post: Exploring the Mysteries of the Universe
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 5,
  },
  {
    _id: "65f8a8688187038de876c46d",
    content: "Important topic with well-researched content.",
    userId: "65f8a8688187038de876c46d", // Alex Jackson's comment
    postId: "65f8a89e0eb2e504ad7235e5", // Post: The Impact of Climate Change on Global Ecosystems
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },
  // Add more comments here for each post
  {
    _id: "65f8a8688187038de876c46e",
    content: "I appreciate the focus on renewable energy solutions!",
    userId: "65f8a8688187038de876c46e", // Sara Miller's comment
    postId: "65f8a89e0eb2e504ad7235e6", // Post: The Evolution of Renewable Energy Technologies
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 5,
  },
  {
    _id: "65f8a8688187038de876c46f",
    content: "Intriguing perspective on culinary creativity!",
    userId: "65f8a8688187038de876c46f", // Michael Davis's comment
    postId: "65f8a89e0eb2e504ad7235e7", // Post: The Art of Culinary Creativity
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },
  {
    _id: "65f8a8688187038de876c470",
    content: "Insightful analysis of social media's impact!",
    userId: "65f8a8688187038de876c470", // Emily Thomas's comment
    postId: "65f8a89e0eb2e504ad7235e8", // Post: The Influence of Social Media on Modern Society
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 5,
  },
  {
    _id: "65f8a8688187038de876c471",
    content: "Beautiful portrayal of natural landscapes!",
    userId: "65f8a8688187038de876c471", // David Wilson's comment
    postId: "65f8a89e0eb2e504ad7235e9", // Post: The Beauty of Natural Landscapes
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },
  {
    _id: "65f8a8688187038de876c472",
    content: "Mindfulness and meditation are indeed transformative!",
    userId: "65f8a8688187038de876c472", // Olivia Johnson's comment
    postId: "65f8a89e0eb2e504ad7235ea", // Post: The Power of Mindfulness and Meditation
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 5,
  },
  {
    _id: "65f8a8688187038de876c473",
    content: "Exciting developments in electric vehicles!",
    userId: "65f8a8688187038de876c473", // James Martin's comment
    postId: "65f8a89e0eb2e504ad7235eb", // Post: The Rise of Electric Vehicles in the Automotive Industry
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },
  {
    _id: "65f8a8688187038de876c474",
    content: "Capturing moments through photography is truly an art!",
    userId: "65f8a8688187038de876c474", // Isabella Anderson's comment
    postId: "65f8a89e0eb2e504ad7235ec", // Post: The Art of Photography: Capturing Moments in Time
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 5,
  },

  {
    _id: "65f8a8688187038de876c475",
    content: "A thought-provoking exploration of artificial intelligence!",
    userId: "65f8a8688187038de876c475", // Emma Garcia's comment
    postId: "65f8a89e0eb2e504ad7235ed", // Post: Exploring the Potential of Artificial Intelligence
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },
  {
    _id: "65f8a8688187038de876c476",
    content: "This post provides valuable insights into future technological advancements!",
    userId: "65f8a8688187038de876c476", // Ethan Wilson's comment
    postId: "65f8a89e0eb2e504ad7235ed", // Post: Exploring the Potential of Artificial Intelligence
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 5,
  },
  {
    _id: "65f8a8688187038de876c477",
    content: "A well-researched and informative read!",
    userId: "65f8a8688187038de876c477", // Sophia Martinez's comment
    postId: "65f8a89e0eb2e504ad7235ed", // Post: Exploring the Potential of Artificial Intelligence
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },

  // Comments for post with ID: 65f8a89e0eb2e504ad7235ee
  {
    _id: "65f8a8688187038de876c478",
    content: "This post sheds light on critical environmental issues!",
    userId: "65f8a8688187038de876c478", // Noah Thompson's comment
    postId: "65f8a89e0eb2e504ad7235ee", // Post: Addressing Climate Change: A Global Perspective
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },
  {
    _id: "65f8a8688187038de876c479",
    content: "An inspiring call to action for environmental conservation!",
    userId: "65f8a8688187038de876c479", // Lily Brown's comment
    postId: "65f8a89e0eb2e504ad7235ee", // Post: Addressing Climate Change: A Global Perspective
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 5,
  },
  {
    _id: "65f8a8688187038de876c47a",
    content: "I appreciate the focus on sustainable practices!",
    userId: "65f8a8688187038de876c47a", // Ethan Wilson's comment
    postId: "65f8a89e0eb2e504ad7235ee", // Post: Addressing Climate Change: A Global Perspective
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },

  // Comments for post with ID: 65f8a89e0eb2e504ad7235ef
  {
    _id: "65f8a8688187038de876c47b",
    content: "A comprehensive look into the future of space exploration!",
    userId: "65f8a8688187038de876c47b", // Mia Johnson's comment
    postId: "65f8a89e0eb2e504ad7235ef", // Post: The Future of Space Exploration: New Frontiers Await
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 5,
  },
  {
    _id: "65f8a8688187038de876c47c",
    content: "Exciting possibilities for humanity's journey beyond Earth!",
    userId: "65f8a8688187038de876c47c", // William Davis's comment
    postId: "65f8a89e0eb2e504ad7235ef", // Post: The Future of Space Exploration: New Frontiers Await
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 5,
  },
  {
    _id: "65f8a8688187038de876c47d",
    content: "I'm fascinated by the prospects of interplanetary travel!",
    userId: "65f8a8688187038de876c47d", // Sophia White's comment
    postId: "65f8a89e0eb2e504ad7235ef", // Post: The Future of Space Exploration: New Frontiers Await
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },

  // Comments for post with ID: 65f8a89e0eb2e504ad7235f0
  {
    _id: "65f8a8688187038de876c47e",
    content: "An engaging discussion on the role of technology in healthcare!",
    userId: "65f8a8688187038de876c47e", // Emma Thompson's comment
    postId: "65f8a89e0eb2e504ad7235f0", // Post: Revolutionizing Healthcare: The Impact of Technology
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },
  {
    _id: "65f8a8688187038de876c47f",
    content: "I'm inspired by the innovations in medical science!",
    userId: "65f8a8688187038de876c47f", // Ethan Wilson's comment
    postId: "65f8a89e0eb2e504ad7235f0", // Post: Revolutionizing Healthcare: The Impact of Technology
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 5,
  },
  {
    _id: "65f8a8688187038de876c480",
    content: "This post highlights the importance of digital health solutions!",
    userId: "65f8a8688187038de876c480", // Lily Brown's comment
    postId: "65f8a89e0eb2e504ad7235f0", // Post: Revolutionizing Healthcare: The Impact of Technology
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },

  // Comments for post with ID: 65f8a89e0eb2e504ad7235f1
  {
    _id: "65f8a8688187038de876c481",
    content: "An insightful exploration of cybersecurity challenges!",
    userId: "65f8a8688187038de876c481", // Noah Thompson's comment
    postId: "65f8a89e0eb2e504ad7235f1", // Post: Securing the Digital Realm: Cybersecurity Best Practices
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 5,
  },
  {
    _id: "65f8a8688187038de876c482",
    content: "This post offers valuable tips for protecting digital assets!",
    userId: "65f8a8688187038de876c482", // Lily Brown's comment
    postId: "65f8a89e0eb2e504ad7235f1", // Post: Securing the Digital Realm: Cybersecurity Best Practices
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },
  {
    _id: "65f8a8688187038de876c483",
    content: "An important discussion on the evolving cybersecurity landscape!",
    userId: "65f8a8688187038de876c483", // William Davis's comment
    postId: "65f8a89e0eb2e504ad7235f1", // Post: Securing the Digital Realm: Cybersecurity Best Practices
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },

  // Comments for post with ID: 65f8a89e0eb2e504ad7235f2
  {
    _id: "65f8a8688187038de876c484",
    content: "A fascinating look into the future of robotics!",
    userId: "65f8a8688187038de876c484", // Emma Thompson's comment
    postId: "65f8a89e0eb2e504ad7235f2", // Post: Embracing the Age of Robotics: Innovations and Challenges
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 5,
  },
  {
    _id: "65f8a8688187038de876c485",
    content: "Exciting times ahead for robotics enthusiasts!",
    userId: "65f8a8688187038de876c485", // Noah Thompson's comment
    postId: "65f8a89e0eb2e504ad7235f2", // Post: Embracing the Age of Robotics: Innovations and Challenges
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },
  {
    _id: "65f8a8688187038de876c486",
    content: "I'm intrigued by the potential applications of robotics in various industries!",
    userId: "65f8a8688187038de876c486", // Mia Johnson's comment
    postId: "65f8a89e0eb2e504ad7235f2", // Post: Embracing the Age of Robotics: Innovations and Challenges
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },
];

export const seedData = async () => {
  Comment.insertMany(comments);

  Post.insertMany(posts);

  User.insertMany(users);
};

export default dbConnection;
