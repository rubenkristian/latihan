class Book {
  constructor(public time: number, public alice: number, public bob: number) {}
}

function solve(totalChosenBooks: number, listBook: Array<Book>) {
  let result = 0;
  let chosenRead: Array<Book> = [];

  let checkTempAlice: Book = null;
  let checkTempBob: Book = null;

  for (let i = 0; i < listBook.length; i++) {
    const book = listBook[i];
    if (book.alice === 1 && book.bob === 1) {
      chosenRead.push(book);
    } else if (book.alice === 1) {
      if (checkTempBob) {
        chosenRead.push(checkTempBob, book);
        checkTempBob = null
      } else {
        checkTempAlice = book;
      }
    } else if (book.bob === 1) {
      if (checkTempAlice) {
        chosenRead.push(checkTempAlice, book);
        checkTempAlice = null
      } else {
        checkTempBob = book;
      }
    }
  }
  
  if (chosenRead.length >= totalChosenBooks) {
    for (let i = 0; i < chosenRead.length; i++) {
      result += chosenRead[i].time;
    }
    return result;
  }
  return -1;
}

class Main {
  constructor(private totalChosenBooks: number, private listBook: Array<Book>) {}

  printResult() {
    let result = solve(this.totalChosenBooks, this.listBook);
    console.log(result);
  }
}

new Main(4, [
  new Book(7, 1, 1),
  new Book(2, 1, 1),
  new Book(4, 0, 1),
  new Book(8, 1, 1),
  new Book(1, 0, 1),
  new Book(1, 1, 1),
  new Book(1, 0, 1),
  new Book(3, 0, 1)
]).printResult();


new Main(2, [
  new Book(6, 0, 0),
  new Book(9, 0, 0),
  new Book(1, 0, 1),
  new Book(2, 1, 1),
  new Book(5, 1, 0)
]).printResult();


new Main(3, [
  new Book(3, 0, 0),
  new Book(2, 1, 0),
  new Book(3, 1, 0),
  new Book(5, 0, 1),
  new Book(3, 0, 1),
]).printResult();