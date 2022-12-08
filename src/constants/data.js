import images from './images';

const juices = [
  {
    title: 'Apple Juice',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Lemon Soda',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'Special Juice',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Grapes Juice',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Guinness Juice',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Lemon | Peper | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Leaves | Grapes | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Lemon | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'grapes | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | lemon | orange | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];
// eslint-disable-next-line
export default { juices, cocktails, awards };