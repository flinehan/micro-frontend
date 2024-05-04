import { Main } from "../components/app";
import { AppConfigurationClient } from "@azure/app-configuration";
import { getFrontends } from "../lib/get-frontends";

const connectionString = process.env.AZURE_APPCONFIG_CONNECTION_STRING;
const client = new AppConfigurationClient(connectionString);

export default function Index({ settings }) {
  return (
    <Main settings={settings}></Main>
  )
}

export async function getServerSideProps(context) {
  const settings = await getFrontends(client, context)

  return {
    props: { settings },
  };
}