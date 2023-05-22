import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  Input,
  TopNavigation
} from '@cloudscape-design/components';
import PRFAQPage from './pages/PRFAQ/PRFAQPage';

const i18nStrings = {
  searchIconAriaLabel: 'Search',
  searchDismissIconAriaLabel: 'Close search',
  overflowMenuTriggerText: 'More',
  overflowMenuTitleText: 'All',
  overflowMenuBackIconAriaLabel: 'Back',
  overflowMenuDismissIconAriaLabel: 'Close menu',
};

interface PortalProps {
  children: React.ReactNode;
}

const DocWriterHeaderPortal = ({ children }: PortalProps): JSX.Element => {
  const domNode: HTMLElement | null = document.querySelector('#h');
  if (!domNode) {
    throw new Error('Could not find #h');
  }
  return createPortal(children, domNode);
}

function App() {
  const [searchValue, setSearchValue] = useState<string>('');
  const[pageName, setPageName]=useState('Default page name');
  return (
    <>
      <DocWriterHeaderPortal>
        <TopNavigation
          i18nStrings={i18nStrings}
          identity={{
            href: '#',
            title: pageName,
            //logo: { src: logo, alt: 'Service name logo' },
          }}
          search={
            <Input
              ariaLabel="Input field"
              clearAriaLabel="Clear"
              value={searchValue}
              type="search"
              placeholder="Search"
              onChange={({ detail }) => setSearchValue(detail.value)}
            />
          }
        />
      </DocWriterHeaderPortal>
      <Router>
        <Routes>
          <Route path="/prfaq" element={<PRFAQPage setPageName={setPageName} />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
