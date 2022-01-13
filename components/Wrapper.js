const Wrapper = (props) => {
  const wrapper = {
    maxWidth: "2500px",
    width: "90%",
    margin: "0 auto",
  };

  return <div style={wrapper}>{props.children}</div>;
};

export default Wrapper;
