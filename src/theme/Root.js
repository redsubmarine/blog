import React from 'react';
import Root from '@theme/Root';
import RssLinks from '@site/src/components/RssLinks';

export default function RssHeadLinksWrapper({children}) {
  return (
    <Root>
      <RssLinks />
      {children}
    </Root>
  );
}
