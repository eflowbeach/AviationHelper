/**
   Program Name: TafSites.js
   Author: jwolfe
   Date: 1/23/15
*/
qx.Class.define("aviationhelper.TafSites",
{
  extend : qx.ui.container.Composite,
  construct : function()
  {
    this.base(arguments);
    var me = this;
    me.setLayout(new qx.ui.layout.VBox());
    var dataStore = aviationhelper.JQx.dataStore.getInstance();
    var sites = dataStore.getSites();
    me.makeSiteButtons(sites);
  },
  members : {
    /**
    Make the buttons
    */
    makeSiteButtons : function(sites)
    {
      var me = this;
      var container = new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
      var labels = [];
      sites.forEach(function(obj, index)
      {
        labels[index] = new qx.ui.basic.Label(obj).set( {
          font : new qx.bom.Font(16).set( {
            bold : true
          })
        });
        container.add(labels[index]);

        // On mouseover...change label color and site
        labels[index].addListener("pointerover", function(e)
        {
          var targetLabel = e.getTarget().getValue();

          labels.forEach(function(obj) {


            if (obj.getValue() == targetLabel)
            {
              obj.setTextColor("#1eb02a");
              aviationhelper.Lamp.getInstance().changeSite(targetLabel);
            } else
            {
              obj.setTextColor("#000000");
            }
          })
        })
      })
      var slider = new qx.ui.form.Slider()
      slider.set(
      {
        minimum : 40,
        maximum : 1500,
        singleStep : 1,
        pageStep : 1,
        value : 500,
        minWidth : 80,
        minHeight : 20,
        maxHeight : 20
      });
      container.add(new qx.ui.basic.Label("Graphic Size:"));
      slider.addListener("changeValue", function(e) {
        aviationhelper.Lamp.getInstance().changeImageSize(e.getData());
      })
      container.add(slider);
      me.add(container);
    }
  }
});
