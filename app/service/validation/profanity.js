import leoProfanity from 'leo-profanity';
import frenchBadwordsList from 'french-badwords-list';

const filter = leoProfanity.add(frenchBadwordsList.array);

export default filter;