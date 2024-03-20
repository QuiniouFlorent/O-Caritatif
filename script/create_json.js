import { fakerFR } from '@faker-js/faker';
import { writeFile , appendFile } from 'node:fs/promises';

const FILENAME = './data/fakeuser.json';
const FILENAME2 = './data/fakenews.json';
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
        const role = 'utilisateur';
        const photo_url = fakerFR.image.url();
        const user = {id, lastName, firstName, email, password, role, photo_url};
        await appendFile(FILENAME, JSON.stringify(user))
        }
    await appendFile(FILENAME, ']');
    console.log('users created');
}) ();
*/
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