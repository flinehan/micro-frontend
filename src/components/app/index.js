import Head from 'next/head'
// import { headers } from 'next/headers';
import { useRouter } from 'next/router'

export const Main = ()=>{
  // const headersList = headers();
  const router = useRouter()
  // drop query params
  const path = router.asPath.split("?")[0]
  const params = router.query || []
  return(
    <div>
     <p> {path}</p>
     <ul> 
      {Object.keys(params).map((key)=>{
        return (
          <li>{key}:{params[key]}</li>
        )
      })}
     </ul>
    </div>
  )
}