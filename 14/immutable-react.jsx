/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-for */
const {
  List,
  Map,
  Seq
} = Immutable; // eslint-disable-line no-undef

const React = window.React;

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

const some = (...predicates) => {
  const predicateSeq = Seq(predicates);
  return (...args) => predicateSeq.some(p => p(...args));
};

const every = (...predicates) => {
  const predicateSeq = Seq(predicates);
  return (...args) => predicateSeq.every(p => p(...args));
};

const Episode = props => (
  <li>
    <header>
      <h4>{props.title}</h4>
    </header>
    <section>
      <p><strong>Date: </strong>{props.date}</p>
      <p><strong>Director: </strong>{props.director}</p>
      <p><strong>Rating: </strong>{props.rating}</p>
    </section>
  </li>
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
    return every(
      some(
        () => query === undefined,
        () => query === '',
        every(
          () => this.state.title,
          v => v.get('title').includes(query)
        ),
        every(
          () => this.state.date,
          v => v.get('date').includes(query)
        ),
        every(
          () => this.state.director,
          v => v.get('director').includes(query)
        )
      ),
      v => v.get('rating') >= (+this.state.rating)
    );
  }

  render() {
    return (
      <section>
        <header>
          <h1>Immutable.js + React Side Effects</h1>
          <input
            placeholder="filter"
            type="search"
            value={this.state.query}
            autoFocus
            onInput={e => this.setState({
              query: e.target.value
            })}
          />
        </header>
        <section>
          <aside>
            <section>
              <header>
                <h3>Filter Fields</h3>
              </header>
              <ul>
                <li>
                  <label>
                    Title
                    <input
                      type="checkbox"
                      checked={this.state.title}
                      onChange={e => this.setState({
                        title: e.target.checked
                      })}
                    />
                  </label>
                </li>
                <li>
                  <label>
                    Date
                    <input
                      type="checkbox"
                      checked={this.state.date}
                      onChange={e => this.setState({
                        date: e.target.checked
                      })}
                    />
                  </label>
                </li>
                <li>
                  <label>
                    Director
                    <input
                      type="checkbox"
                      checked={this.state.director}
                      onChange={e => this.setState({
                        director: e.target.checked
                      })}
                    />
                  </label>
                </li>
              </ul>
            </section>
            <section>
              <header>
                <h3>Rating</h3>
              </header>
              <label>
                {this.state.rating}
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={this.state.rating}
                  name="rating"
                  onChange={e => this.setState({
                    rating: e.target.value
                  })}
                />
              </label>
            </section>
          </aside>
          <section>
            <header>
              <h3>Results</h3>
            </header>
            <ul id="results">
              {this.state.episodes
                .filter(this.filter(this.state.query))
                .toJS()
                .map(v => (<Episode key={v.title} {...v} />))}
            </ul>
          </section>
        </section>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app')); // eslint-disable-line no-undef
