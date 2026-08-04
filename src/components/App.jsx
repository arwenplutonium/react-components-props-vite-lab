import React from "react";
import blogData from "../data/blog";

console.log(blogData);
function Header(props) {
  return (
    <header>
      <h1>{props.name}</h1>
    </header>
  );
}
function About(props) {
  return (
    <aside>
      <img src={props.image} alt="blog logo" />
      <p>{props.about}</p>
    </aside>
  );
}
function ArticleList(props) {
  return (
    <main>
      {props.posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}
function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}
function Article(props) {
  return (
    <article>
      <h3>{props.title}</h3>
      <small>{props.date}</small>
      <p>{props.preview}</p>
    </article>
  );
}

export default App;
