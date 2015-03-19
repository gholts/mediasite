<?php
namespace Api;

class SongApi extends MediaSite
{
    const GET_SONG_URI = "/Songs/GetSong";
    const SEARCH_SONGS_URI = "/Songs/Search";

    public function getSongById($id)
    {
        $params = [
            "id" => $id,
        ];
        $uri = "/Songs/GetSong";

        return $this->get($uri, $params);
    }

    public function getSongs()
    {
        $params = [
            "rows" => 3000,
        ];

        return $this->get($this::SEARCH_SONGS_URI, $params);
    }

    public function searchSongsByTitle($searchText = "")
    {
        $params = [
            "searchField" => "title",
            "searchText" => $searchText,
        ];

        return $this->get($this::SEARCH_SONGS_URI, $params);
    }
}
