Package.describe({
  name: 'constellation:plugins',
  version: '0.4.13',
  summary: 'A self-service menu of Constellation plugins',
  git: 'https://github.com/JackAdams/constellation-plugins',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom(['1.8.2', '2.3']);
  api.use(['check', 'underscore']);
  api.use(['templating@1.3.2', 'reactive-dict'], 'client');
  // api.use('ddp', 'server');
  api.use('constellation:console@1.4.11');
  api.addFiles(['constellation-plugins.css', 'constellation-plugins.html', 'constellation-plugins-client.js'], 'client');
  api.addFiles(['constellation-plugins-server.js'], 'server');
  
  api.imply('constellation:console');
  
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('constellation:plugins');
  api.addFiles('constellation-plugins-tests.js');
});
