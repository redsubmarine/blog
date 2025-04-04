import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import RssLinks from '@site/src/components/RssLinks';

export default function Layout(props) {
  return (
    <>
      <RssLinks />
      <OriginalLayout {...props} />
    </>
  );
}
