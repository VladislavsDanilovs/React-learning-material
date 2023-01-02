import "./Card.css";

const Card = (props) => {
  // with that we're now making sure that any value set on the class name prop
  // is added to this long string of class names which is then finally set on the div inside of the card.
  const classes = "card " + props.className;

  // props.children means that content between the opening and closing card tag will be available
  return <div className={classes}>{props.children}</div>;
};

export default Card;
