// Edit this file to update your portfolio content.

export type Developer = {
  name: string;
  firstName: string;
  role: string;
  shortRole: string;
  email: string;
  github: string;
  linkedin: string;
  headline: string;
  intro: string;
  about: string[];
  availability: string;
};

export const developer: Developer = {
  name: "Muzamil Khan",
  firstName: "Muzamil",
  role: "Full Stack / MERN Stack Developer",
  shortRole: "Full Stack Developer",
  email: "muzamil.kse231@gmail.com",
  github: "https://github.com/MuzamilKhan197",
  // Update this field if your LinkedIn profile address changes.
  linkedin: "https://www.linkedin.com/in/MuzamilKhan197/",
  // Newlines control the editorial heading; the final line receives the accent.
  headline: "Thoughtful code.\nMeaningful\nexperiences.",
  intro:
    "I'm Muzamil, a full stack developer building practical web applications with modern JavaScript. From the interface to the database, I care about making every part work beautifully together.",
  about: [
    "I'm an early-career developer drawn to the whole picture: how an interface feels, how a backend behaves, and how data brings it all together. I work with the MERN stack and learn by building applications that solve practical problems.",
    "My projects span a social web application and an HR management system with an AI assistant grounded in real application data. Each one is an opportunity to ask better questions, work through the details, and become a more thoughtful engineer.",
  ],
  availability: "Open to opportunities",
};
