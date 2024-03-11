import { Main } from "../components/app";


export default function Home({cats}) {
  return (
    <Main cats={cats}></Main>
  )
}

export async function getServerSideProps({ params }) {

  // Fetch data for the specific post using slug
  const response = await fetch(`https://freetestapi.com/api/v1/cats`);
  const cats = await response.json();

  return {
    props: { cats },
  };
}