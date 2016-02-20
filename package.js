Package.describe({
  name: 'ivansglazunov:shuttle-ui-bootstrap-3',
  version: '0.0.1',
  summary: 'The basic elements of the interface to work with links in the trees.',
  git: 'https://github.com/ivansglazunov/meteor-shuttle-ui-bootstrap-3.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use('ecmascript');
  api.use('mongo');
  api.use('accounts-base');
  api.use('random');

  api.use('templating');
  api.use('less');

  api.use('aldeed:autoform@5.8.1');
  api.use('aldeed:collection2@2.8.0');
  api.use('fortawesome:fontawesome@4.5.0');

  api.use('stevezhu:lodash@4.1.0');
  api.use('aldeed:delete-button@2.0.0');
  api.use('easy:search@2.0.8');
  api.use('raix:handlebar-helpers@0.2.5');
  api.use('lookback:dropdowns@1.3.0');
  
  api.use('ivansglazunov:shuttle@0.1.0');
  api.use('ivansglazunov:templater@0.0.2');

  api.addFiles('links.html', 'client');
  api.addFiles('links.js', 'client');
  api.addFiles('search.html', 'client');
  api.addFiles('search.less', 'client');
  api.addFiles('search.js', 'client');
  api.addFiles('dropdown.html', 'client');
  api.addFiles('dropdown.js', 'client');
});