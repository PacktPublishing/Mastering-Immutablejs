'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-for */
const {
  List,
  Map,
  Seq
} = Immutable; // eslint-disable-line no-undef

const React = window.React;

const episodes = List.of(Map.of('title', 'The National Anthem', 'date', 'December 4 2011', 'director', 'Otto Bathurst', 'rating', 8.0), Map.of('title', 'Fifteen Million Merits', 'date', 'December 11 2011', 'director', 'Euros Lyn', 'rating', 8.3), Map.of('title', 'The Entire History of You', 'date', 'December 18 2011', 'director', 'Brian Welsh', 'rating', 8.7), Map.of('title', 'Be Right Back', 'date', 'February 1 2013', 'director', 'Owen Harris', 'rating', 8.2), Map.of('title', 'White Bear', 'date', 'February 18 2013', 'director', 'Carl Tibbetts', 'rating', 8.2), Map.of('title', 'The Waldo Moment', 'date', 'February 25 2013', 'director', 'Bryn Higgins', 'rating', 7.0), Map.of('title', 'White Christmas', 'date', 'December 16 2013', 'director', 'Carl Tibbetts', 'rating', 9.1), Map.of('title', 'Nosedive', 'date', 'October 21 2016', 'director', 'Joe Wright', 'rating', 8.3), Map.of('title', 'Playtest', 'date', 'October 21 2016', 'director', 'Dan Trachtenberg', 'rating', 8.2), Map.of('title', 'Shut Up and Dance', 'date', 'October 21 2016', 'director', 'James Watkins', 'rating', 8.5), Map.of('title', 'San Junipero', 'date', 'October 21 2016', 'director', 'Owen Harris', 'rating', 8.8), Map.of('title', 'Men Against Fire', 'date', 'October 21 2016', 'director', 'Jakob Verbruggen', 'rating', 7.9), Map.of('title', 'Hated in the Nation', 'date', 'October 21 2016', 'director', 'James Hawes', 'rating', 8.7));

/*const results = document.getElementById('results');
const title = document.querySelector('input[name="title"]');
const date = document.querySelector('input[name="date"]');
const director = document.querySelector('input[name="director"]');
const rating = document.querySelector('input[name="rating"]');
const search = document.querySelector('input[type="search"]');
const episodeTemplate = document.getElementById('episode-template');*/

const behavior = (behaviors, defaultBehavior = () => {}) => (action, ...args) => behaviors.get(action, defaultBehavior)(...args);

const some = (...predicates) => {
  const predicateSeq = Seq(predicates);
  return (...args) => predicateSeq.some(p => p(...args));
};

const every = (...predicates) => {
  const predicateSeq = Seq(predicates);
  return (...args) => predicateSeq.every(p => p(...args));
};

const everyThen = (func, ...predicates) => (...args) => behavior(Map.of(true, func))(every(...predicates)(...args), ...args);

const Episode = props => React.createElement(
  'li',
  null,
  React.createElement(
    'header',
    null,
    React.createElement(
      'h4',
      null,
      props.title
    )
  ),
  React.createElement(
    'section',
    null,
    React.createElement(
      'p',
      null,
      React.createElement(
        'strong',
        null,
        'Date: '
      ),
      props.date
    ),
    React.createElement(
      'p',
      null,
      React.createElement(
        'strong',
        null,
        'Director: '
      ),
      props.director
    ),
    React.createElement(
      'p',
      null,
      React.createElement(
        'strong',
        null,
        'Rating: '
      ),
      props.rating
    )
  )
);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      episodes,
      query: '',
      title: true,
      date: false,
      director: false,
      rating: 7
    };
  }

  filter(query) {
    return every(some(() => query === undefined, () => query === '', every(() => this.state.title, v => v.get('title').includes(query)), every(() => this.state.date, v => v.get('date').includes(query)), every(() => this.state.director, v => v.get('director').includes(query))), v => v.get('rating') >= +this.state.rating);
  }

  render() {
    return React.createElement(
      'section',
      null,
      React.createElement(
        'header',
        null,
        React.createElement(
          'h1',
          null,
          'Immutable.js + React Side Effects'
        ),
        React.createElement('input', {
          placeholder: 'filter',
          type: 'search',
          value: this.state.query,
          autoFocus: true,
          onInput: e => this.setState({
            query: e.target.value
          })
        })
      ),
      React.createElement(
        'section',
        null,
        React.createElement(
          'aside',
          null,
          React.createElement(
            'section',
            null,
            React.createElement(
              'header',
              null,
              React.createElement(
                'h3',
                null,
                'Filter Fields'
              )
            ),
            React.createElement(
              'ul',
              null,
              React.createElement(
                'li',
                null,
                React.createElement(
                  'label',
                  null,
                  'Title',
                  React.createElement('input', {
                    type: 'checkbox',
                    checked: this.state.title,
                    onChange: e => this.setState({
                      title: e.target.checked
                    })
                  })
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  'label',
                  null,
                  'Date',
                  React.createElement('input', {
                    type: 'checkbox',
                    checked: this.state.date,
                    onChange: e => this.setState({
                      date: e.target.checked
                    })
                  })
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  'label',
                  null,
                  'Director',
                  React.createElement('input', {
                    type: 'checkbox',
                    checked: this.state.director,
                    onChange: e => this.setState({
                      director: e.target.checked
                    })
                  })
                )
              )
            )
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              'header',
              null,
              React.createElement(
                'h3',
                null,
                'Rating'
              )
            ),
            React.createElement(
              'label',
              null,
              this.state.rating,
              React.createElement('input', {
                type: 'range',
                min: '1',
                max: '10',
                value: this.state.rating,
                name: 'rating',
                onChange: e => this.setState({
                  rating: e.target.value
                })
              })
            )
          )
        ),
        React.createElement(
          'section',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'h3',
              null,
              'Results'
            )
          ),
          React.createElement(
            'ul',
            { id: 'results' },
            this.state.episodes.filter(this.filter(this.state.query)).toJS().map(v => React.createElement(Episode, _extends({ key: v.title }, v)))
          )
        )
      )
    );
  }
}

/*document.addEventListener('input', everyThen(
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
));*/

//render();


const app = ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
