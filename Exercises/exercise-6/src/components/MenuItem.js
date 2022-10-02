const MenuItem = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.price}
      </p>
      <button onClick={() => props.remove(props.id)}>Delete</button>
    </div>
  );
};

export default MenuItem;
