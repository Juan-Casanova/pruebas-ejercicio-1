const {feed} = require('../source');
const {
    countTweets,
    getProfiles,
    updateUsername,
    updateInteraction,
    getTweetsGreaterThan,
    getTweetsLessOrEqualsThan,
    getTweetsGreaterThanInteraction
} = require('../index');

const {
    getProfiles : profiles,
    updateUsername : username,
    updateInteraction : interaction,
    getTweetsGreaterThan : TweetsGreaterThan,
    getTweetsLessOrEqualsThan : TweetsLessOrEqualsThan,
    getTweetsGreaterThanInteraction : TweetsGreaterThanInteraction
} = require('./__mocks__/fs');

describe('Funciones para los tweets', () => {
    test('Obteniendo el no de tweets', () => {
        expect(countTweets(feed)).toBe(13);
    });

    test('Obteniendo los perfiles de usuario', () => {
        expect(getProfiles(feed)).toEqual(expect.arrayContaining(profiles(feed)));
    });

    test('Actualizando los nombres de usuario', () => {
        expect(updateUsername(feed)).toEqual(expect.arrayContaining(username(feed)));
    });

    test('Actualizando las interacciones para cada tweet', () => {
        expect(updateInteraction(feed)).toEqual(expect.arrayContaining(interaction(feed)));
    });

    test('Obtener los tweets que sean mayores a n comentarios', () => {
        expect(getTweetsGreaterThan(feed, 2000)).toEqual(expect.arrayContaining(TweetsGreaterThan(feed, 2000)));
    });

    test('Obteniendo los tweets que sean menores o iguales que n comentarios', () => {
        expect(getTweetsLessOrEqualsThan(feed, 1000)).toEqual(expect.arrayContaining(TweetsLessOrEqualsThan(feed, 1000)));
    });

    test('Obteniendo los tweets que sean mayores que n [interaccion] ', () => {
        expect(getTweetsGreaterThanInteraction(feed, 'retweets', 1000)).toEqual(expect.arrayContaining(TweetsGreaterThanInteraction(feed, 'retweets', 1000)));
    });
})