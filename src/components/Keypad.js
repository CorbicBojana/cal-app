import React from "react";

function Keypad(props) {
  const { handleClick, disabledButton, disabledBracket } = props;

  return (
    <div className="keypad">
      <div className="keypad-flex">
        <button
          className="button"
          name="("
          onClick={e => handleClick(e.target.name)}
        >
          (
        </button>
        <button
          className="button"
          name="CE"
          onClick={e => handleClick(e.target.name)}
        >
          CE
        </button>
        <button
          className="button"
          name=")"
          onClick={e => handleClick(e.target.name)}
          disabled={disabledBracket}
        >
          )
        </button>
        <button
          className="button"
          name="C"
          onClick={e => handleClick(e.target.name)}
        >
          C
        </button>
      </div>

      <div className="keypad-flex">
        <button
          className="button"
          name="1"
          onClick={e => handleClick(e.target.name)}
        >
          1
        </button>
        <button
          className="button"
          name="2"
          onClick={e => handleClick(e.target.name)}
        >
          2
        </button>
        <button
          className="button"
          name="3"
          onClick={e => handleClick(e.target.name)}
        >
          3
        </button>
        <button
          className="button"
          name="+"
          onClick={e => handleClick(e.target.name)}
          disabled={disabledButton}
        >
          +
        </button>
      </div>

      <div className="keypad-flex">
        <button
          className="button"
          name="4"
          onClick={e => handleClick(e.target.name)}
        >
          4
        </button>
        <button
          className="button"
          name="5"
          onClick={e => handleClick(e.target.name)}
        >
          5
        </button>
        <button
          className="button"
          name="6"
          onClick={e => handleClick(e.target.name)}
        >
          6
        </button>
        <button
          className="button"
          name="-"
          onClick={e => handleClick(e.target.name)}
          disabled={disabledButton}
        >
          -
        </button>
      </div>

      <div className="keypad-flex">
        <button
          className="button"
          name="7"
          onClick={e => handleClick(e.target.name)}
        >
          7
        </button>
        <button
          className="button"
          name="8"
          onClick={e => handleClick(e.target.name)}
        >
          8
        </button>
        <button
          className="button"
          name="9"
          onClick={e => handleClick(e.target.name)}
        >
          9
        </button>
        <button
          className="button"
          name="*"
          onClick={e => handleClick(e.target.name)}
          disabled={disabledButton}
        >
          x
        </button>
      </div>

      <div className="keypad-flex">
        <button
          className="button"
          name="."
          onClick={e => handleClick(e.target.name)}
        >
          .
        </button>
        <button
          className="button"
          name="0"
          onClick={e => handleClick(e.target.name)}
        >
          0
        </button>
        <button
          className="button"
          name="="
          onClick={e => handleClick(e.target.name)}
        >
          =
        </button>
        <button
          className="button"
          name="/"
          onClick={e => handleClick(e.target.name)}
          disabled={disabledButton}
        >
          ÷
        </button>
      </div>
    </div>
  );
}

export default Keypad;
