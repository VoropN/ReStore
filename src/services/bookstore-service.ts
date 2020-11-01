export class BookStoreService {
  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J.Fowler',
      price: 100,
      src: 'https://m.media-amazon.com/images/I/41lIRLqbhAL.jpg'
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T.Nygard',
      price: 200,
      src: 'https://m.media-amazon.com/images/I/51glvDxhBqL.jpg'
    }
  ];

  getBooks() {
    return new Promise((res, rej) => setTimeout(() => res(this.data), 500));
  }
}
