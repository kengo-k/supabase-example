import Head from "next/head";

const blogTitle = "Welcome to NextJs Blog";
const siteTitle = "NextJs Blog";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <img src="/images/profile.png" />
        <h1>{blogTitle}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
