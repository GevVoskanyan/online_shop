import React from 'react';
import { Helmet } from 'react-helmet';

function MetaHeaders(props) {
  const { title, description, image } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:image" content={image} />
    </Helmet>
  );
}
MetaHeaders.defaultProps = {
  title: 'Smarth Shop',
  description: '123 123 12 312 232 123 213 21 3ds sdd asd',
};

export default MetaHeaders;
