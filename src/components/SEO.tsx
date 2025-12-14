import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    keywords?: string[];
}

const SEO = ({
    title,
    description = "Suraj Laxman Shanbhag - Full Stack Developer Portfolio",
    keywords = ["Suraj Laxman Shanbhag", "Portfolio", "Full Stack Developer", "React", "TypeScript", "Web Development"]
}: SEOProps) => {
    return (
        <Helmet>
            <title>{title} | Suraj Laxman Shanbhag</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(', ')} />

            {/* Open Graph tags for social sharing */}
            <meta property="og:title" content={`${title} | Suraj Laxman Shanbhag`} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`${title} | Suraj Laxman Shanbhag`} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
};

export default SEO;
