<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Api\SongApi;

class SongController extends Controller
{
    /**
     * @Route("/song/{songId}", name="view_song_index")
     */
    public function viewSongAction(Request $request, $songId)
    {
        $api = $this->get("song_api");
        $songData = $api->getSongById($songId);

        return $this->render("Song/index.html.twig", ["songData" => $songData]);
    }

    /**
     * @Route("/api/songs/search", name="api_songs_search")
     */
    public function searchSongsAction(Request $request)
    {
        $searchText = $request->query->get("searchText");
        $api = $this->get("song_api");

        $songs = $api->searchSongsByTitle($searchText);
        return new JsonResponse($songs);
    }
}
