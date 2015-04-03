var React = require('../vendor/react.min.js');
var _ = require('../vendor/underscore-min.js');

var SongTile = require('./SongTile');

var SongTileGroup = React.createClass({
  render: function() {
    var filterText = this.props.filterText;
    var songs = _.map(this.props.songs, function(song) {
      if (filterText !== "" &&
          song.cell[0].indexOf(filterText) === -1) {
        return;
      }
      return <SongTile key={song.id}
                   songId={song.id}
                   title={song.cell[0]}
                   author1={song.cell[1]}
                   authro2={song.cell[2]} />;
    });

    return (
      <div className="row">
        {songs}
      </div>
    );
  }
});

module.exports = SongTileGroup;
