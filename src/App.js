import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "😘": "Face Blowing a Kiss",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "No Expression",
  "😶": "Face Without Mouth",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "😪": "Sleepy Face",
  "😴": "Sleeping Face",
  "😡": "Pouting Face",
  "😠": "Angry Face",
  "🤕": "Face with Head-Bandage",
  "🤢": "Nauseated Face",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing Face",
  "🥵": "Hot Face",
  "😈": "Smiling Face with Horns",
  "👿": "Angry Face with Horns",
  "😎": "Smiling Face with Sunglasses"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry, we don't have this in our Database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    // processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  }

  return (
    <div className="background">
      <div className="App">
        <h1>
          Welcome to <span style={{ color: "red" }}>Emoji Interpretor</span>
        </h1>
        <p>Having difficulty understanding emoji's? Take help here! 🎈</p>
        <input
          className="input"
          placeholder="Enter Emoji's"
          onChange={emojiInputHandler}
        />
        <div className="output">{meaning} </div>

        <h3>Most used Emoji's</h3>

        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "2rem",
                padding: "0.5rem",
                cursor: "pointer",
                justifyContent: "center",
                margin: "auto"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
