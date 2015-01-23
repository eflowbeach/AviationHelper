/**
   Program Name: Lamp.js
   Author: jwolfe
   Date: 1/23/15
*/
qx.Class.define("aviationhelper.Lamp",
{
  extend : qx.ui.container.Composite,
  construct : function(sites)
  {
    this.base(arguments);
    var me = this;
    me.setLayout(new qx.ui.layout.VBox());
    console.log(sites);

    // MVFR
    var mvfrContainer = new qx.ui.container.Composite(new qx.ui.layout.HBox());
    me.mvfrCigImage = new qx.ui.basic.Image("http://www.nws.noaa.gov/mdl/gfslamp/makeuncertplot.php?&sta="+ sites[0] +"&elm=cig&flightcat=MVFR");
    me.mvfrVisImage = new qx.ui.basic.Image("http://www.nws.noaa.gov/mdl/gfslamp/makeuncertplot.php?&sta="+ sites[0] +"&elm=vis&flightcat=MVFR");
    mvfrContainer.add(me.mvfrCigImage);
    mvfrContainer.add(me.mvfrVisImage);
    me.add(mvfrContainer);

    // IFR
    var ifrContainer = new qx.ui.container.Composite(new qx.ui.layout.HBox());
    me.ifrCigImage = new qx.ui.basic.Image("http://www.nws.noaa.gov/mdl/gfslamp/makeuncertplot.php?&sta="+ sites[0] +"&elm=cig&flightcat=IFR");
    me.ifrVisImage = new qx.ui.basic.Image("http://www.nws.noaa.gov/mdl/gfslamp/makeuncertplot.php?&sta="+ sites[0] +"&elm=vis&flightcat=IFR");
    ifrContainer.add(me.ifrCigImage);
        ifrContainer.add(me.ifrVisImage);
        me.add(ifrContainer);

    // LIFR
    var lifrContainer = new qx.ui.container.Composite(new qx.ui.layout.HBox());
    me.lifrCigImage = new qx.ui.basic.Image("http://www.nws.noaa.gov/mdl/gfslamp/makeuncertplot.php?&sta="+ sites[0] +"&elm=cig&flightcat=LIFR");
    me.lifrVisImage = new qx.ui.basic.Image("http://www.nws.noaa.gov/mdl/gfslamp/makeuncertplot.php?&sta="+ sites[0] +"&elm=vis&flightcat=LIFR");
    lifrContainer.add(me.lifrCigImage);
        lifrContainer.add(me.lifrVisImage);
        me.add(lifrContainer);


  },
  members : {

  }
});
