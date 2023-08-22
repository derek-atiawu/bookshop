# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## creating an object method for the book to clear the property and variables

const firstBook = {
author: "Rebecca Yarros",
title: "Iron Flame",
img: "./images/book-1.jpg",
};

const secondBook = {
author: "Rebecca Yarros",
title: "Fourth Wing",
img: "./images/book-2.jpg",
};

const thirdBook = {
author: "James Clear",
title: "Atomic Habbits",
img: "./images/book-3.jpg",
};

const fourthBook = {
author: "Bonnie Garmus",
title: "Fourth Wing",
img: "./images/book-4.jpg",
};

const fifthBook = {
author: "Abraham Verghesse",
title: "The Convenant of Water",
img: "./images/book-5.jpg",
};

### component which renders the book

const BookList = () => {
return (

<section className="booklist">
{/_ <Book top={author} midle={title} below={img} /> _/}
<Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quidem
ab minima tenetur fuga? Sapiente, facere iure architecto ut earum eos
alias perspiciatis in maiores, veniam dolore, cumque nam fugiat.
</p>
</Book>
<Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
<Book
        author={thirdBook.author}
        title={thirdBook.title}
        img={thirdBook.img}
      />
<Book
        author={fourthBook.author}
        title={fourthBook.title}
        img={fourthBook.img}
      />
<Book
        author={fifthBook.author}
        title={fifthBook.title}
        img={fifthBook.img}
      />
</section>
);
};

### children prop

everything we render between component tags
during the course will mostly use it context API
can place anywhere in JSX

function BookList(){
return(

<section className='booklist' >
<Book  
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
        />
<p>
write anything as a parargraph to this book
</p>
</section>
)
}

const Book = ({img, author, title, children}) =>{
return(

<article className='book'>
<img src={img} alt{tile}/>
<h2>{title}</h2>
<h4>{author}</h4>
{children}
</article>
)
}

### declaring a map call back function in two ways

one
const names = ['john', 'peter'];
const newName = names.map((name)=>{
retrun<h1>{name}</h1>
}),

two
const BookList = () => {
return(

<section className='booklist'>
{names.map((name)=>{
return <h1>{name}</h1>
})}

        </section>
    )

}

three
const BookList = () => {
return <section className='booklist'>{newName}</section>;
}

const BookList = () => {
return (

<section className="booklist">
{books.map((book) => {
const { img, title, author, id } = book;
return <Book book={book} />;
})}
</section>
);
};

### key or index

always use key instead of index, you may use index if you think your data will never change.

### passing the entire object as props

- render component
- pass entire object
- destructuring (object)

const BookList = () => {
return (

<section className="booklist">
{books.map((book) => {
return <Book book={book} key={book.id} />;
})}
</section>
);
};

### using the spread operator

- utilize the spread operator (...) - copy values
  example
  const friends = ['John', 'Peter'];
  const newFriends = [...friends, 'Liz'];
  you can console.log two outcomes
  console.log (friends); which will output John and Peter
  or console.log (newFriends); which will output John Peter and Liz

additionally:
const someObject = {
name: 'John',
job: 'developer',
}
spreading
const newObject = {...someobject, location: 'Florida'};
console.log(someObject); will equal John, developer.
console.log(newObject); will equal John, developer, florida

### adding event and eventListeners

- element,event, function
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
  <form onSubmit={handleFormSubmission}>
  <h2>Typical Form</h2>
  <input
  type="text"
  name="example"
  onChange={handleFormInput}
  style={{ margin: "1rem 0" }}
  />
  <button type="submit">Submit</button>
  </form>
  <button onClick={handleButtonClick} type="button">
  click me
  </button>
  </section>
  );
  };

  ### ways of from submission

  1 <form onSubmit={handleFormSubmission} >

  <buttion type='submit'>submit</button>
  </form>

  2
  <form>
  <button type='submit' onClick={handleFormSubmission} >submit</button>
  </form>

### passing ananymous function also serves the same purpose as submiting event or event handlers

eg
const EventExample = () =>{
return(

<section>
<input>
type='text',
name='product',
onchange={(e)=>console.log(e.target.value)}
</input>
<button onClick={()=>console.log('click me')} ></button>Click me
</section>
)
}

### Mind Gernade, another ananymous function

const Book = (props) =>{
const {img, title, author} = props;
const displayTitle = () =>{
console.log(title);
};

return(

<article>
<img src={img} alt={title} >
<h2>{title}</h2>
<button onClick={displayTitle} >display title</button>
<h4>{author}</h4>
</article>
)
};

### Prop Drilling

- react data flow - can only pass props down
  -alternatives Context API, redus, other state libraries

function BookList () {
const someValue = 'shakeAnd Bake';
const displayValue = () => {
console.log(someValue);
};
return (

<section className="booklist">
{books.map((book) => {
return <Book book={book} key={book.id} displayValue={displayValue} />;
})}
</section>
);
};

const Book = (props) =>{
const {img, author, title, displayValue} = props;

return(

<article className='book'>
<img src={img} alt{tile}/>
<h2>{title}</h2>
<h4>{author}</h4>
<button onClick={displayValue}  >click me</button>
</article>
)
}
}

### Local images in src folder

- better performance bcos optimized

### Build Production Application

-stop the deve server "ctrl + c"
-run npm run build
build folder gerts created

### Netlify , host project to be opened online by elsewhere

-sign up
-add new site/deploy mannually
-choose build folder
-rename site - site settings/change site name
