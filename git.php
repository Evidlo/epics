<?php
$status=[]; 

exec('bash /srv/epics/git.sh',$status);

echo "Git Messages<br>";
echo "------------------------<br>";

foreach($status as $value){
	echo $value;
	echo "<br>";
}
?>
