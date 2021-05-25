<?php
$to_link = $_GET["to"];
if($to_link != "") 
{
header("location:$to_link");
exit();
}
?>