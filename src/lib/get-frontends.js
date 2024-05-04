import { matchPath } from "react-router";

// this should come from our app config or env vars
// in this demo im using ports as "versions"
const cdnUrl = (version)=>`http://localhost:${version}/static/js/bundle.js`

export function getUrl(version){
  if(version === 'local'){
    return 'http://localhost:3006/static/js/bundle.js'
  }

  // or if we have an version that isn't local we would use that instead
  return cdnUrl(version)
}

export async function getFrontends(client, context) {
  const settings = await client.listConfigurationSettings({
    //todo: use proccess env
    labelFilter: "Prod*"
  });
  const path = context.resolvedUrl.split("?")[0]
  const params = context.query || []
  const configs = []

  for await (const setting of settings) {
    const match = matchPath(
      { path: setting.key },
      path,
    );

    if (match) {
      configs.push({
        url: getUrl(params?.version ||setting.value),
      })
    }
  }

  return configs
}