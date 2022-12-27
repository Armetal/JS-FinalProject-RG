function findMovies(favoriteGenre) {
  const movies = [
    {
      id: 1,
      name: 'Avengers end game',
      genre: 'Action',
      soldTicket: 149,
      capacity: 150,
    },
    {
      id: 2,
      name: 'La la Land',
      genre: 'Romance',
      soldTicket: 20,
      capacity: 75,
    },
    {
      id: 3,
      name: 'Beauty and the Beast',
      genre: 'Romance',
      soldTicket: 50,
      capacity: 50,
    },
    {
      id: 4,
      name: 'Superman vs Batman',
      genre: 'Action',
      soldTicket: 150,
      capacity: 250,
    },
    {
      id: 5,
      name: 'Transformer',
      genre: 'Action',
      soldTicket: 90,
      capacity: 90,
    },
    {
      id: 6,
      name: '5 feet apart',
      genre: 'Romance',
      soldTicket: 25,
      capacity: 45,
    },
    {
      id: 7,
      name: 'Hamilton',
      genre: 'Musical',
      soldTicket: 295,
      capacity: 300,
    },
    {
      id: 8,
      name: 'Dear Evan Hansen',
      genre: 'Musical',
      soldTicket: 150,
      capacity: 200,
    },
    {
      id: 9,
      name: 'Conjuring',
      genre: 'Horror',
      soldTicket: 30,
      capacity: 100,
    },
    {
      id: 10,
      name: 'Annabelle',
      genre: 'Horror',
      soldTicket: 10,
      capacity: 30,
    },
    {
      id: 11,
      name: 'Fast and Furios',
      genre: 'Action',
      soldTicket: 25,
      capacity: 40,
    },
    {
      id: 12,
      name: 'Romeo and Julet',
      genre: 'Romance',
      soldTicket: 15,
      capacity: 15,
    },
    {
      id: 13,
      name: 'Wicked',
      genre: 'Musical',
      soldTicket: 75,
      capacity: 75,
    },
  ];
  return movies.filter((x) => favoriteGenre.includes(x.genre));
}

function findTicketAvailability(movie, user) {
  return movie.capacity - movie.soldTicket >= user.ticket ? true : false;
}

function findRecommendation(user) {
  return findMovies(user.favoriteGenre).filter((x) => x.capacity - x.soldTicket >= user.ticket);
}

// const Act = 100000;
// const Mus = 80000;
// const Rom = 40000;
// const Hor = 75000;

function generateRecommendation(user) {
  if (findRecommendation(user).length === 0) {
    return 'Tidak ada film yang sesuai kriteria';
  } else {
    // console.log('test', findRecommendation(user).map(x => ({id: x.id, name: x.name, totalPrice: user.ticket * 100000})));
    return findRecommendation(user).map((x) => ({
      id: x.id,
      name: x.name,
      genre: x.genre,
      totalPrice: x.genre === 'Action' ? 100000 * user.ticket : x.genre === 'Musical' ? 80000 * user.ticket : x.genre === 'Romance' ? 40000 * user.ticket : x.genre === 'Horror' ? 75000 * user.ticket : '',
    }));
  }
}

// const test = {
//   name: 'Eddy',
//   ticket: 10,
//   favoriteGenre: ['Musical', 'Romance']
// }

// console.log('test', generateRecommendation(test));

module.exports = {
  findMovies,
  findTicketAvailability,
  findRecommendation,
  generateRecommendation,
};
