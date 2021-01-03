  const { SitemapStream, streamToPromise } = require( 'sitemap' )
  const { Readable } = require( 'stream' )

  // An array with your links
  const links = [
    { url: '/research',  changefreq: 'daily', priority: 0.8  },
    { url: '/library',  changefreq: 'daily', priority: 0.4  },
  ]

  // Create a stream to write to
  const stream = new SitemapStream( { hostname: 'https://www.minch.co' } )

  // Return a promise that resolves with your XML string
  return streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
      console.log(data.toString());
    }
  )