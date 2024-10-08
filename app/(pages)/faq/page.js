import FAQColumn from "./_components/faq-column";
import Heading from "./_components/heading";

const mainBoxFaqs = [
  {
    title: "General FAQ",
    faqs: [
      {
        heading: "What is the CoinMarketCap API for?",
        para: "The CoinMarketCap API is our enterprise-grade cryptocurrency API for all crypto data use cases from personal",
        url: "https://api-documentation-link.com",
        link: "API Documentation",
        url1: "https://api-documentation-link.com",
        link1: "API Documentation w",
        para1: "Additional details about the API.",
      },
      {
        heading: "What is the CoinMarketCap API for?",
        para: "The CoinMarketCap API is our enterprise-grade cryptocurrency API for all crypto data use cases from personal",
        url: "https://api-documentation-link.com",
        link: "API Documentation",
        url1: "https://api-documentation-link.com",
        link1: "API Documentation w",
        para1: "Additional details about the API.",
      },
      {
        heading: "What is the CoinMarketCap API for?",
        para: "The CoinMarketCap API is our enterprise-grade cryptocurrency API for all crypto data use cases from personal",
        url: "https://api-documentation-link.com",
        link: "API Documentation",
        url1: "https://api-documentation-link.com",
        link1: "API Documentation w",
        para1: "Additional details about the API.",
      },
      {
        heading: "What is the CoinMarketCap API for?",
        para: "The CoinMarketCap API is our enterprise-grade cryptocurrency API for all crypto data use cases from personal",
        url: "https://api-documentation-link.com",
        link: "API Documentation",
        url1: "https://api-documentation-link.com",
        link1: "API Documentation w",
        para1: "Additional details about the API.",
      },
    ]
  },
  {
    title: "Data FAQ",
    faqs: [
      {
        heading: "What is the CoinMarketCap API for?",
        para: "The CoinMarketCap API is our enterprise-grade cryptocurrency API for all crypto data use cases from personal",
        url: "https://api-documentation-link.com",
        link: "API Documentation",
        url1: "https://api-documentation-link.com",
        link1: "API Documentation w",
        para1: "Additional details about the API.",
      },
      {
        heading: "What is the CoinMarketCap API for?",
        para: "The CoinMarketCap API is our enterprise-grade cryptocurrency API for all crypto data use cases from personal",
        url: "https://api-documentation-link.com",
        link: "API Documentation",
        url1: "https://api-documentation-link.com",
        link1: "API Documentation w",
        para1: "Additional details about the API.",
      },
      {
        heading: "What is the CoinMarketCap API for?",
        para: "The CoinMarketCap API is our enterprise-grade cryptocurrency API for all crypto data use cases from personal",
        url: "https://api-documentation-link.com",
        link: "API Documentation",
        url1: "https://api-documentation-link.com",
        link1: "API Documentation w",
        para1: "Additional details about the API.",
      },
      {
        heading: "What is the CoinMarketCap API for?",
        para: "The CoinMarketCap API is our enterprise-grade cryptocurrency API for all crypto data use cases from personal",
        url: "https://api-documentation-link.com",
        link: "API Documentation",
        url1: "https://api-documentation-link.com",
        link1: "API Documentation w",
        para1: "Additional details about the API.",
      },
    ]
  },
  {
    title: "Pricing Plans",
    faqs: [
      {
        heading: "What is the CoinMarketCap API for?",
        para: "The CoinMarketCap API is our enterprise-grade cryptocurrency API for all crypto data use cases from personal",
        url: "https://api-documentation-link.com",
        link: "API Documentation",
        url1: "https://api-documentation-link.com",
        link1: "API Documentation w",
        para1: "Additional details about the API.",
      },
      {
        heading: "What is the CoinMarketCap API for?",
        para: "The CoinMarketCap API is our enterprise-grade cryptocurrency API for all crypto data use cases from personal",
        url: "https://api-documentation-link.com",
        link: "API Documentation",
        url1: "https://api-documentation-link.com",
        link1: "API Documentation w",
        para1: "Additional details about the API.",
      },
      {
        heading: "What is the CoinMarketCap API for?",
        para: "The CoinMarketCap API is our enterprise-grade cryptocurrency API for all crypto data use cases from personal",
        url: "https://api-documentation-link.com",
        link: "API Documentation",
        url1: "https://api-documentation-link.com",
        link1: "API Documentation w",
        para1: "Additional details about the API.",
      },
      {
        heading: "What is the CoinMarketCap API for?",
        para: "The CoinMarketCap API is our enterprise-grade cryptocurrency API for all crypto data use cases from personal",
        url: "https://api-documentation-link.com",
        link: "API Documentation",
        url1: "https://api-documentation-link.com",
        link1: "API Documentation w",
        para1: "Additional details about the API.",
      },
    ]
  }
]

const FAQPage = () => {
  return (
    <div className="bg-white mx-20">
      <div className="flex items-center justify-center flex-col gap-4 text-black text-4xl font-bold text-center pt-8">
        <h3>Frequently Asked Questions</h3>
        <p className="text-[18px] font-light ">This API specific FAQ outlines answers to common questions about the CoinMarketCap API product. For questions around CoinMarketCap's general data gathering and reporting conventions, please check out the </p>
      </div>

      {mainBoxFaqs.map((faq, index) => (
        <div key={index}>
          <Heading title={faq.title} />
          <div className="grid grid-cols-2 gap-6 py-8">
            {faq.faqs?.map((faqItem, idx) => (
              <FAQColumn
                key={idx}
                heading={faqItem.heading}
                para={faqItem.para}
                url={faqItem.url}
                link={faqItem.link}
                url1={faqItem.url1}
                link1={faqItem.link1}
                para1={faqItem.para1}
              />
            ))}
          </div>
        </div>
      ))}

    </div>

  );
};

export default FAQPage;
