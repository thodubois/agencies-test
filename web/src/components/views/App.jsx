import React from 'react';
import Dropdown, { EMPTY_ITEM } from '../Dropdown/Dropdown';
import Agency from '../Agency/Agency';
import styles from './App.css';
import { useAgencies } from '../../api/agency';
import { useLocalStorage } from '../../helpers/localstorage';

export const App = () => {
  const [currentAgencyId, setcurrentAgencyId] = useLocalStorage('agency', '');
  const { result: agencies, loading, error } = useAgencies();

  const currentAgency = agencies.find((agency) => agency.id === currentAgencyId) || {};

  const dropdownItems = agencies.map(({ id, name }) => ({
    id,
    label: name,
  }));

  const dropdownValue =
    typeof currentAgencyId === 'string' && currentAgencyId !== ''
      ? dropdownItems.reduce(
          (item, current) => (current.id === currentAgencyId ? current : item),
          EMPTY_ITEM,
        )
      : EMPTY_ITEM;

  const handleDropdownChange = (item) => {
    setcurrentAgencyId(item.id);
  };

  const loaded = !loading && !error;

  if (error && !loading) return 'Une erreure est survenue';

  if (!agencies.length && loaded) return 'Aucune agence trouvée';

  return (
    <div className={styles.App}>
      <Dropdown
        className={`${styles.App__Dropdown} ${styles.App__Animated_Block} ${
          loaded ? styles['App__Animated_Block--loaded'] : ''
        }`.trim()}
        items={dropdownItems}
        onChange={handleDropdownChange}
        title="Choisir une agence"
        placeholder="Aucun agence selectionnée"
        value={dropdownValue}
      />
      <Agency
        className={`${styles.App__Animated_Block} ${
          currentAgency.id ? styles['App__Animated_Block--loaded'] : ''
        }`.trim()}
        name={currentAgency.name}
        owner={currentAgency.owner}
        activity={currentAgency.activity}
        location={currentAgency.location}
      />
    </div>
  );
};
