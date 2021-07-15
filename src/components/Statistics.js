import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
  <section>
    {title && <h2>{title}</h2>}

    <ul>
      {stats.map(stat => (
        <li key={stat.id}>
          <span>{stat.label}</span>
          <span>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: PropTypes.string,
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
      id: PropTypes.string,
    }),
  ).isRequired,
};
export default Statistics;
