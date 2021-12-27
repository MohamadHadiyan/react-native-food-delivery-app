import {Restaraunt} from './TypeScript';
const FOOD1 = require('../assets/images/foods/1.png');
const FOOD2 = require('../assets/images/foods/2.png');
const FOOD3 = require('../assets/images/foods/3.png');
const FOOD4 = require('../assets/images/foods/4.png');
const FOOD5 = require('../assets/images/foods/5.png');
const FOOD6 = require('../assets/images/foods/6.png');
const FOOD7 = require('../assets/images/foods/7.png');
const FOOD8 = require('../assets/images/foods/8.png');
const FOOD9 = require('../assets/images/foods/9.png');
const FOOD10 = require('../assets/images/foods/10.png');
const FOOD11 = require('../assets/images/foods/11.png');
const FOOD12 = require('../assets/images/foods/12.png');

export const restaraunts: Restaraunt[] = [
  {
    _id: '0',
    name: 'torta loca',
    category: 'mexican restarunt',
    logo: 'https://i.pinimg.com/564x/03/b6/45/03b645a468a8691b1381fd3c7656c8e5.jpg',
    address: 'derech menachem begin 144 telaviv',
    tel: '035142722',
    position: {lag: '10', lat: '12'},
    rating: 4,
    distance: 5,
    isOpen: true,
    verified: true,
    slogan: '',
    workHours: {from: '9', to: '12'},
    managerName: 'avare mind',
    chef: 'solor batch',
    visitThisMonth: 414,
    reviews: [],
    images: [
      'https://i.pinimg.com/564x/d7/34/5e/d7345ed26dc802630e40e01c5f36cc14.jpg',
    ],
    tags: ['Chicken', 'Bowls'],
    socials: [],
    website: '',
    menu: [
      {
        _id: '0',
        name: 'Chicken and Cauliflower “Rice” Bowls',
        type: 'food',
        price: '24',
        images: [FOOD7],
        category: 'food',
        calories: 80,
        weight: 400,
        compositions: [
          'Meat',
          'Avocado',
          'Garlic cloves',
          'tsp Garlic powder',
          'Green onions',
        ],
        desc: 'Gluten freeChicken and Cauliflower “Rice” Bowls',
        rating: 4,
      },
      {
        _id: '1',
        name: 'Chicken Fajita Kebabs - Cooking Classy',
        price: '32',
        type: 'food',
        images: [FOOD1, FOOD4],
        category: 'food',
        compositions: [],
        desc: "Chicken pieces are soaked in a bright, citrusy, well season marinade then threaded onto skewers along with fresh bell peppers and onions. Then they're grilled over hot flames to give them that fire…",
        rating: 4,
        calories: 80,
        weight: 400,
      },
      {
        _id: '2',
        name: 'chees chilly fried',
        price: '29',
        type: 'food',
        images: [FOOD6],
        category: 'food',
        compositions: [],
        desc: "citrusy, well season marinade then threaded onto skewers along with fresh bell peppers and onions. Then they're grilled over hot flames to give them that fire…",
        rating: 4,
        calories: 80,
        weight: 400,
      },
    ],
  },
  {
    _id: '1',
    name: 'saone rhone',
    category: 'fast food restarunt',
    logo: 'https://i.pinimg.com/564x/df/de/e5/dfdee51eec0f3d4d6840cf56567e4166.jpg',
    address: 'Yehuda Halevi 44 Tel Aviv',
    tel: '035145722',
    position: {lag: '10', lat: '11'},
    rating: 4,
    distance: 5,
    isOpen: true,
    verified: true,
    slogan: '',
    workHours: {from: '9', to: '12'},
    managerName: 'avare mind',
    chef: 'solor batch',

    visitThisMonth: 414,
    reviews: [],
    images: [
      'https://i.pinimg.com/564x/a7/59/67/a75967c6d7097c0e2960a42e2dd5afcd.jpg',
    ],
    tags: [],
    socials: [],
    website: '',
    menu: [
      {
        _id: '0',
        name: 'Flat lay with italian pizza containing pizza, flat, and lay',
        price: '12',
        type: 'food',
        images: [FOOD2],
        category: 'pizza',
        compositions: [],
        desc: 'Share feedback, ask a question or give a high five',
        rating: 4,
        calories: 80,
        weight: 400,
      },
      {
        _id: '1',
        name: 'Pizza Background Material',
        price: '10',
        type: 'food',
        images: [FOOD3],
        category: 'pizza',
        compositions: [],
        desc: 'More than 3 million PNG and graphics resource at Pngtree. Find the best inspiration you need for your project.',
        rating: 4,
        calories: 80,
        weight: 400,
      },
    ],
  },
  {
    _id: '2',
    name: 'under the tree',
    category: 'cafe',
    logo: 'https://i.pinimg.com/564x/f8/f1/a3/f8f1a30b4107f679e62f76aa483b32db.jpg',
    address: 'Ben Yehuda Street 202 Tel Aviv',
    tel: '035142722',
    position: {lag: '10', lat: '12'},
    rating: 4,
    distance: 5,
    isOpen: true,
    verified: true,
    slogan: 'We look in depth to see how coffee can affect out health',
    workHours: {from: '9', to: '12'},
    managerName: 'avare mind',
    chef: 'solor batch',

    visitThisMonth: 414,
    reviews: [],
    images: [
      'https://i.pinimg.com/564x/56/8e/d4/568ed475b58947ad8e10f80f6c83b1c9.jpg',
      'https://i.pinimg.com/564x/ca/dc/8c/cadc8c014cf037cdb9f97059fbfa8380.jpg',
    ],
    tags: [],
    socials: [],
    website: '',
    menu: [
      {
        _id: '0',
        name: 'torky caffee',
        price: '5',
        type: 'drink',
        images: [FOOD10, FOOD12],
        category: 'caffee',
        compositions: [],
        desc: '',
        rating: 4,
        calories: 80,
        weight: 400,
      },
      {
        _id: '1',
        name: 'bitter caffee',
        price: '6',
        type: 'drink',
        images: [FOOD11],
        category: 'caffee',
        compositions: [],
        desc: '',
        rating: 4,
        calories: 80,
        weight: 400,
      },
    ],
  },
  {
    _id: '3',
    name: 'lila',
    category: 'pizza',
    logo: 'https://i.pinimg.com/564x/80/44/48/8044480876233e8fc8d20a601482a56b.jpg',
    address: 'Merkhavya Street 4 Tel Aviv',
    tel: '035142722',
    position: {lag: '10', lat: '12'},
    rating: 4,
    distance: 5,
    isOpen: true,
    verified: true,
    slogan: '',
    workHours: {from: '9', to: '12'},
    managerName: 'avare mind',
    chef: 'solor batch',
    visitThisMonth: 414,
    reviews: [],
    images: [
      'https://i.pinimg.com/564x/08/6a/e9/086ae9bd5dde14da91fa477706420a52.jpg',
    ],
    tags: [],
    socials: [],
    website: '',
    menu: [
      {
        _id: '0',
        name: 'Cast Iron Pizza',
        price: '10',
        type: 'food',
        images: [FOOD9],
        category: 'pizza',
        compositions: ['olives', 'Meat'],
        desc: 'This cast iron pizza with spicy Italian sausage is prepared with an easy, no-knead pizza dough and is a scrumptious offering for pizza night!',
        rating: 4,
        calories: 80,
        weight: 400,
      },
      {
        _id: '0',
        name: 'BBQ Chicken Pizza',
        price: '8',
        type: 'food',
        images: [FOOD8, FOOD5],
        category: 'pizza',
        compositions: ['Chicken Meat', ' fresh leaves'],
        desc: "Cheesy BBQ Chicken Pizza recipe - Slathered with BBQ sauce and sprinkled with tons of mozzarella and gouda, you'll want to make this pizza again and again!",
        rating: 4,
        calories: 80,
        weight: 400,
      },
    ],
  },
];