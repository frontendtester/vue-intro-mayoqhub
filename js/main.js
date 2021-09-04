function Student(params) {
  this.name = params.name;
  this.surname = params.surname;
  this.age = params.age;
  this.isMarried = params.isMarried;

  this.study = function () {
    console.log('Dars qivomman');
  };

  this.sleep = function () {
    this.isSleeping = true;
  };

  this.wakeUp = function () {
    this.isSleeping = false;
  };
}

var hojiakbar = new Student({
  name: 'Hojiakbar',
  surname: 'Nurmuhammadov',
  age: 18,
  isMarried: false
});

var asrorbek = new Student({
  name: 'Asrorbek',
  surname: 'Obidjonov',
  age: 21,
  isMarried: false
});

/* var app = new Vue({
  el: '#app',
  data: {
    product: {
      name: 'Paypoq',
      description: 'Issiqqina, kaltamas',
      image: 'https://picsum.photos/id/870/150',
      imageAlt: 'Lighthouse with sky as a background',
      isNew: true,
      rating: 8
    }
  }
}); */

var app = new Vue({
  el: '#app',
  data: {
    movies: [
      {
        id: 'tt0241527',
        title: 'Harry Potter',
        description: 'lorem 1',
        year: 2000,
        likes: 0
      },
      {
        id: 'tt0295297',
        title: 'Harry Potter 2',
        description: 'lorem 2',
        year: 2003,
        likes: 10
      },
      {
        id: 'tt0304141',
        title: 'Harry Potter 3',
        description: 'lorem 3',
        year: 2005,
        likes: 20
      }
    ]
  },
  methods: {
    likeMovie (movie) {
      movie.likes++;
    },
    dislikeMovie (movie) {
      movie.likes--;
    }
  }
});
