import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BlogPostItem from '@theme/BlogPostItem';
import {BlogPostProvider} from '@docusaurus/theme-common/internal';
import {useCurrentLanguageBlogPosts} from '@docusaurus/theme-common/internal';

import styles from './index.module.css';

function BlogSection() {
  const {items} = useCurrentLanguageBlogPosts();
  
  // 최신 3개 포스트만 표시
  const recentPosts = items.slice(0, 3);
  
  return (
    <div className="container margin-top--lg margin-bottom--xl">
      <h2 className={styles.sectionTitle}>최신 포스트</h2>
      <div className="row">
        {recentPosts.map((post) => (
          <div key={post.id} className="col col--4 margin-bottom--lg">
            <BlogPostProvider
              key={post.id}
              content={post}
            >
              <BlogPostItem
                frontMatter={post.content.frontMatter}
                assets={post.content.assets}
                metadata={post.content.metadata}
                truncated
              >
                <Link
                  to={post.content.metadata.permalink}
                  className="button button--secondary button--block margin-top--md"
                >
                  계속 읽기
                </Link>
              </BlogPostItem>
            </BlogPostProvider>
          </div>
        ))}
      </div>
      <div className="text--center margin-top--lg">
        <Link to="/archive" className="button button--primary button--lg">
          모든 포스트 보기
        </Link>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="홈"
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <BlogSection />
      </main>
    </Layout>
  );
}
