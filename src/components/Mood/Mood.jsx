import React from "react";
import "./Mood.css";

function Mood() {
  return (
    <div className="mood_container">
      <h3 className="mood_emoji_heading">How`s your mood today?</h3>
      <ul className="mood_emoji_list">
        <li>
          <button>😔</button>
        </li>
        <li>
          <button>🙁</button>
        </li>
        <li>
          <button>😐</button>
        </li>
        <li>
          <button>🙂</button>
        </li>
        <li>
          <button>😀</button>
        </li>
      </ul>
    </div>
  );
}

export default Mood;
