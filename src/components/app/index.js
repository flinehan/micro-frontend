import { notFound } from 'next/navigation'
import Script from 'next/script'

export const Main = ({ settings }) => {

  if (!settings) {
    notFound()
  }

  // if we want to put things on window
  // useEffect(() => {
  //   window.superTest = test
  // })

  return (
    <div>
      {settings.map((setting) => {
        return (
          <Script src={setting.url} key={setting.url} />
        )
      })}
    </div>
  )
}