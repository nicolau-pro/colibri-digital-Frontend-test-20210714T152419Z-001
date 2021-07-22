const Button = (props) => {
  return (
    <button onClick={props.onClick} className={props.big ? 'big' : null}>
      <i className={`im im-${props.icon}`} />
      {props.children}
    </button>
  );
};

export default Button;
