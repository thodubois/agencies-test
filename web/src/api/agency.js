import { useState, useEffect } from 'react';

const AGENCY_URL = `${process.env.API_URL}/agency`;

// Format agency item
export const formatAgency = (item) => ({
  id: item?.id ?? '',
  name: item?.name ?? '',
  owner: item?.owner ?? '',
  location: item?.location ?? '',
  activity: item?.activity ?? '',
});

export const useAgencies = () => {
  // Manage request state loading, error and result
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  const [result, setresult] = useState([]);

  const fetchAgencies = async () => {
    try {
      // Fetch agency url
      const response = await fetch(AGENCY_URL, {
        method: 'GET',
        mode: 'cors',
        'Content-Type': 'application/json',
      });
      const agencies = await response.json();
      // Format result in case of change
      setresult(agencies.map((agency) => formatAgency(agency)));
    } catch (e) {
      // Set error in case of
      seterror(e);
    }
    // End loading
    setloading(false);
  };

  useEffect(() => {
    fetchAgencies();
  }, []);

  return { result, loading, error };
};
