const imgCate1 = require('../assets/on_boarding.png');
const ex1 = require('../assets/ex1.png');

export const videoDefault =
  'https://ytfrjbsqrspqbtthhzgn.supabase.in/storage/v1/object/sign/test/gym.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0ZXN0L2d5bS5tcDQiLCJpYXQiOjE2NDIzODkyODEsImV4cCI6MTk1Nzc0OTI4MX0.nrkYJIBAhQAUCEygtna-PnU4CeYQ1HJ6pvSk-4I3CvI';

export const categories = [
  {
    id: 1,
    name: 'Gym Cardio',
    img: imgCate1,
    exercises: [
      {
        id: 1,
        name: 'Daily Yoga',
        img: ex1,
        time: 15,
        desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        video:
          'https://ytfrjbsqrspqbtthhzgn.supabase.in/storage/v1/object/sign/test/gym.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0ZXN0L2d5bS5tcDQiLCJpYXQiOjE2NDIzODkyODEsImV4cCI6MTk1Nzc0OTI4MX0.nrkYJIBAhQAUCEygtna-PnU4CeYQ1HJ6pvSk-4I3CvI',
      },
      {
        id: 2,
        name: 'Daily Plank',
        img: ex1,
        time: 12,
      },
      {
        id: 3,
        name: 'Daily Yoga',
        img: ex1,
        time: 15,
      },
      {
        id: 4,
        name: 'Daily Plank',
        img: ex1,
        time: 12,
      },
      {
        id: 5,
        name: 'Daily Yoga',
        img: ex1,
        time: 15,
      },
    ],
  },
  {
    id: 2,
    name: 'Gym Training',
    img: imgCate1,
    exercises: [
      {
        id: 1,
        name: 'Daily Yoga',
        img: ex1,
        time: 15,
      },
    ],
  },
  {
    id: 3,
    name: 'Indoor Activities',
    img: imgCate1,
    exercises: [
      {
        id: 1,
        name: 'Daily Yoga',
        img: ex1,
        time: 15,
      },
      {
        id: 2,
        name: 'Daily Yoga',
        img: ex1,
        time: 15,
      },
    ],
  },
];

export const findExercises = id => {
  const cate = categories.find(item => item.id === id);
  return cate.exercises;
};

export const findExByCateId = (exID, cateId) => {
  const exercises = findExercises(cateId);
  return exercises.find(item => item.id === exID);
};

export const exRecomend = [
  {exID: 1, cateId: 1},
  {exID: 1, cateId: 2},
  {exID: 3, cateId: 1},
];
