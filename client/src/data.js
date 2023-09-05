// id
// username
// password
// gender
// isAdmin
export const users = [
  { username: "user", password: "user", isAdmin: false },
  { username: "user2", password: "user2", isAdmin: false },
  { username: "user3", password: "user3", isAdmin: false },
  { username: "user4", password: "user4", isAdmin: false },
  { username: "user5", password: "user5", isAdmin: false },
  { username: "admin", password: "admin", isAdmin: true },
  { username: "admin2", password: "admin2", isAdmin: true },
  { username: "admin3", password: "admin3", isAdmin: true },
  { username: "admin4", password: "admin4", isAdmin: true },
  { username: "admin5", password: "admin5", isAdmin: true },

];

// id
// name (floor # - room #)
// location (building name)
// gender
// amenities
export const washrooms = [
  {
    id: 0,
    name: "Floor 4 - 4309",
    location: "Bahen Centre",
    amenities: "Baby Changing Station",
    gender: "Women",
  },
  {
    id: 1,
    name: "Floor 4 - 4309",
    location: "Bahen Centre",
    amenities: "Baby Changing Station",
    gender: "Men",
  },
  {
    id: 2,
    name: "Floor 5 - 5100",
    location: "Myhal Centre",
    amenities: "",
    gender: "Women",
  },
  {
    id: 3,
    name: "Floor 5 - 5100",
    location: "Myhal Centre",
    amenities: "",
    gender: "Men",
  },
  {
    id: 4,
    name: "Floor 2 - 2139",
    location: "Hart House Building",
    amenities: "Baby Changing Station",
    gender: "Men",
  },
  {
    id: 5,
    name: "Floor 2 - 2139",
    location: "Hart House Building",
    amenities: "Baby Changing Station",
    gender: "Women",
  },
  {
    id: 6,
    name: "Main floor - 1012",
    location: "Varsity Centre",
    amenities: "",
    gender: "Gender Neutral",
  },
  {
    id: 7,
    name: "Main floor - 1005",
    location: "Convocation Hall",
    amenities: "Accessible Stalls",
    gender: "Women",
  },
  {
    id: 8,
    name: "Main floor - 1005",
    location: "Convocation Hall",
    amenities: "Accessible Stalls",
    gender: "Men",
  },
];

// id
// washroom
// username
// update time
// title
// content
export const reports = [
  {
    id: 0,
    washroom: washrooms[0],
    username: "user",
    updateTime: "11/02/2021 11:34:22",
    title: "Warning!",
    reportContent: "Big accident in the second stall.",
  },
  {
    id: 1,
    washroom: washrooms[1],
    username: "user2",
    updateTime: "10/31/2021 18:32:00",
    title: "URGENT",
    reportContent: "I'm in the farthest stall and need some toilet paper ASAP.",
  },
  {
    id: 2,
    washroom: washrooms[1],
    updateTime: "10/05/2021 21:11:11",
    username: "user3",
    title: "Spill",
    reportContent: "Wet floor -- be careful.",
  },
  {
    id: 3,
    washroom: washrooms[2],
    updateTime: "10/01/2021 04:44:12",
    username: "user4",
    title: "Lost phone",
    reportContent: "I lost a black iPhone in the men's stall. Please call 911.",
  },
  {
    id: 4,
    washroom: washrooms[3],
    updateTime: "10/01/2021 04:44:12",
    username: "user5",
    title: "Toilet Seat Broken",
    reportContent: "Third stall from the left.",
  },
  {
    id: 5,
    washroom: washrooms[3],
    updateTime: "10/01/2021 04:44:12",
    username: "user5",
    title: "Cool decoration",
    reportContent: "Bathroom has nice halloween decor. Come check it out!",
  },
  {
    id: 6,
    washroom: washrooms[4],
    updateTime: "10/01/2021 04:44:12",
    username: "user5",
    title: "Almost Passed Out",
    reportContent: "It smells like something died in here. Send help.",
  },
  {
    id: 7,
    washroom: washrooms[4],
    updateTime: "10/01/2021 04:44:12",
    username: "user",
    title: "Renovations Completed",
    reportContent: "The new tiles look nice.",
  },
  {
    id: 8,
    washroom: washrooms[4],
    updateTime: "10/01/2021 04:44:12",
    username: "user",
    title: "Leaky Sink",
    reportContent: "Can somebody fix it please? It's wasting a lot of water."
  },
];

// id
// washroom
// cleanliness
// functionality
// privacy
// comments
// likes
// dislikes
export const reviews = [
  {
    id: 0,
    washroom: washrooms[0],
    date: "11/02/2021 11:34:22",
    cleanliness: 2,
    functionality: 3,
    privacy: 1,
    reviewContent: "So stinky. Completely disgusting.",
    likes: 5,
    dislikes: 2,
  },
  {
    id: 1,
    washroom: washrooms[0],
    date: "11/02/2021 11:34:22",
    cleanliness: 5,
    functionality: 5,
    privacy: 5,
    reviewContent: "Amazing. My favourite place to poop in.",
    likes: 5,
    dislikes: 2,
  },
  {
    id: 2,
    washroom: washrooms[1],
    date: "11/02/2021 11:34:22",
    cleanliness: 4,
    functionality: 4,
    privacy: 1,
    reviewContent: "Nice and clean but there's always a lot of people.",
    likes: 5,
    dislikes: 2,
  },
  {
    id: 3,
    washroom: washrooms[1],
    date: "11/02/2021 11:34:22",
    cleanliness: 5,
    functionality: 5,
    privacy: 5,
    reviewContent: "One of cleanest toilets I've ever seen. I could eat a meal off of it.",
    likes: 5,
    dislikes: 2,
  },
  {
    id: 4,
    washroom: washrooms[2],
    date: "11/02/2021 11:34:22",
    cleanliness: 3,
    functionality: 2,
    privacy: 1,
    reviewContent: "The toilet seats are very narrow. You'd need a small behind to fit on them.",
    likes: 5,
    dislikes: 2,
  },
  {
    id: 5,
    washroom: washrooms[2],
    date: "11/02/2021 11:34:22",
    cleanliness: 4,
    functionality: 3,
    privacy: 1,
    reviewContent: "Cheap plastic toilet handles. Not a premium experience. Plus the flush is really weak.",
    likes: 5,
    dislikes: 2,
  },
  {
    id: 6,
    washroom: washrooms[3],
    date: "11/02/2021 11:34:22",
    cleanliness: 3,
    functionality: 1,
    privacy: 1,
    reviewContent: "Decent place to go when you need to go.",
    likes: 5,
    dislikes: 2,
  },
  {
    id: 7,
    washroom: washrooms[3],
    date: "11/02/2021 11:34:22",
    cleanliness: 1,
    functionality: 4,
    privacy: 4,
    reviewContent: "Good soundproofing. No one can hear a thing.",
    likes: 5,
    dislikes: 2,
  },
  {
    id: 8,
    washroom: washrooms[4],
    date: "11/02/2021 11:34:22",
    cleanliness: 3,
    functionality: 3,
    privacy: 3,
    reviewContent: "A little stinky.",
    likes: 5,
    dislikes: 2,
  },
  {
    id: 9,
    washroom: washrooms[4],
    date: "11/02/2021 11:34:22",
    cleanliness: 5,
    functionality: 5,
    privacy: 5,
    reviewContent: "This is one of the most exquisite bathrooms I have ever been to. The ventilation is great and there's always toilet paper.",
    likes: 5,
    dislikes: 2,
  },
  {
    id: 10,
    washroom: washrooms[5],
    date: "11/02/2021 11:34:22",
    cleanliness: 5,
    functionality: 5,
    privacy: 5,
    reviewContent: "Decent washroom",
    likes: 5,
    dislikes: 2,
  },
];
