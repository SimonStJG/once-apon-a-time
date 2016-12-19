'use strict';

angular.module('app').service('StoryService', function() {
    return {
        start: {
            story: [
                'It\'s a Friday night',
                'What do you do?'
            ],
            routes: [{
                to: 'party',
                text: 'Party'
            }, {
                to: 'notparty',
                text: 'Not Party'
            }]
        },
        party: {
            story: [
                'Where\'s the party at?',
                'You need to write the rest of the story.'
            ],
            routes: []
        },
        notparty: {
            story: [
                'You have a nap and dream about about an awesome party.',
            ],
            routes: [{
                to: 'party',
                text: 'Party'
            }, {
                to: 'start',
                text: 'Not Party'
            }]
        },
    };
});