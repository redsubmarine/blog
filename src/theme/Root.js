import React from 'react';

// 단순히 자식 컴포넌트만 반환하도록 수정
export default function Root({children}) {
  return <>{children}</>;
}
