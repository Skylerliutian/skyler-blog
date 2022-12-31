/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";
import { blogPostContainerID } from "@docusaurus/utils-common";
import MDXContent from "@theme/MDXContent";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";
import type { Props } from "@theme/BlogPostItem/Content";

export default function BlogPostItemContent({
  children,
  className,
  isBlogPostPage,
}: any): JSX.Element {
  return (
    <div
      // This ID is used for the feed generation to locate the main content
      id={isBlogPostPage ? blogPostContainerID : undefined}
      className={clsx("markdown", className)}
      itemProp="articleBody"
    >
      {/* <MDXProvider components={MDXComponents}>{children}</MDXProvider> */}
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
