import { fakerFR } from '@faker-js/faker';
import { writeFile , appendFile } from 'node:fs/promises';

const FILENAME = './data/fakeuser.json';

(async () => {
    await writeFile(FILENAME, '[');
    for( let userIndex = 0; userIndex < 15; userIndex++ ) {
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