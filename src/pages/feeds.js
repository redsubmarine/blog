import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  const rssUrl = useBaseUrl('/blog/rss.xml');
  const atomUrl = useBaseUrl('/blog/atom.xml');

  return (
    <Layout
      title="RSS 피드"
      description="RSS 및 Atom 피드 설명 페이지">
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>RSS 및 Atom 피드</h1>
            <p>
              이 블로그의 새 글 소식을 구독하려면 다음 피드 중 하나를 사용하세요:
            </p>
            <ul>
              <li>
                <Link to={rssUrl}>RSS 피드</Link> - 대부분의 RSS 리더에서 사용 가능
              </li>
              <li>
                <Link to={atomUrl}>Atom 피드</Link> - 표준 호환성이 더 좋은 대안
              </li>
            </ul>
            <h2>RSS 리더 추천</h2>
            <ul>
              <li>Feedly</li>
              <li>Inoreader</li>
              <li>NewsBlur</li>
              <li>NetNewsWire (macOS/iOS)</li>
            </ul>
            <p>
              <Link to="/">← 블로그로 돌아가기</Link>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
