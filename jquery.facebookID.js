/*
 *  Project: jquery.facebookID
 *  Description: Get basic info from an user without Apikey or App
 *  Author: @ivanfc0o
 */

;(function ( $, window, undefined ) {
    
// Plugin name
var pluginName = 'facebookID';

    // plugin __constructor
    var plugin = function(user, avatar, callback){
        var avatar = avatar||[50,50];
        var emailRegExp = /^\w[\+\.\w-]*@facebook.com$/i,
              user = emailRegExp.test(user)?user.split("@")[0]:user,
              result = {},
              data = $.getJSON("https://graph.facebook.com/"+user, null, function(d){
                                      result.name = d.name;
                                      result.avatar = "http://graph.facebook.com/"+d.username+"/picture?width="+avatar[0]+"&height="+avatar[1];
                                      result.url = d.link||"http://fb.com/"+d.username;
                                      if((typeof callback)==="function"){ callback(result); }
                          });
              return result;
    };

$[pluginName] = plugin;

}(jQuery, window));