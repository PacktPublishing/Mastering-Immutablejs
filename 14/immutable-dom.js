const {
  List,
  Map,
  Seq
} = Immutable; // eslint-disable-line no-undef

const episodes = List.of(
  Map.of(
    'title', 'The National Anthem',
    'date', 'December 4 2011',
    'director', 'Otto Bathurst',
    'rating', 8.0
  ),
  Map.of(
    'title', 'Fifteen Million Merits',
    'date', 'December 11 2011',
    'director', 'Euros Lyn',
    'rating', 8.3
  ),
  Map.of(
    'title', 'The Entire History of You',
    'date', 'December 18 2011',
    'director', 'Brian Welsh',
    'rating', 8.7
  ),
  Map.of(
    'title', 'Be Right Back',
    'date', 'February 1 2013',
    'director', 'Owen Harris',
    'rating', 8.2
  ),
  Map.of(
    'title', 'White Bear',
    'date', 'February 18 2013',
    'director', 'Carl Tibbetts',
    'rating', 8.2
  ),
  Map.of(
    'title', 'The Waldo Moment',
    'date', 'February 25 2013',
    'director', 'Bryn Higgins',
    'rating', 7.0
  ),
  Map.of(
    'title', 'White Christmas',
    'date', 'December 16 2013',
    'director', 'Carl Tibbetts',
    'rating', 9.1
  ),
  Map.of(
    'title', 'Nosedive',
    'date', 'October 21 2016',
    'director', 'Joe Wright',
    'rating', 8.3
  ),
  Map.of(
    'title', 'Playtest',
    'date', 'October 21 2016',
    'director', 'Dan Trachtenberg',
    'rating', 8.2
  ),
  Map.of(
    'title', 'Shut Up and Dance',
    'date', 'October 21 2016',
    'director', 'James Watkins',
    'rating', 8.5
  ),
  Map.of(
    'title', 'San Junipero',
    'date', 'October 21 2016',
    'director', 'Owen Harris',
    'rating', 8.8
  ),
  Map.of(
    'title', 'Men Against Fire',
    'date', 'October 21 2016',
    'director', 'Jakob Verbruggen',
    'rating', 7.9
  ),
  Map.of(
    'title', 'Hated in the Nation',
    'date', 'October 21 2016',
    'director', 'James Hawes',
    'rating', 8.7
  )
);

const results = document.getElementById('results');
const title = document.querySelector('input[name="title"]');
const date = document.querySelector('input[name="date"]');
const director = document.querySelector('input[name="director"]');
const rating = document.querySelector('input[name="rating"]');
const search = document.querySelector('input[type="search"]');
const episodeTemplate = document.getElementById('episode-template');

const behavior = (behaviors, defaultBehavior = () => {}) =>
  (action, ...args) =>
    behaviors.get(action, defaultBehavior)(...args);

const some = (...predicates) => {
  const predicateSeq = Seq(predicates);
  return (...args) => predicateSeq.some(p => p(...args));
};

const every = (...predicates) => {
  const predicateSeq = Seq(predicates);
  return (...args) => predicateSeq.every(p => p(...args));
};

const everyThen = (func, ...predicates) =>
  (...args) => behavior(Map.of(
    true, func
  ))(every(...predicates)(...args), ...args);

const filter = query => every(
  some(
    () => query === undefined,
    () => query === '',
    every(
      () => title.checked,
      v => v.get('title').includes(query)
    ),
    every(
      () => date.checked,
      v => v.get('date').includes(query)
    ),
    every(
      () => director.checked,
      v => v.get('director').includes(query)
    )
  ),
  v => v.get('rating') >= (+rating.value)
);

const render = (query) => {
  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }

  episodes
    .filter(filter(query))
    .forEach((v) => {
      const { content } = episodeTemplate;
      const episodeTitle = content.querySelector('h4');
      const episodeDate = content.querySelector('p:nth-of-type(1)');
      const episodeDirector = content.querySelector('p:nth-of-type(2)');
      const episodeRating = content.querySelector('p:nth-of-type(3)');

      episodeTitle.textContent = v.get('title');
      episodeDate.childNodes[1].nodeValue = v.get('date');
      episodeDirector.childNodes[1].nodeValue = v.get('director');
      episodeRating.childNodes[1].nodeValue = v.get('rating');
      results.appendChild(document.importNode(content, true));
    });
};

document.addEventListener('input', everyThen(
  e => render(e.target.value),
  e => e.target instanceof HTMLInputElement,
  e => e.target.type === 'search'
));

document.addEventListener('change', everyThen(
  () => render(search.value),
  e => e.target instanceof HTMLInputElement,
  e => [
    'title',
    'date',
    'director',
    'rating'
  ].includes(e.target.name)
));

document.addEventListener('change', everyThen(
  (e) => {
    e.target.parentNode.childNodes[0].nodeValue = e.target.value;
  },
  e => e.target instanceof HTMLInputElement,
  e => e.target.name === 'rating'
));

render();
