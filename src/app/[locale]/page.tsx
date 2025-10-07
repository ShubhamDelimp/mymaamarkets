// import { gql } from '@apollo/client';
// import Home from "./home";
// import { HomepageData } from "../types/homepage";
// import createClient from '@/lib/ApolloClient/ApolloClient';
// interface PageParams {
//   params: {
//     locale: string;
//   };
//   searchParams?: { [key: string]: string | string[] | undefined };

// }


// const GET_HOMEPAGE = gql`
// query Home($locale: I18NLocaleCode) {
//   home(locale: $locale) {
//     hero_section {
//       id
//       title1
//       title2
//       description
//         background_image {
//         name
//         url
//       }
//       button1
//       button2
//       feature {
//         id
//         title
//         description
//         image {
//           url
//           name
//         }
//       }
//     },
//     HomeSectionTwo {
//       id
//       title1
//       title2
//       title3
//       description
//       button_name
//       cards {
//         id
//         title
//         description
//         image {
//           name
//           url
//         }
//       }
//     }

//     home_section2 {
//       description1
//       description2
//       title1
//       title2
//       id
//     }
//     home_section3 {
//       id
//       title
//       description
//       image {
//         url
//         name
//       }
//       button_name
//     }
//     home_section4 {
//       id
//       title
//       trade_card {
//         id
//         symbol
//         price
//         change_percent
//       }
//       cta
//     }
//     home_section5 {
//       id
//       title
//       description
//       qr_code {
//         name
//         url
//       }
//       section_image {
//         name
//         url
//       }
//       cta
//       subtitle
//       subdescription
//       subimage {
//         name
//         url
//       }
//       extras_card {
//         id
//         title
//         image {
//           name
//           url
//         }
//       }
//     }
//     home_section6 {
//       id
//       title
//       card {
//         id
//         image {
//           name
//           url
//         }
//         title
//         description
//         redirect_url
//       }
//     }
//     home_section7 {
//       id
//       title
//       description
//       subtitle
//       subdescription
//       cta
//       background_image {
//         name
//         url
//       }
//       extras_title
//       options {
//         id
//         title
//         image {
//           name
//           url
//         }
//       }
//     }
//     home_section8 {
//       id
//       title
//       description
//       cta
//       image {
//           name
//           url
//         }
//       card {
//         id
//         title
//         description
//       }
//     }
//     home_faqs {
//       id
//       heading
//       faq {
//         id
//         question
//         answer
//       }
//     }
//     home_footer {
//       id
//       logo {
//         name
//         url
//       }
//       footer_links {
//         id
//         heading
//         link {
//           id
//           context
//           context_url
//         }
//       }
//       social {
//         id
//         icon {
//           name
//           url
//         }
//         name
//         url
//       }
//       regulations
//       disclaimer
//       risk_disclosure
//       restricted_countries
//     }
//     locale
//   }
// }
// `;
// export default async function Page({ params, searchParams }: PageParams) {
//   const client = await createClient();
//   console.log("Received params=====:", params); // { locale: "en" }

//   const { data } = await client.query({
//     query: GET_HOMEPAGE,
//     variables: {
//       locale: params.locale, // 'en', 'fr', etc.
//     },
//   });
//   console.log("Fetched home data-----:", data.home[0]);

//   return (
//     <div className="min-h-screen min-w-full">
//       {data.home && <Home data={data.home} />}
//     </div>
//   );
// }
// src/app/[locale]/page.tsx
// src/app/[locale]/page.tsx
import { gql } from '@apollo/client';
import Home from './home';
import createClient from '@/lib/ApolloClient/ApolloClient';


type RouteParams = { locale: string };
type RouteSearchParams = Record<string, string | string[] | undefined>;
type ParamsPromise = Promise<RouteParams>;
type SearchPromise = Promise<RouteSearchParams>;


const GET_HOMEPAGE = gql`
  query Home($locale: I18NLocaleCode) {
    home(locale: $locale) {
      hero_section {
        id
        title1
        title2
        description
        background_image { name url }
        button1
        button2
        feature { id title description image { url name } }
      }
      HomeSectionTwo {
        id
        title1
        title2
        title3
        description
        button_name
        cards { id title description image { name url } }
      }
      home_section2 { description1 description2 title1 title2 id }
      home_section3 { id title description image { url name } button_name }
      home_section4 { id title trade_card { id symbol price change_percent } cta }
      home_section5 {
        id
        title
        description
        qr_code { name url }
        section_image { name url }
        cta
        subtitle
        subdescription
        subimage { name url }
        extras_card { id title image { name url } }
      }
      home_section6 { id title card { id image { name url } title description redirect_url } }
      home_section7 {
        id
        title
        description
        subtitle
        subdescription
        cta
        background_image { name url }
        extras_title
        options { id title image { name url } }
      }
      home_section8 { id title description cta image { name url } card { id title description } }
      home_faqs { id heading faq { id question answer } }
      home_footer {
        id
        logo { name url }
        footer_links { id heading link { id context context_url } }
        social { id icon { name url } name url }
        regulations
        disclaimer
        risk_disclosure
        restricted_countries
      }
      locale
    }
  }
`;

export default async function Page(
  { params, searchParams }: { params: ParamsPromise; searchParams?: SearchPromise }
) {
  const { locale } = await params;
  const _sp = searchParams ? await searchParams : undefined;

  const client = await createClient();
  const { data } = await client.query({
    query: GET_HOMEPAGE,
    variables: { locale },
  });

  console.log('Fetched home data:', data.home);

  return (
    <div className="min-h-screen min-w-full bg-white">
      {data.home && <Home data={data.home} />}
    </div>
  );
}
