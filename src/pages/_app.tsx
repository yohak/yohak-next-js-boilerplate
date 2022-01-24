import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { EmotionGlobalStyles } from "../styles/EmotionGlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <EmotionGlobalStyles />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
