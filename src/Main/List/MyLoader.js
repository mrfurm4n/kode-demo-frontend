import React from 'react';
import ContentLoader from 'react-content-loader';

export default () => (
  <ContentLoader
    speed={2}
    width={343}
    height={84}
    viewBox="0 0 343 84"
    backgroundColor="#F3F3F6"
    foregroundColor="#FAFAFA"
    style={{ marginBottom: '12px', display: 'block' }}
  >
    <circle cx="36" cy="42" r="36" />
    <rect x="88" y="25" width="144" height="16" rx="8" />
    <rect x="88" y="47" width="80" height="12" rx="6" />
  </ContentLoader>
);
