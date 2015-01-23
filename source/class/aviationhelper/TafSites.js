/**
   Program Name: TafSites.js
   Author: jwolfe
   Date: 1/23/15
*/
qx.Class.define("aviationhelper.TafSites",
{
    extend: qx.ui.container.Composite,

    construct: function()
    {
        this.base(arguments);
         var me = this;
         me.setLayout(new qx.ui.layout.VBox());
         var container = new qx.ui.container.Composite(new qx.ui.layout.HBox());




         me.add(container);
        
    },

    members:
    {
         
    }
});