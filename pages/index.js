import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi there! I'm Jorge. I'm a frontend software engineer. You can contact
          me on{" "}
          <a target="_blank" href="https://www.linkedin.com/in/jroak/">
            LinkedIn
          </a>
          .
        </p>
      </section>
    </Layout>
  );
}
