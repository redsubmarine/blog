import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';
import Link from '@docusaurus/Link';

export function BlogArchive() {
  try {
    const pluginData = usePluginData('docusaurus-plugin-content-blog');
    
    // 플러그인 데이터가 없거나 blogPosts가 없는 경우 처리
    if (!pluginData || !pluginData.blogPosts) {
      return (
        <div className="container margin-top--md margin-bottom--lg">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <p>블로그 포스트를 불러올 수 없습니다.</p>
            </div>
          </div>
        </div>
      );
    }
    
    const { blogPosts } = pluginData;
    
    // 블로그 포스트가 없는 경우
    if (blogPosts.length === 0) {
      return (
        <div className="container margin-top--md margin-bottom--lg">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <p>아직 블로그 포스트가 없습니다.</p>
            </div>
          </div>
        </div>
      );
    }
    
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
  } catch (error) {
    console.error('Error in BlogArchive component:', error);
    return (
      <div className="container margin-top--md margin-bottom--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <p>블로그 아카이브를 표시하는 중 오류가 발생했습니다.</p>
          </div>
        </div>
      </div>
    );
  }
}
