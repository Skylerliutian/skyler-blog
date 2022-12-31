/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";
// import { useBlogPost } from "@docusaurus/theme-common/internal";
import BlogPostItemContainer from "@theme/BlogPostItem/Container";
import BlogPostItemHeader from "@theme/BlogPostItem/Header";
import BlogPostItemContent from "@theme/BlogPostItem/Content";
import BlogPostItemFooter from "@theme/BlogPostItem/Footer";

// apply a bottom margin in list view
function useContainerClassName() {
  // const { isBlogPostPage } = useBlogPost();
  const isBlogPostPage = true;
  return !isBlogPostPage ? "margin-bottom--xl" : undefined;
}

export default function BlogPostItem({
  children,
  className,
  frontMatter,
  authors,
  metadata,
  isBlogPostPage = false,
}) {
  const containerClassName = useContainerClassName();
  return (
    <BlogPostItemContainer
      className={clsx(containerClassName, className)}
      frontMatter={frontMatter}
      metadata={metadata}
      authors={authors}
    >
      <BlogPostItemHeader metadata={metadata} isBlogPostPage={isBlogPostPage} />

      <BlogPostItemContent isBlogPostPage={isBlogPostPage}>
        {children}
      </BlogPostItemContent>
      <BlogPostItemFooter metadata={metadata} isBlogPostPage={isBlogPostPage} />
    </BlogPostItemContainer>
  );
}
