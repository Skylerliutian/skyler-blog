/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import BlogLayout from "@theme/BlogLayout";
import BlogListPaginator from "@theme/BlogListPaginator";
import SearchMetadata from "@theme/SearchMetadata";
import BlogPostItems from "@theme/BlogPostItems";
import BlogPostItem from "@theme/BlogPostItem";

import IntroPart from "@site/src/components/IntroPart";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Date from "@site/src/components/Date";
import "./style.css";

const BlogListPageMetadata = (props) => {
  const { metadata } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink } = metadata;
  const isBlogOnlyMode = permalink === "/";
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
};

const BlogListPageContent = (props) => {
  const { metadata, items, sidebar } = props;
  return (
    <div style={{ margin: "0 10%" }}>
      {items.map(({ content: BlogPostContent }) => (
        <div key={BlogPostContent.metadata.permalink} className="postitem">
          <Date date={BlogPostContent.metadata.date} />
          <BlogPostItem
            forontMatter={BlogPostContent.forontMatter}
            authors={BlogPostContent.metadata.authors}
            metadata={BlogPostContent.metadata}
          >
            <BlogPostContent />
          </BlogPostItem>
        </div>
      ))}
      <BlogListPaginator metadata={metadata} />
    </div>
  );
};

export default function BlogListPage(props) {
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  return (
    // <HtmlClassNameProvider
    //   className={clsx(
    //     ThemeClassNames.wrapper.blogPages,
    //     ThemeClassNames.page.blogListPage
    //   )}
    // >
    //   <BlogListPageMetadata {...props} />
    //   <HomeHeader />

    //   <BlogListPageContent {...props} />
    // </HtmlClassNameProvider>
    <Layout
      title={siteTitle}
      description="html, css, javascript, react前端记录，一起学习吧。"
      wrapperClassName="blog-list__page"
    >
      <Head>
        <meta
          name="keywords"
          content="前端, html, css, js, javascript, react, vue, typescript, es6, html5, css3, 性能优化, 兼容性调整"
        />
        <title>{siteTitle}</title>
      </Head>
      <IntroPart />
      <BlogListPageContent {...props} />
    </Layout>
  );
}
