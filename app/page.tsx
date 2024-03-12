import Image from "next/image";
import React from "react";
import Head from "next/head";
import Nav from '../components/Nav'
// export default function Home() {
//   return (
//     <div>
//       <Nav />
//     </div>
//   );
// }


interface MyHtmlContentProps {
  content: string; // Content fetched from server or data source
}

const MyHtmlContent: React.FC<MyHtmlContentProps> = ({ content }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export async function getStaticProps() {
  const fetchSomeHtmlContent = async() => {
    const response = await fetch('../public/nav.html');
    const htmlContent = await response.text();
    return htmlContent;
  }
  // Fetch or generate your HTML content here (e.g., from a database)
  const content = await fetchSomeHtmlContent();

  return {
    props: {
      content,
    },
  };
}

export default MyHtmlContent;

