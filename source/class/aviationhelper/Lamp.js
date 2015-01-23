/**
   Program Name: Lamp.js
   Author: jwolfe
   Date: 1/23/15
*/
qx.Class.define("aviationhelper.Lamp",
{
  extend : qx.ui.container.Scroll,
  type : "singleton",
  construct : function()
  {
    this.base(arguments);
    var me = this;

    // Set the widths of the scroll container
          me.setWidth(qx.bom.Viewport.getWidth());
          me.setMinHeight(qx.bom.Viewport.getHeight()-50);

    // Need this for scroll to work properly
    var mainContainer = new qx.ui.container.Composite(new qx.ui.layout.HBox());
    var dataStore = aviationhelper.JQx.dataStore.getInstance();
    var sites = dataStore.getSites();

    // Probability container
    var probContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox());

    // Meteogram container
    var meteoContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox());
    me.meteoImage = new qx.ui.basic.Image("http://www.nws.noaa.gov/mdl/gfslamp/meteo.php?BackHour=3&TempBox=N&DewBox=N&SkyBox=N&WindSpdBox=N&WindDirBox=N&WindGustBox=N&CigBox=Y&VisBox=Y&ObvBox=N&PtypeBox=Y&PopoBox=Y&LightningBox=Y&ConvBox=Y&sta=" + sites[0]).set( {
      scale : true
    });
    meteoContainer.add(me.meteoImage);
    mainContainer.add(probContainer);
    mainContainer.add(meteoContainer);
    me.add(mainContainer);

    // MVFR
    var mvfrContainer = new qx.ui.container.Composite(new qx.ui.layout.HBox());
    me.mvfrCigImage = new qx.ui.basic.Image("http://www.nws.noaa.gov/mdl/gfslamp/makeuncertplot.php?&sta=" + sites[0] + "&elm=cig&flightcat=MVFR").set( {
      scale : true
    });
    me.mvfrVisImage = new qx.ui.basic.Image("http://www.nws.noaa.gov/mdl/gfslamp/makeuncertplot.php?&sta=" + sites[0] + "&elm=vis&flightcat=MVFR").set( {
      scale : true
    });
    mvfrContainer.add(me.mvfrCigImage);
    mvfrContainer.add(me.mvfrVisImage);
    probContainer.add(mvfrContainer);

    // IFR
    var ifrContainer = new qx.ui.container.Composite(new qx.ui.layout.HBox());
    me.ifrCigImage = new qx.ui.basic.Image("http://www.nws.noaa.gov/mdl/gfslamp/makeuncertplot.php?&sta=" + sites[0] + "&elm=cig&flightcat=IFR").set( {
      scale : true
    });
    me.ifrVisImage = new qx.ui.basic.Image("http://www.nws.noaa.gov/mdl/gfslamp/makeuncertplot.php?&sta=" + sites[0] + "&elm=vis&flightcat=IFR").set( {
      scale : true
    });
    ifrContainer.add(me.ifrCigImage);
    ifrContainer.add(me.ifrVisImage);
    probContainer.add(ifrContainer);

    // LIFR
    var lifrContainer = new qx.ui.container.Composite(new qx.ui.layout.HBox());
    me.lifrCigImage = new qx.ui.basic.Image("http://www.nws.noaa.gov/mdl/gfslamp/makeuncertplot.php?&sta=" + sites[0] + "&elm=cig&flightcat=LIFR").set( {
      scale : true
    });
    me.lifrVisImage = new qx.ui.basic.Image("http://www.nws.noaa.gov/mdl/gfslamp/makeuncertplot.php?&sta=" + sites[0] + "&elm=vis&flightcat=LIFR").set( {
      scale : true
    });
    lifrContainer.add(me.lifrCigImage);
    lifrContainer.add(me.lifrVisImage);
    probContainer.add(lifrContainer);
  },
  members :
  {

  /**
  Change the site
  */
    changeSite : function(site)
    {
      var me = this;
      me.mvfrCigImage.setSource("http://www.nws.noaa.gov/mdl/gfslamp/makeuncertplot.php?&sta=" + site + "&elm=cig&flightcat=MVFR");
      me.mvfrVisImage.setSource("http://www.nws.noaa.gov/mdl/gfslamp/makeuncertplot.php?&sta=" + site + "&elm=vis&flightcat=MVFR");
      me.ifrCigImage.setSource("http://www.nws.noaa.gov/mdl/gfslamp/makeuncertplot.php?&sta=" + site + "&elm=cig&flightcat=IFR");
      me.ifrVisImage.setSource("http://www.nws.noaa.gov/mdl/gfslamp/makeuncertplot.php?&sta=" + site + "&elm=vis&flightcat=IFR");
      me.lifrCigImage.setSource("http://www.nws.noaa.gov/mdl/gfslamp/makeuncertplot.php?&sta=" + site + "&elm=cig&flightcat=LIFR");
      me.lifrVisImage.setSource("http://www.nws.noaa.gov/mdl/gfslamp/makeuncertplot.php?&sta=" + site + "&elm=vis&flightcat=LIFR");
      me.meteoImage.setSource("http://www.nws.noaa.gov/mdl/gfslamp/meteo.php?BackHour=3&TempBox=N&DewBox=N&SkyBox=N&WindSpdBox=N&WindDirBox=N&WindGustBox=N&CigBox=Y&VisBox=Y&ObvBox=N&PtypeBox=Y&PopoBox=Y&LightningBox=Y&ConvBox=Y&sta=" + site);
    },

    /**
    Change the image size
    */
    changeImageSize : function(width)
    {
      var me = this;
      var width = parseInt(width);
      var height = parseInt(width * 0.4);
      me.mvfrCigImage.setWidth(width);
      me.mvfrVisImage.setWidth(width);
      me.ifrCigImage.setWidth(width);
      me.ifrVisImage.setWidth(width);
      me.lifrCigImage.setWidth(width);
      me.lifrVisImage.setWidth(width);
      me.mvfrCigImage.setHeight(height);
      me.mvfrVisImage.setHeight(height);
      me.ifrCigImage.setHeight(height);
      me.ifrVisImage.setHeight(height);
      me.lifrCigImage.setHeight(height);
      me.lifrVisImage.setHeight(height);
    }
  }
});
