import React from 'react';
import {
  AppLayout,
  ContentLayout,
  Header,
} from '@cloudscape-design/components';
 import "@cloudscape-design/global-styles/index.css"

const Content = () => {
  return (
      <ContentLayout header={<Header variant="h1">Run simulation</Header>}>
      </ContentLayout>
    );
  }

type PRFAQPageProps = {
    setPageName: (name: string) => void;
};

const PRFAQPage: React.FC<PRFAQPageProps> = ({ setPageName }) => {
  setPageName('PRFAQ');
  return (
    <>
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

export default PRFAQPage;