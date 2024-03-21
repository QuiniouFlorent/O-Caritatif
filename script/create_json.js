import { fakerFR } from '@faker-js/faker';
import { writeFile , appendFile } from 'node:fs/promises';

const FILENAME = './data/fakeuser.json';
const FILENAME2 = './data/fakenews.json';
const FILENAME3 = './data/fakeevent.json';
/*
(async () => {
    await writeFile(FILENAME, '[');
    for( let userIndex = 0; userIndex < 15; userIndex ++ ) {
        if(userIndex > 0) {
            await appendFile(FILENAME, ',\n');
        }
        const id = fakerFR.number.int(100);
        const lastName = fakerFR.person.lastName();
        const firstName = fakerFR.person.firstName();
        const email = fakerFR.internet.email({firstName, lastName});
        const password = fakerFR.internet.password();
        const role = fakerFR.helpers.arrayElement(['utilisateur','responsable','administrateur']);
        const photo_url = fakerFR.image.url();
        const user = {id, lastName, firstName, email, password, role, photo_url};
        await appendFile(FILENAME, JSON.stringify(user))
        }
    await appendFile(FILENAME, ']');
    console.log('users created');
}) ();
*/
/*
(async () => {
    await writeFile(FILENAME2, '[');
    for( let newsIndex = 0; newsIndex < 20; newsIndex ++ ) {
        if(newsIndex > 0) {
            await appendFile(FILENAME2, ',\n');
        }
        const id = fakerFR.number.int(100);
        const category = fakerFR.commerce.department();
        const title = fakerFR.lorem.sentence({min: 4, max: 10});
        const summary = fakerFR.lorem.sentences({min: 2 , max: 4});
        const content = fakerFR.lorem.paragraphs();
        const author = fakerFR.person.fullName();
        const photo_url = fakerFR.image.url();
        const news = {id, category, title, summary, content, author, photo_url};
        await appendFile(FILENAME2, JSON.stringify(news))
        }
    await appendFile(FILENAME2, ']');
    console.log('news created');
}) ();
*/

(async () => {
    await writeFile(FILENAME3, '[');
    for( let eventIndex = 0; eventIndex < 25; eventIndex ++ ) {
        if(eventIndex > 0) {
            await appendFile(FILENAME3, ',\n');
        }
        const id = fakerFR.number.int(100);
        const category = fakerFR.commerce.department();
        const title = fakerFR.word.words({min: 2, max:5 });
        const photo_url = fakerFR.image.urlPicsumPhotos();
        const description = fakerFR.commerce.productDescription();
        const date = fakerFR.date.future();
        const calendar_url = fakerFR.internet.url();
        const place = fakerFR.location.city();
        const author = fakerFR.person.fullName();
        const event = {id, category, title, author, photo_url, description, date, calendar_url, place};
        await appendFile(FILENAME3, JSON.stringify(event))
        }
    await appendFile(FILENAME3, ']');
    console.log('events created');
}) ();