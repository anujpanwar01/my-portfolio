const ALink = function ({ link, children, ...otherProps }) {
  return (
    <a href={link} {...otherProps}>
      {children}
    </a>
  );
};

export default ALink;
