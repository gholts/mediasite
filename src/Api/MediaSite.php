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

    public function get($uri, $data = [])
    {
        $data = array_merge($data, ["Authtoken" => MediaSite::AUTH_TOKEN]);
        $uri = $uri."?".http_build_query($data);

        $response = $this->client->get($uri);

        return $response->json();
    }
}
