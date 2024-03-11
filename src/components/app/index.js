import { useRouter } from 'next/router'

export const Main = ({cats})=>{
  // const headersList = headers();
  const router = useRouter()
  // drop query params
  const path = router.asPath.split("?")[0]
  const params = router.query || []

  if (router.isFallback || !cats) {
    return <div>Loading...</div>;
  }


  return(
    <div>
     <p> {path}</p>
     <ul> 
      {Object.keys(params).map((key)=>{
        return (
          <li>{key}:{params[key]}</li>
        )
      })}
      <p>cat:{JSON.stringify(cats[0])} </p>
     </ul>
    </div>
  )
}