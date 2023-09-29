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
    ['TBD', 'Redondo Beach, CA'],
    'Friday',
    'January 26, 2024',
    '8:00pm',
    'Business casual',
    ['A casual mixer for anyone in town who feels like mingling.'],
    true,
    ['2024-01-26', '2024-01-26', '20:00', '23:00']
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
    '3:40pm# - 7:00pm',
    'Black tie mandatory.  Titanic-era influence encouraged.',
    [
      "The ceremony will take place on a boat, which will depart at 4:00pm.  Don't be late or we'll leave without you!",
      'LA gets chilly at night.  Dress accordingly.',
      'We recommend walking or Ubering, but a parking deck is available nearby at 200 N. Pacific Avenue.',
      "There will be hors d'œuvres and cocktails on the boat, but eat a snack beforehand.  Dinner isn't until afterwards.",
    ],
    true,
    ['2024-01-27', '2024-01-28', '15:30', '19:00']
  ),
  _Event(
    'The Real Party',
    ["Naja's Place", '154 International Blvd.', 'Redondo Beach, CA 90277'],
    'Saturday',
    'January 27, 2024',
    '7:00pm - 2:00am',
    'Black tie',
    [
      "Naja's Place has wine and a HUGE selection of beer on tap, but no liquor, so get your fill on the boat.",
      'Everyone will get a wristband to order dinner from the connected smash burger grill, which has a variety of options (including vegetarian).',
    ],
    false,
    ['2024-01-27', '2024-01-28', '19:00', '02:00']
  ),
  _Event(
    'Brunch',
    ['TBD', 'Redondo Beach, CA'],
    'Sunday',
    'January 28, 2024',
    '1:00pm',
    'Casual',
    [
      'A chill brunch in a park for anyone still in town.',
      "We will have some basic stuff like bagels, cream cheese, fruit, orange juice, cheese, butter, etc.  If you'd prefer, feel free to get food elsewhere and bring it here!",
    ],
    true,
    ['2024-01-28', '2024-01-28', '13:00', '15:00']
  ),
];

export default EVENTS;
