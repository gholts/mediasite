'use strict';

var $ = require('./vendor/jquery-1.11.2.min.js');
var React = require('./vendor/react.min.js');
var _ = require('./vendor/underscore-min.js');

var SongTileGroup = require('./components/SongTileGroup');
var SearchBar = require('./components/SearchBar');

var css = require('../scss/main.scss');

var FilterableSongTable = React.createClass({
  componentDidMount: function() {
    this.getSongsAndSetState();
  },
  getInitialState: function() {
    return {
      filterText: '',
      songData: []
    };
  },
  getSongsAndSetState: function(filterText) {
    if (filterText === undefined) {
      filterText = "";
    }
    $.ajax({
      url: this.props.url + '?searchText=' + filterText,
      dataType: 'json',
      success: (data) => {
        this.setState({
          songData: data.rows,
          totalSongs: data.records
        });
      },
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleUserInput: function(filterText) {
    this.setState({
      filterText: filterText
    });

    // Attempt to avoid hammering the API with requests as someone types.
    _.throttle(_.bind(this.getSongsAndSetState, this, filterText), 300, { leading: false })();
  },
  render: function() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText}
                   onUserInput={this.handleUserInput} />
        <SongTileGroup songs={this.state.songData}
                   filterText={this.state.filterText}
                   totalSongCount={this.state.totalSongs} />
      </div>
    );
  }
});

React.render(<FilterableSongTable url='/api/songs/search' />, document.getElementById('song-area'));
