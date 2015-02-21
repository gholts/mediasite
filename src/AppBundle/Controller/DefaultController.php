<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Api\MediaSite;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction()
    {
        $api = new MediaSite();

        $song = $api->getSongById("135");
        $songs = $api->getSongs();
        return $this->render('index.html.twig', ["title" => "Hey", "song" => $song, "songs" => $songs]);
    }
}
