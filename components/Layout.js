import Head from 'next/head';

export default function Layout({ children, title = 'isthe.link projects' }) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{title}</title>
        <link rel="icon" type="image/png" href="/static/img/favicon.png" />
        <link rel="stylesheet" href="/static/css/system.css" />
        <link rel="stylesheet" href="/static/css/index.css" />
      </Head>

      <main>
        <header>
          <h1>___.isthe.link</h1>
          <p>
            A collection of mini projects by{' '}
            <a href="https://remysharp.com">@rem</a>
          </p>
        </header>

        <section>{children}</section>

        <footer>
          <p>
            Created by <a href="https://remysharp.com">@rem</a> - occasionally{' '}
            <a href="https://github.com/remy">open source</a>
          </p>
        </footer>
      </main>
    </div>
  );
}
