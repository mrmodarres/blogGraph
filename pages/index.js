import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { GraphQLClient, gql, request } from "graphql-request";
import BlogCard from "../components/BlogCard";
const graohcms = new GraphQLClient(
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clcoet82y0ves01t7esbp9ih1/master"
);

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      auther {
        userName
        avatar {
          url
        }
      }
      createdBy {
        id
      }
      coverPhoto {
        createdBy {
          id
        }
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graohcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {posts.map((post) => (
          <BlogCard
            title={post.title}
            author={post.auther}
            coverPhoto={post.coverPhoto}
            key={post.id}
            dataPublished={post.dataPublished}
            slug={post.slug}
          />
        ))}
      </main>
    </>
  );
}
