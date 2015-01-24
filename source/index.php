<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
  <title>AviationHelper</title>
  <script type="text/javascript" src="script/aviationhelper.js"></script>
</head>
<body>
</body>

 <!-- Get Sites -->
      <script type="text/javascript">
                        <?php

                          $sites = $_REQUEST['sites'];
                          $radarId = $_REQUEST['radarid'];
                        	echo "var sites = \"$sites\";";
                        	echo "var radarId = \"$radarId\";";
                        	?>
      </script>
</html>
