import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';
import Link from '@docusaurus/Link';

export function BlogArchive() {
  const { blogPosts } = usePluginData('docusaurus-plugin-content-blog');
  
  // 연도별로 포스트 그룹화
  const postsByYear = blogPosts.reduce((acc, post) => {
    const year = new Date(post.metadata.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});
  
  // 연도별로 정렬 (내림차순)
  const years = Object.keys(postsByYear).sort((a, b) => b - a);
  
  return (
    <div className="container margin-top--md margin-bottom--lg">
      <div className="row">
        <div className="col col--8 col--offset-2">
          {years.map((year) => (
            <div key={year}>
              <h2>{year}</h2>
              <ul className="archive-list">
                {postsByYear[year].sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date)).map((post) => (
                  <li key={post.id} className="archive-item">
                    <Link to={post.metadata.permalink}>
                      {post.metadata.title}
                    </Link>
                    <small className="archive-date">
                      {new Date(post.metadata.date).toLocaleDateString('ko-KR', {
                        month: 'long',
                        day: 'numeric',
                      })}
                    </small>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
