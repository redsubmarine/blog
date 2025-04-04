import React from 'react';
import {Head} from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function RssLinks() {
  const {siteConfig} = useDocusaurusContext();
  const {
    title,
  } = siteConfig;
  
  const rssUrl = useBaseUrl('/rss.xml');
  const atomUrl = useBaseUrl('/atom.xml');
  
  return (
    <Head>
      <link
        rel="alternate"
        type="application/rss+xml"
        title={`${title} RSS Feed`}
        href={rssUrl}
      />
      <link
        rel="alternate"
        type="application/atom+xml"
        title={`${title} Atom Feed`}
        href={atomUrl}
      />
    </Head>
  );
}
