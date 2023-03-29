import "./styles.css";

function Button({id, onClick}) {
  return (
    <div className="button">
      <button id={id} onClick={onClick}>Let’s go!</button>
    </div>
  )
}

export default Button;