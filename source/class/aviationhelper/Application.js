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
// Initialize sites
      var sites = ["KCRW", "KHTS", "KPKB", "KCKB", "KEKN", "KBKW"];
      var dataStore = aviationhelper.JQx.dataStore.getInstance();
      dataStore.setSites(sites);

      // The main container
      var mainContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox());

      // Control container
      var controlContainer = new aviationhelper.TafSites(sites).set( {
        paddingLeft : 10
      });

// Lamp Guidance
      var lampContainer = aviationhelper.Lamp.getInstance();
      mainContainer.add(controlContainer);
      mainContainer.add(lampContainer);
      this.getRoot().add(mainContainer);

    }
  }
});
