import { Book } from '../models/book.model';

export const BOOKS: Book[] = [
  {
    id: '1',
    title: 'Le Petit Prince',
    author: 'Antoine de Saint-Exupéry',
    description:
      "Un pilote d'avion, échoué dans le désert du Sahara, rencontre un petit garçon venu des étoiles.",
    category: 'roman',
    rating: 4,
    isFavorite: true,
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    description:
      'Une dystopie qui décrit un futur où la société est soumise à une dictature totalitaire.',
    category: 'scienceFiction',
    rating: 5,
    isFavorite: false,
  },
  {
    id: '3',
    title: "Harry Potter à l'école des sorciers",
    author: 'J.K. Rowling',
    description:
      "Le premier tome de la série Harry Potter qui raconte les aventures d'un jeune sorcier.",
    category: 'fantasy',
    rating: 4,
    isFavorite: true,
  },
  {
    id: '4',
    title: 'Les Misérables',
    author: 'Victor Hugo',
    description:
      "Un roman qui suit la vie et les luttes de l'ex-bagnard Jean Valjean.",
    category: 'roman',
    rating: 3,
    isFavorite: false,
  },
  {
    id: '5',
    title: "L'Étranger",
    author: 'Albert Camus',
    description:
      "Un homme qui assiste à l'enterrement de sa mère sans manifester de tristesse et qui, quelques jours plus tard, tue un Arabe.",
    category: 'roman',
    rating: 4,
    isFavorite: false,
  },
  {
    id: '6',
    title: 'Le Seigneur des Anneaux',
    author: 'J.R.R. Tolkien',
    description:
      "Un livre qui raconte les aventures d'un jeune homme qui doit détruire un anneau maudit.",
    category: 'fantasy',
    rating: 5,
    isFavorite: true,
  },
  {
    id: '7',
    title: 'Moby Dick',
    author: 'Herman Melville',
    description:
      "Un livre qui raconte les aventures d'un capitaine de bateau qui doit détruire un baleine.",
    category: 'roman',
    rating: 5,
    isFavorite: true,
  },
  {
    id: '8',
    title: 'Le Comte de Monte-Cristo',
    author: 'Alexandre Dumas',
    description:
      "Un livre qui raconte les aventures d'un homme qui doit détruire un comte.",
    category: 'roman',
    rating: 5,
    isFavorite: true,
  },
  {
    id: '9',
    title: 'Le Parfum',
    author: 'Patrick Süskind',
    description:
      "Un livre qui raconte les aventures d'un parfumeur qui doit détruire un parfum.",
    category: 'roman',
    rating: 5,
    isFavorite: true,
  },
  {
    id: '10',
    title: 'Titanic',
    author: 'James Cameron',
    description: "Un livre qui raconte les aventures d'un bateau qui coule.",
    category: 'scienceFiction',
    rating: 5,
    isFavorite: true,
  },
];
