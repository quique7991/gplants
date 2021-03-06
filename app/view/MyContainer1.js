/*
 * File: app/view/MyContainer1.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyContainer1', {
    extend: 'Ext.Container',
    alias: 'widget.mycontainer1',

    config: {
        id: 'camera',
        items: [
            {
                xtype: 'button',
                centered: false,
                docked: 'bottom',
                itemId: 'mybutton1',
                left: '40%',
                top: '88%',
                ui: 'round',
                width: '20%',
                text: '[]'
            }
        ],
        listeners: [
            {
                fn: 'onMybutton1Tap',
                event: 'tap',
                delegate: '#mybutton1'
            }
        ]
    },

    onMybutton1Tap: function(button, e, eOpts) {
        try{
            navigator.camera.getPicture(onSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.DATA_URL});
            function 	onSuccess(imageData) {
                var image = document.getElementById('myImage');
                image.src = "data:image/jpeg;base64," + imageData;
                alert("Exitoo....")
            }
            function onFail(message) {
                alert('Failed because: ' + message);
            }
        }
        catch(e){
            alert('getting picture failed as well...');
        }
    }

});