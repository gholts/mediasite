<?php
namespace Api;

use GuzzleHttp\Client;

class MediaSite
{
    const AUTH_TOKEN = "FDEOJERG4523DFOIP";

    private $client;

    public function __construct()
    {
        $this->client = new Client([
            'base_url' => 'http://api.media2.cdac.ca/Songs/'
            ]);
    }

    public function get($uri, $data)
    {
        $data = array_merge($data, ["Authtoken" => MediaSite::AUTH_TOKEN]);
        $response = $this->client->get($uri, $data);

        return $response->json();
    }

    public function getSongById($id)
    {
        $params = [
            "id" => $id,
            "Authtoken" => MediaSite::AUTH_TOKEN,
        ];
        $uri = "/Songs/GetSong?".http_build_query($params);
        $response = $this->client->get($uri);

        return $response->json();
    }

    public function getSongs()
    {
        $params = [
            "Authtoken" => MediaSite::AUTH_TOKEN
        ];
        $uri = "/Songs/Search?".http_build_query($params);
        return $this->client->get($uri)->json();
    }
}
