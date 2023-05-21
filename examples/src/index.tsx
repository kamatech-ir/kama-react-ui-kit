import React from 'react';
import ReactDOM from 'react-dom/client';
import { KamaSample } from 'kama-react-ui-kit';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <div>
      <h2>Default KamaSample</h2>
      <KamaSample />
    </div>
    <hr />
    <div>
      <h2>KamaSample with predefined value</h2>
      <KamaSample defaultValue={5} />
    </div>
  </React.StrictMode>,
);
