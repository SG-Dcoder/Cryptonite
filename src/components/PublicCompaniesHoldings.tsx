import React from 'react';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

interface Company {
  name: string;
  total_holdings: number;
}

const PublicCompaniesHoldings: React.FC = () => {
  const { data, error } = useSWR('https://api.coingecko.com/api/v3/companies/public_treasury/bitcoin', fetcher, { refreshInterval: 60000 });

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h3>Public Companies Holding Bitcoin</h3>
      <ul>
        {data.companies.map((company: Company) => (
          <li key={company.name}>
            <strong>{company.name}</strong>: {company.total_holdings} BTC
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublicCompaniesHoldings;
