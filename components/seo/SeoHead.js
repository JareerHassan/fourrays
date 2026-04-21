import Head from "next/head"

export const SITE_URL = "https://fourraysrcm.com"
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/logo-rays.png`

function canonicalUrlForPath(canonicalPath) {
    const path =
        canonicalPath === "/" || !canonicalPath
            ? "/"
            : canonicalPath.startsWith("/")
              ? canonicalPath
              : `/${canonicalPath}`
    return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`
}

/**
 * Renders title, meta, canonical, Open Graph, Twitter, and JSON-LD in the initial HTML (SSR).
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} [props.keywords]
 * @param {string} [props.canonicalPath] e.g. "/contact" or "/" for home
 * @param {string} [props.ogSiteName]
 * @param {string} [props.ogImage] absolute image URL
 * @param {object} [props.jsonLd] single JSON-LD object (script id: json-ld)
 * @param {{ id: string, json: object }[]} [props.jsonLdBlocks] multiple JSON-LD scripts
 */
export default function SeoHead({
    title,
    description,
    keywords,
    canonicalPath = "/",
    ogSiteName = "FourRays RCM",
    ogImage = DEFAULT_OG_IMAGE,
    jsonLd,
    jsonLdBlocks,
}) {
    const canonicalUrl = canonicalUrlForPath(canonicalPath)
    const blocks = jsonLdBlocks
        ? jsonLdBlocks
        : jsonLd
          ? [{ id: "json-ld", json: jsonLd }]
          : []

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords ? <meta name="keywords" content={keywords} /> : null}
            <link rel="canonical" href={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={ogSiteName} />
            {ogImage ? (
                <>
                    <meta property="og:image" content={ogImage} />
                    <meta name="twitter:image" content={ogImage} />
                </>
            ) : null}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {blocks.map(({ id, json }) => (
                <script
                    key={id}
                    id={id}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
                />
            ))}
        </Head>
    )
}
