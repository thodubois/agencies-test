import React from 'react';
import PropTypes from 'prop-types';

import styles from './Agency.css';

function Agency({ className, name, owner, activity, location }) {
  const startBlock = `{`;
  const nameInfo = ` Nom: ${name},`;
  const ownerInfo = `Responsable: ${owner},`;
  const activityInfo = `Activité: ${activity},`;
  const locationInfo = `Localisation: ${location},`;
  const endBlock = `}`;

  return (
    <div className={`${styles.Agency} ${className || ''}`.trim()}>
      <code>
        {startBlock}
        <span className={styles.Agency__Info}>{nameInfo}</span>
        <span className={styles.Agency__Info}>{ownerInfo}</span>
        <span className={styles.Agency__Info}>{activityInfo}</span>
        <span className={styles.Agency__Info}>{locationInfo}</span>
        {endBlock}
      </code>
    </div>
  );
}

Agency.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  owner: PropTypes.string,
  activity: PropTypes.string,
  location: PropTypes.string,
};

export default Agency;
