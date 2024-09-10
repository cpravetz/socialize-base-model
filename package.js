/* global Package, Npm */
Package.describe({
    name: 'socialize:base-model',
    summary: 'A model for all other models to extend.',
    version: '1.1.8',
    git: 'https://github.com/copleykj/socialize-base-model.git',
});

Npm.depends({
    'mongodb-diff': '0.4.4',
});

Package.onUse(function onUse(api) {
    api.versionsFrom(['1.10.2', '2.3','3.0']);

    api.use(['meteor', 'mongo', 'ecmascript']);

    api.use([
        'aldeed:collection2', 'aldeed:schema-index', 'aldeed:schema-deny',
        'matb33:collection-hooks', 'socialize:server-time',
    ]);

    api.imply(['meteor', 'mongo', 'ecmascript']);

    api.imply([
        'aldeed:collection2', 'aldeed:schema-index', 'aldeed:schema-deny',
        'matb33:collection-hooks', 'socialize:server-time',
    ]);

    api.mainModule('entry-meteor.js');
});

Package.onTest(function onTest(api) {
    api.use(['tinytest', 'meteor', 'mongo', 'ecmascript']);

    api.use([
        'aldeed:collection2', 'matb33:collection-hooks',
        'socialize:base-model',
    ]);

    api.mainModule('tests.js');
});
