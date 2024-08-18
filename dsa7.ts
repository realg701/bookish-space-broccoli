/*
Day:7

Question 1: OOP Related

Create a TypeScript class Book that has properties for title, author, publicationYear, and genre. The class should have methods to:
1. Display the book details.
2. Check if the book is a recent publication (within the last 5 years).
3. Change the genre of the book.
4. Check if the book's author matches a given author name.

*Hints:*
- Use console.log to print book details in the displayDetails method.
- In the isRecent method, get the current year using new Date().getFullYear() and compare it with publicationYear.
- Update the genre property in the changeGenre method.
- In the isAuthor method, compare the author property with the given author name.
*/

class Book {
  title: string;
  author: string;
  publicationYear: number;
  genre: string;

  constructor(
    title: string,
    author: string,
    publicationYear: number,
    genre: string
  ) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.genre = genre;
  }

  displayDetails(): void {
    console.log(
      "\nTitle: " + this.title,
      "\nAuthor: " + this.author,
      "\nPublished: " + this.publicationYear,
      "\nGenre: " + this.genre
    );
  }

  isRecent() {
    const currentYear = new Date().getFullYear();
    return ["Is recent publication ", this.publicationYear + 5 >= currentYear];
  }

  changeGenre(genre: string) {
    this.genre = genre;
    return "Genre changed to " + this.genre;
  }

  isAuthor(author: string) {
    return this.author === author
      ? "Author matches"
      : "Author does not matches";
  }
}

const myBookClass = new Book(
  "Harry Potter and the Cursed Child",
  "J. K. Rowling",
  2016,
  "Fantasy"
);

console.log(myBookClass.displayDetails());
console.log(myBookClass.isRecent());
console.log(myBookClass.changeGenre("Magical"));
console.log(myBookClass.isAuthor("J. K. Rowling"));

/*
 Question 2: Nested Object with Interfaces

Create an interface Person that includes properties for name, age, email, phone, and addresses. The addresses property should be an array of objects, each containing street, city, state, and zipcode. Write a function to find the first person living in a specific city and return their name and email.

*Hints:*
- Define the Address and Person interfaces with the required properties.
- Use nested loops to iterate through the people array and each person's addresses array.
- Check if the city property matches the given city in the function.
- Return the name and email of the first matching person or undefined if no match is found.
*/

interface Address {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

interface Person {
  name: string;
  age: number;
  email: string;
  phone: string;
  addresses: Address[];
}

const people: Person[] = [
  {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
    phone: "123-456-7890",
    addresses: [
      { street: "123 Main St", city: "Seattle", state: "WA", zipcode: "98101" },
      { street: "456 Elm St", city: "Bellevue", state: "WA", zipcode: "98004" },
    ],
  },
  {
    name: "Bob",
    age: 25,
    email: "bob@example.com",
    phone: "987-654-3210",
    addresses: [
      { street: "789 Oak St", city: "Redmond", state: "WA", zipcode: "98052" },
      { street: "101 Pine St", city: "Seattle", state: "WA", zipcode: "98102" },
    ],
  },
];

const findPerson = (people: Person[], city: string) => {
  for (let i = 0; i < people.length; i++) {
    const element = people[i];
    for (let j = 0; j < element.addresses.length; j++) {
      const address = element.addresses[j];
      if (address.city === city) {
        return `Name: ${people[i].name} \nEmail: ${people[i].email}`;
      } else {
        return undefined;
      }
    }
  }
};

const city: string = "Seattle";

console.log(findPerson(people, city));
