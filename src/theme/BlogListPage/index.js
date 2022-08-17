import React from 'react';
import Layout from '@theme/Layout';

function BlogListPage(props) {
    const { items } = props;

    console.log('1243', items);
    return (
        <Layout
            title="1231"
            description="234234"
            wrapperClassName="blog-list__page"
        >
            <div>1243</div>
        </Layout>
    );
}

export default BlogListPage;
