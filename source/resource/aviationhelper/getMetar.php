<?php
header("Cache-Control: no-cache, must-revalidate");
$station = $_REQUEST["site"];
//$url =  "http://www.aviationweather.gov/adds/tafs/?station_ids=".$station."&std_trans=raw&submit_taf=Get+TAFs";
$url = "http://www.aviationweather.gov/adds/metars/?station_ids=".$station."&std_trans=standard&chk_metars=on&hoursStr=most+recent+only&submitmet=Submit";

// Initializing curl
$ch = curl_init( $url );

// Configuring curl options
$options = array(
		CURLOPT_RETURNTRANSFER => true
);

// Setting curl options
curl_setopt_array( $ch, $options );

// Getting results
$result =  curl_exec($ch);
echo $result;

?>