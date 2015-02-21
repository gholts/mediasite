(function(React) {
  "use strict";

  var SongRow = React.createClass({
    render: function() {
      return(
        <tr>
          <td>{this.props.title}</td>
          <td>{this.props.author1}</td>
          <td>{this.props.author2}</td>
        </tr>
      );
    }
  });

  var SongTable = React.createClass({
    render: function() {
      var rows = [];
      this.props.songs.forEach(function(song) {
        var filterText = this.props.filterText;
        if (song.Title.indexOf(filterText) === -1 &&
            song.Author1.indexOf(filterText) === -1 &&
            song.Author2.indexOf(filterText) === -1) {
          return;
        }
        rows.push(<SongRow key={song.id}
                           title={song.Title}
                           author1={song.Author1} 
                           author2={song.Author2} 
                           songText={song.SongText} />);
      }.bind(this));
      return(
      <div>
        <p>Displaying {rows.length} of a lot of songs</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author 1</th>
              <th>Author 2</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
      );
    }
  });

  var SearchBar = React.createClass({
    handleChange: function() {
      this.props.onUserInput(
        this.refs.filterTextInput.getDOMNode().value
      );
    },
    render: function() {
      return(
        <form>
          <input
              type="text"
              placeholder="Search..."
              ref="filterTextInput"
              value={this.props.filterText}
              onChange={this.handleChange}
          />
        </form>
      );
    }
  });

  var FilterableSongTable = React.createClass({
    getInitialState: function() {
      return {
        filterText: ''
      };
    },
    handleUserInput: function(filterText) {
      this.setState({
        filterText: filterText
      });
    },
    render: function() {
      return(
        <div>
          <SearchBar filterText={this.state.filterText}
                     onUserInput={this.handleUserInput} />
          <SongTable songs={this.props.songs}
                     filterText={this.state.filterText} />
        </div>
      );
    }
  });

  var staticData = [
        {
           "id":"1234",
           "Title":"WILMK",
           "Author1":"Imma Author",
           "Author2":"Imma Author as well",
           "SongText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
           "id":"2",
           "Title":"TRADH",
           "Author1":"Imma Author",
           "Author2":"Imma Author as well",
           "SongText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
           "id":"3",
           "Title":"HANAR",
           "Author1":"Imma Author",
           "Author2":"Imma Author as well",
           "SongText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
           "id":"4",
           "Title":"VICTE",
           "Author1":"Imma Author",
           "Author2":"Imma Author as well",
           "SongText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
           "id":"5",
           "Title":"SUPRD",
           "Author1":"Imma Author",
           "Author2":"Imma Author as well",
           "SongText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
           "id":"6",
           "Title":"HANAR",
           "Author1":"Imma Author",
           "Author2":"Imma Author as well",
           "SongText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
           "id":"7",
           "Title":"CHOPS",
           "Author1":"Imma Author",
           "Author2":"Imma Author as well",
           "SongText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
           "id":"8",
           "Title":"RICSU",
           "Author1":"Imma Author",
           "Author2":"Imma Author as well",
           "SongText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
           "id":"9",
           "Title":"WELLI",
           "Author1":"Imma Author",
           "Author2":"Imma Author as well",
           "SongText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
           "id":"10",
           "Title":"HILAA",
           "Author1":"Imma Author",
           "Author2":"Imma Author as well",
           "SongText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
           "id":"11",
           "Title":"ERNSH",
           "Author1":"Imma Author",
           "Author2":"Imma Author as well",
           "SongText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
           "id":"12",
           "Title":"CENTC",
           "Author1":"Imma Author",
           "Author2":"Imma Author as well",
           "SongText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
           "id":"13",
           "Title":"OLDWO",
           "Author1":"Imma Author",
           "Author2":"Imma Author as well",
           "SongText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
           "id":"14",
           "Title":"QUEDE",
           "Author1":"Imma Author",
           "Author2":"Imma Author as well",
           "SongText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
           "id":"15",
           "Title":"RATTC",
           "Author1":"Imma Author",
           "Author2":"Imma Author as well",
           "SongText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
           "id":"16",
           "Title":"ERNSH",
           "Author1":"Imma Author",
           "Author2":"Imma Author as well",
           "SongText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
           "id":"17",
           "Title":"FOLKO",
           "Author1":"Imma Author",
           "Author2":"Imma Author as well",
           "SongText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
           "id":"18",
           "Title":"BLONP",
           "Author1":"Imma Author",
           "Author2":"Imma Author as well",
           "SongText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
           "id":"19",
           "Title":"WARTH",
           "Author1":"Imma Author",
           "Author2":"Imma Author as well",
           "SongText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
           "id":"20",
           "Title":"FRANK",
           "Author1":"Imma Author",
           "Author2":"Imma Author as well",
           "SongText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        }
     ];

  React.render(<FilterableSongTable songs={staticData} />, document.getElementById("song-area"));

})(this.React);