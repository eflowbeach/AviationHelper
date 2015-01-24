/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/**
 * This is the main application class of your custom application "AviationHelper"
 *
 * @asset(aviationhelper/*)
 */
qx.Class.define("aviationhelper.Application",
{
  extend : qx.application.Standalone,

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */
  members : {
    /**
     * This method contains the initial application code and gets called
     * during startup of the application
     *
     * @lint ignoreDeprecated(alert)
     */
    main : function()
    {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;

        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }

      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */

      // The main container
      var mainContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox());

      // Initialize sites
      if (sites === "undefined" || sites == "")
      {
        sites = ["KCRW", "KHTS", "KPKB", "KCKB", "KEKN", "KBKW"];
        mainContainer.add(new qx.ui.basic.Label('<b>You can initialize sites via url like this:</b> <a href="http://dev.nids.noaa.gov/~jwolfe/AviationHelper/?sites=KCRW|KHTS|KPKB|KCKB|KEKN|KBKW&radarid=RLX">http://dev.nids.noaa.gov/~jwolfe/AviationHelper/?sites=KCRW|KHTS|KPKB|KCKB|KEKN|KBKW&radarid=RLX</a><br>').set(
        {
          paddingBottom : 20,
          rich : true,
          font : new qx.bom.Font(20),
          textColor : "rgb(0, 105, 207)"
        }));
      } else
      {
        sites = sites.split('|');
      }
      if (radarId === "undefined" || radarId == "") {
        radarId = "RLX";
      }
      var dataStore = aviationhelper.JQx.dataStore.getInstance();
      dataStore.setSites(sites);

      // Control container
      var controlContainer = new aviationhelper.TafSiteContainer(sites).set( {
        paddingLeft : 10
      });

      // Lamp Guidance
      var lampContainer = aviationhelper.Lamp.getInstance();
      lampContainer.setSite(sites[0]);
      mainContainer.add(controlContainer);
      mainContainer.add(lampContainer);
      this.getRoot().add(mainContainer);
    }
  }
});
