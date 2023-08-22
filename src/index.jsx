import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./Books";
import Book from "./Book";

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// } //components above are nested, this is single root component

// const BookList = () => {
//   return (
//     <section className="booklist">
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   );
// };

// const Book = () => {
//   return (
//     <article className="book">
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// };

// const Person = () => <h2>Derek Atiawu</h2>; //implicit return dont have curley brackets
// const Message = () => {
//   return <p>He is learning how to code</p>;
// };

// const PersonOne = () => <p>person one is a good person</p>;

// const Image = () => <img src="./images/book-1.jpg" alt="Iron Flame" />;
// const Title = () => <h2>Iron Flame(The Empyream, 2)</h2>;
// const Author = () => {
//   const inlineHeadingStyles = {
//     color: "black",
//     fontSize: "0.75rem",
//     marginTop: "0.5rem",
//   };
//   return <h4 style={inlineHeadingStyles}>Rebecca Yarros</h4>;
// };

// const author = "Rebecca Yarros";
// const Book = () => {
//   const title = "Iron Flame(The Empyream, 2)";
//   return (
//     <ariticle className="book">
//       <img src="./images/book-1.jpg" alt="Iron Flame" />
//       {/* <h2>Iron Flame(The Empyream, 2)</h2> */}
//       <h2>{title}</h2>
//       {/* <h4>Rebecca Yarros</h4> */}
//       <h4>{author.toUpperCase()}</h4>
//     </ariticle>
//   );
// };

// const books = [
//   {
//     author: "Rebecca Yarros",
//     title: "Iron Flame",
//     img: "./images/book-1.jpg",
//     id: 1,
//   },

//   {
//     author: "Rebecca Yarros",
//     title: "Fourth Wing",
//     img: "./images/book-2.jpg",
//     id: 2,
//   },

//   {
//     author: "James Clear",
//     title: "Atomic Habbits",
//     img: "./images/book-3.jpg",
//     id: 3,
//   },

//   {
//     author: "Bonnie Garmus",
//     title: "Fourth Wing",
//     img: "./images/book-4.jpg",
//     id: 4,
//   },

//   {
//     author: "Abraham Verghesse",
//     title: "The Convenant of Water",
//     img: "./images/book-5.jpg",
//     id: 5,
//   },
// ];

// const author = "Rebecca Yarros";
// const title = "Iron Flame(The Empyream, 2)";
// const img = "./images/book-1.jpg";

// const BookList = () => {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         const { img, title, author, id } = book;
//         return <Book img={img} title={title} author={author} key={id} />;
//       })}
//     </section>
//   );
// };

//passing the entire object as props, instead of the above
// const BookList = () => {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         return <Book book={book} key={book.id} />;
//       })}
//     </section>
//   );
// };

//you can use the SPREAD operator if you want to pass entire object as props
const BookList = () => {
  return (
    <>
      <h1>Book Shop</h1>
      <section className="booklist">
        {/* <EventExamples /> */}
        {books.map((book, list) => {
          return <Book {...book} key={book.id} number={list} />;
        })}
      </section>
    </>
  );
};

// practicing on event and eventhandlers
const EventExamples = () => {
  const handleFormInput = (e) => {
    // console.log(e);
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log("handle form input");
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section>
      <form>
        <h2>Buy a Book</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
        <button type="submit" onClick={handleFormSubmission}>
          Submit
        </button>
        <div>
          <button onClick={handleButtonClick} type="button">
            click me
          </button>
        </div>
      </form>
    </section>
  );
};

//learning how to pass props, always state the property name and value before you pass the property name as props.propertyname

// const Book = (props) => {
//   return (
//     <ariticle className="book">
//       <img src={props.img} alt={props.title} />
//       <h2>{props.title}</h2>
//       <h4>{props.author.toUpperCase()}</h4>
//       {/* <h6>{props.job}</h6>
//       <h6>{props.title}</h6>*/}
//       <h6>{props.number}</h6>
//     </ariticle>
//   );
// };

// const Book = (props) => {
//   const { img, title, author } = props;
//   return (
//     <ariticle className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author.toUpperCase()}</h4>
//       {/* <h6>{props.job}</h6>
//       <h6>{props.title}</h6>*/}
//       <h6>{props.number}</h6>
//     </ariticle>
//   );
// };

//how to destructure props, do this by replacing the props in the bracket with the individual variables

// const Book = ({ img, title, author, children }) => {
//   return (
//     <ariticle className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       {children}
//       <h4>{author.toUpperCase()}</h4>
//     </ariticle>
//   );
// };

//passing objects as props
// const Book = (props) => {
//   const { img, title, author } = props.book;
//   return (
//     <ariticle className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </ariticle>
//   );
// };

//passing object as props via spread operator
// const Book = (props) => {
//   const { img, title, author } = props;
//   return (
//     <ariticle className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </ariticle>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
