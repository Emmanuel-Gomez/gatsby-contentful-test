import * as React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

class BlogPost extends React.Component {
    
    render() {
        const {title, content} = this.props.data.contentfulBlog;
        const myContent = content.childMarkdownRemark.html;
        
        return (
           <Layout>
                <h1>{title}</h1>
                <Link to="/">Go back to the homepage</Link>
                <div dangerouslySetInnerHTML={{__html: myContent}}/>
            </Layout>
        )
    }
}

BlogPost.propTypes = {
    data: PropTypes.object.isRequired
}

export default BlogPost;

export const pageQuery = graphql`
    query blogPostQuery($slug: String!) {
        contentfulBlog(slug: {eq: $slug}) {
            title
            slug
            content {
                childMarkdownRemark {
                    html
                  }
            }
        }
    }
`;