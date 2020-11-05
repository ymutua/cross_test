// Initial Tracking Code
var paq = paq || [];
_paq.push(['enableLinkTracking']);
_paq.push(['enableHeartBeatTimer']);
(function() {
  var u = 'https://locusgeosystems.matomo.cloud/';  
  _paq.push(['setTrackerUrl', u+'matomo.php']);
  _paq.push(['setSiteId', '1']);
  var d = document,
  g = d.createElement('script'),
  s = d.getElementsByTagName('script')[0];
  g.type = 'text/javascript';
  g.async = true;
  g.defer = true;
  g.src = u+'matomo.js';
  s.parentNode.insertBefore(g,s);
})();

// Event Tracking Code
$(document).on('shiny:inputchanged', function(event) {
  if (event.name === 'bins' || event.name === 'col') {
    _paq.push(['trackEvent', 'input',
               'updates', event.name, event.value]);
  }
});

// User Tracking Code
$(document).one('shiny:idle', function(){
  _paq.push(['setUserId', Shiny.user]);
  _paq.push(['trackPageView']);
});