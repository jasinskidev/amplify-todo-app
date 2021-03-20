import { ChakraProvider } from "@chakra-ui/react"
import Amplify from 'aws-amplify';
import amplifyConfig from '../aws-exports';

Amplify.configure({ ...amplifyConfig, ssr: true });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
