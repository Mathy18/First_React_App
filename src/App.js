import React from "react";

function App() {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar"></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            Indu
          </a>
          <div className="metadata"></div>
          Today 6:00 pm
          <div className="text">Nice blog post</div>
        </div>
      </div>
    </div>
  );
};

export default App;