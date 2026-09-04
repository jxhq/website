<?php
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
$domain=strtolower(trim((string)($_GET['domain']??'')));
$domain=preg_replace('#^https?://#','',$domain);
$domain=explode('/',$domain)[0];
$domain=rtrim($domain,'.');
if(!preg_match('/^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/',$domain)){
  http_response_code(400);echo json_encode(['error'=>'Invalid domain']);exit;
}
$context=stream_context_create(['http'=>['timeout'=>8,'ignore_errors'=>true,'header'=>"Accept: application/rdap+json\r\nUser-Agent: JXHQ-Tools/1.0\r\n"],'ssl'=>['verify_peer'=>true,'verify_peer_name'=>true]]);
$raw=@file_get_contents('https://rdap.org/domain/'.rawurlencode($domain),false,$context);
$code=0;
foreach($http_response_header??[] as $header){if(preg_match('/^HTTP\/\S+\s+(\d{3})\b/',$header,$m))$code=(int)$m[1];}
if($raw===false||$code<200||$code>=300){http_response_code($code===404?404:502);echo json_encode(['error'=>'Lookup failed']);exit;}
$data=json_decode($raw,true);
if(!is_array($data)){http_response_code(502);echo json_encode(['error'=>'Invalid RDAP response']);exit;}
$events=[];
foreach($data['events']??[] as $event){if(isset($event['eventAction'],$event['eventDate']))$events[$event['eventAction']]=$event['eventDate'];}
$names=[];
foreach($data['nameservers']??[] as $ns){$name=$ns['ldhName']??$ns['unicodeName']??null;if($name)$names[]=strtolower($name);}
echo json_encode(['domain'=>$data['ldhName']??$domain,'status'=>array_values($data['status']??[]),'registered'=>$events['registration']??null,'expires'=>$events['expiration']??null,'nameservers'=>array_values(array_unique($names))],JSON_UNESCAPED_SLASHES);
