import React, { Component, useState } from 'react';
import { createPortal } from 'react-dom';
import ReactDOM from 'react-dom/client';
import {
  AppLayout,
  ContentLayout,
  Header,
  Input,
  TopNavigation
} from '@cloudscape-design/components';
 import "@cloudscape-design/global-styles/index.css"

const i18nStrings = {
  searchIconAriaLabel: 'Search',
  searchDismissIconAriaLabel: 'Close search',
  overflowMenuTriggerText: 'More',
  overflowMenuTitleText: 'All',
  overflowMenuBackIconAriaLabel: 'Back',
  overflowMenuDismissIconAriaLabel: 'Close menu',
};

const Content = () => {
  return (
      <ContentLayout header={<Header variant="h1">Run simulation</Header>}>
      </ContentLayout>
    );
  }


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
  return (
    <>
      <DocWriterHeaderPortal>
        <TopNavigation
          i18nStrings={i18nStrings}
          identity={{
            href: '#',
            title: 'Service name',
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
      <AppLayout
        contentType="form"
        content={Content()}
        //breadcrumbs={<Breadcrumbs />}
        //navigation={<Navigation activeHref="#/distributions" />}
        toolsHide={true}
      //notifications={<Notifications />}
      />
    </>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
