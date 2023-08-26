const _Event = (
  title,
  address,
  date,
  time,
  description,
  needsRsvp,
  metaData
) => {
  return {
    title,
    address,
    date,
    time,
    description,
    needsRsvp,
    metaData,
  };
};

const EVENTS = [
  _Event(
    'Welcome Drinks',
    ['TBD', 'Redondo Beach, CA'],
    'Friday, January 26th, 2024',
    '8:00pm',
    ['A casual mixer for anyone already in town who feels like mingling.'],
    true,
    ['2024-01-26', '2024-01-26', '20:00', '22:00']
  ),
  _Event(
    'Boat Wedding',
    [
      'Redondo Beach Marina',
      '140 International Boardwalk',
      'Redondo Beach, CA 90277',
    ],
    'Saturday, January 27th, 2024',
    '3:30pm# - 7:00pm',
    [
      "The ceremony will take place on a boat, which will depart at 3:45pm.  Don't be late or we'll depart without you!",
      {
        preString: 'Black tie mandatory.  If you need any help, here is ',
        midString: 'a guide',
        postString: ' on what "black tie" means.',
        elementType: 'link',
        href: 'www.google.com',
      },
      'Titanic-era influence encouraged',
      'LA gets chilly at night.  Dress accordingly.',
      'We recommend walking or Ubering, but a parking deck is available nearby at 200 N. Pacific Avenue.',
      "There will be hors d'oeuvres and cocktails on the boat, but eat a snack beforehand.  Dinner isn't until afterwards.",
    ],
    true,
    ['2024-01-27', '2024-01-28', '15:30', '19:00']
  ),
  _Event(
    'Party time!',
    ["Naja's Place", '154 International Blvd.', 'Redondo Beach, CA 90277'],
    'Saturday, January 27th, 2024',
    '7:00pm - 2:00am?',
    [
      'Once we disembark, everyone will walk over to this cool dive bar.',
      "Naja's Place has wine and a HUGE selection of beer on tap, but no liquor, so get your fill on the boat.",
      'Everyone will get a wristband to order dinner from the connected smash burger grill, which has a variety of options (including vegetarian).',
    ],
    false,
    ['2024-01-27', '2024-01-28', '19:00', '02:00']
  ),
  _Event(
    'Brunch',
    ['TBD', 'Redondo Beach, CA'],
    'Sunday, January 28th, 2024',
    '1:00pm',
    [
      'A chill brunch in a park for anyone still in town.',
      "We will have some basic stuff like bagels, cream cheese, fruit, orange juice, cheese, butter, etc.  If you'd prefer, feel free to get food elsewhere and bring it here!",
    ],
    true,
    ['2024-01-28', '2024-01-28', '13:00', '15:00']
  ),
];

export default EVENTS;
