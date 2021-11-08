export const printProps = (WrappedComponent) => {
  return (props) => {
      console.log(props);
    return <WrappedComponent {...props} />;
  };
};
