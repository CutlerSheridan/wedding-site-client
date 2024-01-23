const _Event = (
  title,
  address,
  day,
  date,
  time,
  dressCode,
  description,
  needsRsvp,
  metaData
) => {
  return {
    title,
    address,
    day,
    date,
    time,
    dressCode,
    description,
    needsRsvp,
    metaData,
  };
};

const EVENTS = [
  _Event(
    'Welcome Drinks',
    ["Kincaid's", '500 Fishermans Wharf', 'Redondo Beach, CA 90277'],
    'Friday',
    'January 26, 2024',
    '7:30pm',
    'Business casual',
    [
      'A casual mixer (cash bar) for anyone in town who feels like mingling.',
      'This is not a dinner, but food is available at this location.',
    ],
    true,
    ['2024-01-26', '2024-01-26', '19:30', '22:00']
  ),
  _Event(
    'Wedding Voyage',
    [
      'Redondo Beach Marina',
      '140 International Boardwalk',
      'Redondo Beach, CA 90277',
    ],
    'Saturday',
    'January 27, 2024',
    '3:45pm# – 7:00pm',
    'Black tie mandatory.  Titanic-era influence encouraged.',
    [
      "The ceremony will take place on a boat, which will board at 3:45pm.  Don't be late or we will leave without you!",
      'LA gets chilly at night.  Dress accordingly.',
      'We recommend walking or Ubering, but validated parking is available at 137 N. Harbor Drive, Redondo Beach.',
      "Dinner will be served after we disembark. There will be hors d'œuvres and cocktails on the boat, but eat a snack beforehand if you need to.",
    ],
    true,
    ['2024-01-27', '2024-01-27', '15:30', '19:00']
  ),
  _Event(
    'The Real Party',
    ["Naja's Place", '154 International Boardwalk', 'Redondo Beach, CA 90277'],
    'Saturday',
    'January 27, 2024',
    '7:00pm – 2:00am',
    'Black tie',
    [
      "Naja's Place has wine and an extensive selection of beer on tap, but no liquor, so get your fill on the boat.",
      'Dinner will be served from the connected smash burger grill, which has a variety of options (including vegetarian).',
    ],
    false,
    ['2024-01-27', '2024-01-28', '19:00', '02:00']
  ),
  _Event(
    'Brunch',
    ['Redondo Beach', '100-G Fishermans Wharf', 'Redondo Beach, CA 90277'],
    'Sunday',
    'January 28, 2024',
    '12:00pm',
    'Casual',
    [
      'Picnic brunch on the beach for anyone still in town.',
      'This address takes you to the restaurant next to the beach so it should be easy to find from there.',
      "We will have breakfast burritos from local favorite Phanny's, juice, coffee, fruit, and donuts",
    ],
    true,
    ['2024-01-28', '2024-01-28', '12:00', '14:00']
  ),
];

export default EVENTS;
