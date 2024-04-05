import { fakerFR } from '@faker-js/faker';
import { writeFile , appendFile } from 'node:fs/promises';

const FILENAME = './data/fakeuser.json';
const FILENAME2 = './data/fakenews.json';
const FILENAME3 = './data/fakeevent.json';
const FILENAME4 = './data/fakesponsor.json';
const FILENAME5 = './data/fakegalery.json';
const FILENAME6 = './data/fakecomment.json';
const FILENAME7 = './data/fakephoto.json';
const FILENAME8 = './data/fakeregistration.json';

/*
(async () => {
    await writeFile(FILENAME, '[');
    for( let userIndex = 0; userIndex < 50; userIndex ++ ) {
        if(userIndex > 0) {
            await appendFile(FILENAME, ',\n');
        }
        const lastName = fakerFR.person.lastName();
        const firstName = fakerFR.person.firstName();
        const email = fakerFR.internet.email({firstName, lastName});
        const password = fakerFR.internet.password();
        const role = fakerFR.helpers.weightedArrayElement([{ weight: 7, value:'utilisateur'}, { weight: 2, value:'responsable'}, { weight: 1, value:'administrateur'}]);
        const photo_url = fakerFR.image.avatar();
        const user = {lastName, firstName, email, password, role, photo_url};
        await appendFile(FILENAME, JSON.stringify(user))
        }
    await appendFile(FILENAME, ']');
    console.log('users created');
}) ();
*/
/*
(async () => {
    await writeFile(FILENAME2, '[');
    for( let newsIndex = 0; newsIndex < 30; newsIndex ++ ) {
        if(newsIndex > 0) {
            await appendFile(FILENAME2, ',\n');
        }
        const category = fakerFR.commerce.department();
        const title = fakerFR.commerce.productName();
        const summary = fakerFR.lorem.sentences({min: 1 , max: 2});
        const content = fakerFR.commerce.productDescription();
        const author = fakerFR.number.int(50);
        const photo_url = fakerFR.image.url();
        const news = {category, title, summary, content, author, photo_url};
        await appendFile(FILENAME2, JSON.stringify(news))
        }
    await appendFile(FILENAME2, ']');
    console.log('news created');
}) ();
*/
/*
(async () => {
    await writeFile(FILENAME3, '[');
    for( let eventIndex = 0; eventIndex < 25; eventIndex ++ ) {
        if(eventIndex > 0) {
            await appendFile(FILENAME3, ',\n');
        }
        const category = fakerFR.commerce.department();
        const title = fakerFR.word.words({min: 2, max: 5 });
        const photo_url = fakerFR.image.urlPicsumPhotos();
        const description = fakerFR.commerce.productDescription();
        const date = fakerFR.date.future();
        const calendar_url = fakerFR.internet.url();
        const place = fakerFR.location.city();
        const author = fakerFR.number.int(50);
        const event = {category, title, author, photo_url, description, date, calendar_url, place};
        await appendFile(FILENAME3, JSON.stringify(event))
        }
    await appendFile(FILENAME3, ']');
    console.log('events created');
}) ();
*/
/*
(async () => {
    await writeFile(FILENAME4, '[');
    for( let sponsorIndex = 0; sponsorIndex < 10; sponsorIndex ++ ) {
        if(sponsorIndex > 0) {
            await appendFile(FILENAME4, ',\n');
        }
        const name = fakerFR.company.name();
        const link_url = fakerFR.internet.url();
        const photo_url = fakerFR.image.urlLoremFlickr({ category: 'business' });
        const sponsor = {name, link_url, photo_url};
        await appendFile(FILENAME4, JSON.stringify(sponsor))
        }
    await appendFile(FILENAME4, ']');
    console.log('sponsors created');
}) ();
*/
/*
(async () => {
    await writeFile(FILENAME5, '[');
    for( let galerieIndex = 0; galerieIndex < 10; galerieIndex ++ ) {
        if(galerieIndex > 0) {
            await appendFile(FILENAME5, ',\n');
        }
        const title = fakerFR.word.words({count: {min:2, max:5}});
        const description = fakerFR.commerce.productDescription();
        const category = fakerFR.commerce.department();
        const galery_date = fakerFR.date.past();
        const galerie = {title, description, category, galery_date};
        await appendFile(FILENAME5, JSON.stringify(galerie))
        }
    await appendFile(FILENAME5, ']');
    console.log('galeries created');
}) ();*/

/*
fakerFR.image.urlLoremFlickr({ category: 'association' })

(async () => {
    await writeFile(FILENAME6, '[');
    for( let commentIndex = 0; commentIndex < 100; commentIndex ++ ) {
        if(commentIndex > 0) {
            await appendFile(FILENAME6, ',\n');
        }
        const user_id = fakerFR.number.int(50);
        const news_id = fakerFR.number.int(30);
        const content = fakerFR.helpers.mustache('{{interjection}} {{conjonction}} {{person}} {{verb}} {{adverb}} {{preposition}} {{adjectif}} {{words}}', {
            person: fakerFR.helpers.weightedArrayElement([{weight:3, value:'Jean-Guillaume'},{weight:1, value:'Laurent'},{weight: 1, value:'Florent'}]),
            adverb: fakerFR.word.adverb(),
            preposition: fakerFR.word.preposition(),
            interjection: fakerFR.word.interjection(),
            verb: fakerFR.word.verb(),
            conjonction: fakerFR.word.conjunction(),
            adjectif: fakerFR.word.adjective(),
            words: fakerFR.word.noun(),
        })
        const comment = {user_id, news_id, content};
        await appendFile(FILENAME6, JSON.stringify(comment))
        }
    await appendFile(FILENAME6, ']');
    console.log('comments created');
}) ();

*/
/*
(async () => {
    await writeFile(FILENAME7, '[');
    for( let photoIndex = 0; photoIndex < 50; photoIndex ++ ) {
        if(photoIndex > 0) {
            await appendFile(FILENAME7, ',\n');
        }
        const galery_id = fakerFR.number.int(10);
        const photo_url = fakerFR.image.urlLoremFlickr({ category: 'association' })
        const content = fakerFR.lorem.sentences({min: 1 , max: 2});
        const photo = {galery_id, photo_url, content};
        await appendFile(FILENAME7, JSON.stringify(photo))
        }
    await appendFile(FILENAME7, ']');
    console.log('photos created');
}) ();
*/

(async () => {
    await writeFile(FILENAME8, '[');
    for( let registrationIndex = 0; registrationIndex < 20; registrationIndex ++ ) {
        if(registrationIndex > 0) {
            await appendFile(FILENAME8, ',\n');
        }
        const user_id = fakerFR.number.int(50);
        const event_id = fakerFR.number.int(5);
        const registration = {user_id, event_id};
        await appendFile(FILENAME8, JSON.stringify(registration))
        }
    await appendFile(FILENAME8, ']');
    console.log('registration created');
}) ();