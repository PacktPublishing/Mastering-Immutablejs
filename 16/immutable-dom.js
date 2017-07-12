const {
  List,
  Map,
  Seq
} = Immutable; // eslint-disable-line no-undef

const App = (initialState, sideEffects) => {
  let state = initialState;

  state.forEach((v, k) => {
    List()
      .concat(sideEffects.get(k))
      .forEach(sideEffect => sideEffect(state.get(k)));
  });

  return (updater) => {
    const newState = updater(state);

    newState.forEach((v, k) => {
      if (v !== state.get(k)) {
        List()
          .concat(sideEffects.get(k))
          .forEach(sideEffect => sideEffect(newState.get(k)));
      }
    });

    state = newState;
  };
};

const removeChildren = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const some = (...predicates) => {
  const predicateSeq = Seq(predicates);
  return (...args) => predicateSeq.some(p => p(...args));
};

const every = (...predicates) => {
  const predicateSeq = Seq(predicates);
  return (...args) => predicateSeq.every(p => p(...args));
};

const filter = ({
  query,
  title,
  date,
  director,
  rating
}) => every(
  some(
    () => query === undefined,
    () => query === '',
    every(
      () => title,
      v => v.get('title').includes(query)
    ),
    every(
      () => date,
      v => v.get('date').includes(query)
    ),
    every(
      () => director,
      v => v.get('director').includes(query)
    )
  ),
  v => v.get('rating') >= (+rating)
);

const app = App(
  Map.of(
    'results', Map.of(
      'episodes', List.of(
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
      ),
      'query', '',
      'title', true,
      'director', false,
      'date', false,
      'rating', 7
    ),
    'create', Map.of(
      'title', '',
      'director', '',
      'date', '',
      'rating', 0
    )
  ),
  Map.of(
    'results', Seq.of(
      (results) => {
        removeChildren(
          document
            .getElementById('results')
            .querySelector('ul')
        );

        results
          .get('episodes')
          .toSeq()
          .filter(filter(results.toJS()))
          .forEach((v) => {
            const { content } = document
              .getElementById('episode-template');

            content
              .querySelector('h4')
              .textContent = v.get('title');
            content
              .querySelector('p:nth-of-type(1)')
              .childNodes[1]
              .nodeValue = v.get('date');
            content
              .querySelector('p:nth-of-type(2)')
              .childNodes[1]
              .nodeValue = v.get('director');
            content
              .querySelector('p:nth-of-type(3)')
              .childNodes[1]
              .nodeValue = v.get('rating');

            document
              .getElementById('results')
              .querySelector('ul')
              .appendChild(document.importNode(content, true));
          });
      },
      (results) => {
        const count = results
          .get('episodes')
          .toSeq()
          .filter(filter(results.toJS()))
          .count();

        document
          .getElementById('results')
          .querySelector('h3')
          .textContent = document
            .getElementById('results')
            .querySelector('h3')
            .textContent
            .replace(/\d*/, count);
      },
      (results) => {
        document
          .querySelector('input[name="rating"]')
          .parentNode
          .childNodes[0]
          .nodeValue = results.get('rating');
      }
    ),
    'create', Seq.of(
      (create) => {
        document
          .getElementById('new-episode-rating')
          .value = create.get('rating');
        document
          .querySelector('form[name="create-episode"] input[name="title"]')
          .value = create.get('title');
        document
          .querySelector('form[name="create-episode"] input[name="director"]')
          .value = create.get('director');
        document
          .querySelector('form[name="create-episode"] input[name="date"]')
          .value = create.get('date');
        document
          .querySelector('output[for="new-episode-rating"]')
          .value = create.get('rating');
      }
    )
  )
);

document
  .querySelector('header input[type="search"]')
  .addEventListener('input', e => app(state => state.setIn(
    ['results', 'query'],
    e.target.value
  )));

document
  .querySelector('li input[name="title"]')
  .addEventListener('change', e => app(state => state.setIn(
    ['results', 'title'],
    e.target.checked
  )));

document
  .querySelector('li input[name="director"]')
  .addEventListener('change', e => app(state => state.setIn(
    ['results', 'director'],
    e.target.checked
  )));

document
  .querySelector('li input[name="date"]')
  .addEventListener('change', e => app(state => state.setIn(
    ['results', 'date'],
    e.target.checked
  )));

document
  .getElementById('filter-rating')
  .addEventListener('change', e => app(state => state.setIn(
    ['results', 'rating'],
    e.target.value
  )));

document
  .querySelector('form[name="create-episode"] input[name="title"]')
  .addEventListener('input', e => app(state => state.setIn(
    ['create', 'title'],
    e.target.value
  )));

document
  .querySelector('form[name="create-episode"] input[name="director"]')
  .addEventListener('input', e => app(state => state.setIn(
    ['create', 'director'],
    e.target.value
  )));

document
  .querySelector('form[name="create-episode"] input[name="date"]')
  .addEventListener('input', e => app(state => state.setIn(
    ['create', 'date'],
    e.target.value
  )));

document
  .getElementById('new-episode-rating')
  .addEventListener('change', e => app(state => state.setIn(
    ['create', 'rating'],
    e.target.value
  )));

document
  .querySelector('form[name="create-episode"]')
  .addEventListener('submit', (e) => {
    e.preventDefault();
    app(state => state
      .updateIn(
        ['results', 'episodes'],
        episodes => episodes.push(
          Map(state.get('create').toJS())
        )
      )
      .setIn(['create', 'title'], '')
      .setIn(['create', 'director'], '')
      .setIn(['create', 'date'], '')
    );
  });
