/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import type { Props } from "@theme/BlogPostItem/Container";

export default function BlogPostItemContainer({
  children,
  className,
  frontMatter,
  authors,
}: any): JSX.Element {
  // const { frontMatter, assets } = useBlogPost();
  const { withBaseUrl } = useBaseUrlUtils();
  // const image = assets.image ?? frontMatter.image;
  const image = authors && authors.length ? authors[0].imageUrl : undefined;
  return (
    <article
      className={className}
      itemProp="blogPost"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      {image && (
        <meta
          itemProp="image"
          content={withBaseUrl(image, { absolute: true })}
        />
      )}
      {children}
    </article>
  );
}
