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

import IntroPart from "@site/src/components/IntroPart";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";

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
    <div style={{ margin: "0 20%" }}>
      <BlogPostItems items={items} />
      <BlogListPaginator metadata={metadata} />
    </div>
  );
};

export default function BlogListPage(props) {
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
      title={`1233`}
      description={`12331`}
      wrapperClassName="blog-list__page"
    >
      <Head>
        <meta
          name="keywords"
          content="前端, html, css, js, javascript, react, vue, typescript, es6, html5, css3, 性能优化, 兼容性调整"
        />
        <title>12341234</title>
      </Head>
      <IntroPart />
      <BlogListPageContent {...props} />
    </Layout>
  );
}
