/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import type { Props } from "@theme/BlogPostItem/Header/Title";

import styles from "./styles.module.css";

export default function BlogPostItemHeaderTitle({
  className,
  metadata,
  isBlogPostPage,
}: any): JSX.Element {
  const { permalink, title } = metadata;
  const TitleHeading = isBlogPostPage ? "h1" : "h2";
  return (
    <TitleHeading className={clsx(styles.title, className)} itemProp="headline">
      {isBlogPostPage ? (
        title
      ) : (
        <Link itemProp="url" to={permalink}>
          {title}
        </Link>
      )}
    </TitleHeading>
  );
}
