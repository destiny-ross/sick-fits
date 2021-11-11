import PropTypes from 'prop-types';

export default function Page({ children }) {
  return (
    <div>
      <p>I am page</p>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
