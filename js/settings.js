/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var apiKeyInput = document.getElementById('api-key');

t.render(function(){
  return Promise.all([
    // t.get('board', 'shared', 'fruit'),
    t.get('board', 'private', 'apiKey')
  ])
  .spread(function(savedApiKey){
    if(savedApiKey && /[a-z]+/.test(savedApiKey)){
      apiKeyInput.value = savedApiKey;
    }
  })
  .then(function(){
    t.sizeTo('#content')
    .done();
  })
});

document.getElementById('save').addEventListener('click', function(){
  return t.set('board', 'private', 'apiKey', apiKeyInput.value)
  .then(function(){
    t.closePopup();
  })
})
