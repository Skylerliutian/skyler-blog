/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import BlogPostItemHeaderTitle from "@theme/BlogPostItem/Header/Title";
import BlogPostItemHeaderInfo from "@theme/BlogPostItem/Header/Info";
import BlogPostItemHeaderAuthors from "@theme/BlogPostItem/Header/Authors";

export default function BlogPostItemHeader({
  metadata,
  isBlogPostPage,
}: any): JSX.Element {
  return (
    <header>
      <BlogPostItemHeaderTitle
        metadata={metadata}
        isBlogPostPage={isBlogPostPage}
      />
      <BlogPostItemHeaderInfo metadata={metadata} />
      <BlogPostItemHeaderAuthors metadata={metadata} />
    </header>
  );
}
