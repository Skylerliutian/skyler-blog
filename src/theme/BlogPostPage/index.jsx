/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
// import {BlogPostProvider, useBlogPost} from '@docusaurus/theme-common/internal';
import BlogLayout from "@theme/BlogLayout";
import BlogPostItem from "@theme/BlogPostItem";
import BlogPostPaginator from "@theme/BlogPostPaginator";
import BlogPostPageMetadata from "@theme/BlogPostPage/Metadata";
import TOC from "@theme/TOC";
// import type {Props} from '@theme/BlogPostPage';
// import Unlisted from '@theme/Unlisted';

function BlogPostPageContent({ sidebar, children, data }) {
  const { metadata, toc } = data;
  const { nextItem, prevItem, frontMatter, unlisted } = metadata;
  const {
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
  } = frontMatter;
  return (
    <BlogLayout
      sidebar={sidebar}
      toc={
        !hideTableOfContents && toc.length > 0 ? (
          <TOC
            toc={toc}
            minHeadingLevel={tocMinHeadingLevel}
            maxHeadingLevel={tocMaxHeadingLevel}
          />
        ) : undefined
      }
    >
      {/* {unlisted && <Unlisted />} */}
      <BlogPostItem
        frontMatter={data.forontMatter}
        authors={metadata.authors}
        metadata={metadata}
        isBlogPostPage
      >
        {children}
      </BlogPostItem>

      {(nextItem || prevItem) && (
        <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
      )}
    </BlogLayout>
  );
}

export default function BlogPostPage(props) {
  const BlogPostContent = props.content;
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogPostPage
      )}
    >
      <BlogPostPageMetadata data={BlogPostContent} />

      <BlogPostPageContent sidebar={props.sidebar} data={BlogPostContent}>
        <BlogPostContent />
      </BlogPostPageContent>
    </HtmlClassNameProvider>
  );
}
