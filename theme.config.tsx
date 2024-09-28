import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s'
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`${frontMatter.title} | Rhino Linux Wiki` || "Rhino Linux Wiki"}</title>
        <meta property="og:site_name" content="Rhino Linux Wiki" />
        <meta property="og:description" content={frontMatter.description || "Ubuntu Based, Rolling Release"} />
        <link rel="icon" type="image/svg+xml" sizes="any" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" sizes="any" href="/favicon.ico" />
        <meta name="theme-color" content="#8d7be4" />
      </>
    )
  },
  logo: (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" width="24" height="24" viewBox="0 0 333.94 264.05">
      <g id="Layer_1-2"><g>
      <path fill="#222426" d="M121.34,264.05c-29.34-2.08-55-13.32-76.98-32.46-14.68-12.79-22.84-25.66-25.49-30,0,0-15.54-25.37-18.4-56.18C-.04,140,0,134.87,0,134.87c0,0,.04-4.5,.5-9.24C4.1,88.76,23.06,61.42,23.06,61.42c2.67-3.83,10.34-14.57,23.37-25.33C90.51-.32,150.29-5.77,201.63,20.2c1.85,.93,2.85,.69,3.98-1.01,4.26-6.39,8.87-12.48,15.18-17.05,5.56-4.02,10.75-2.24,12.62,4.33,2.51,8.8,4.45,17.71,5.11,26.85,.21,2.97,1.3,2.39,2.96,1.16,9.94-7.4,21.17-11.75,33.28-13.94,8.13-1.47,13,2.39,11.98,9.43-.79,5.43-2.89,10.33-6.55,14.49-5.55,6.3-11.13,12.58-18.19,17.3-.91,.61,.06-.16,2.86,2.75,.07,.08,.52,.52,.58,.61,4.62,6.06,8.93,6.9,14.07,3.94,4.61-2.66,9.27-5.26,14.03-7.65,5.53-2.78,9-.68,9.73,5.49,.63,5.31-.63,10.42-1.25,15.61-.09,.74-.29,1.56,.46,2.03,.87,.54,1.36-.32,1.88-.75,5.88-4.85,10.25-10.86,13.06-17.9,5.88-14.73,5.37-14.81,8.64-32.59,.12-.64,.23-1.15,.36-1.72,.26,.51,.61,1.01,.76,1.55,3.94,14.86,6.18,28.25,6.72,40.18,.47,10.49-2.24,20.57-5.24,30.56-2.09,6.94-3.57,13.94-2.28,21.35,2.09,11.97,1.24,23.74-3.64,35.02-2.02,4.68-4.56,5.81-9.04,3.46-7.42-3.91-15.42-4.76-23.53-5.22-11.42-.65-22.65,1.32-33.91,2.74-6.01,.76-8.64,3.3-9.73,9.14-1.18,6.32-2.87,12.53-5.87,18.19-22.49,42.49-56.19,69.49-104.95,75.47M22.33,91.49c-17.66,37.02-10.05,85.21,18.56,117.19,22.57,25.22,50.08,35.07,83.24,25.93,16.52-4.55,28.48-15.01,35.92-30.52,.37-.94,.83-1.86,1.09-2.83,3.28-11.9-3.57-26.69-15.78-34.18-1.68-1.03-3.17-2.31-4.13-4.1,2.04-.88,4-.3,5.94,.38,15.24,5.36,26.04,15.46,32.41,30.31,.55,1.27,1.13,3.37,2.93,1,13.22-17.46,13-45.41-.45-62.84-.26-.34-.37-.81-.55-1.22,.66,.01,1.4-.15,1.98,.07,3.23,1.24,6.2,2.98,8.78,5.28,9,8.04,15.3,18.01,19.75,29.08,5.52,13.75,4.78,27.66,.04,41.5-.17,.5-.15,1.06-.21,1.59,.42-.33,.93-.59,1.26-.99,1.96-2.41,3.98-4.78,5.8-7.29,9.74-13.44,15.6-28.57,19.27-44.63,.56-2.46,1.69-3.7,4.36-3.91,4.66-.37,9.31-.99,13.93-1.71,18.17-2.86,36.32-4.91,54.51-.16,2.15,.56,3.51-.47,3.8-2.71,.35-2.76,.7-5.52,.95-8.29,.7-7.68,.81-15.3-2.9-22.41-.44-.99-.43-1.97,0-2.96,4.13-9.62,6.04-19.83,8-30.03,.11-.6-.02-1.25-.03-1.88-.43,.43-.95,.8-1.27,1.29-3.79,5.78-7.86,11.28-14.1,14.7-6.85,3.76-14.49-.24-15.25-7.93-.35-3.57,.33-7.01,.95-10.48,.08-.43,.02-.88,.02-1.33-.44,.11-.92,.15-1.32,.35-4.87,2.37-9.73,4.78-14.6,7.16-3.03,1.49-5.66,.82-7.96-1.53-1.88-1.92-3.75-3.82-5.96-5.41-11.71-8.42-22.42-17.98-31.86-28.92-2.09-2.42-3.52-5.19-3.77-8.36-.56-7.02-.91-14.06-1.38-21.09-.05-.81,.22-1.98-.87-2.26-1.07-.27-1.79,.6-2.37,1.4-2.81,3.91-5.94,7.57-8.28,11.84-2.15,3.93-5.32,5.01-9.57,3.5-2.83-1-5.54-2.36-8.27-3.62-32.76-15.02-66.3-19.1-100.73-6.45C60.85,36.35,35.52,57.52,22.33,91.49ZM124.21,251.73c26.47-.12,47.6-8.51,65.84-24.31,7.54-6.52,13.12-14.52,16.14-24.09,6.21-19.67,1.37-37.57-9.05-54.5-.78-1.28-1.84-2.38-2.78-3.57,.21,1.53,.27,3.09,.63,4.58,2.63,10.79,3.43,21.63,.6,32.48-2.75,10.54-7.51,20-15.83,27.36-.3,.27-.7,.43-1.05,.64-.11-.43-.22-.86-.31-1.29-2.22-10.5-5.27-20.6-13.63-28.12-.32-.29-.73-.47-1.09-.71,.09,.39,.14,.81,.27,1.18,7.43,21.31,1.17,41.82-16.89,55.37-10.18,7.63-21.95,11.15-34.23,13.39-.35,.06-.69,.19-1.03,.28,.34,.12,.68,.31,1.02,.34,4.52,.39,9.05,.75,11.39,.94h0ZM273.41,34.09c-.38-.92-1.02-.92-1.64-.67-9.46,3.74-18.8,7.71-26.51,14.61-3.64,3.26-3.51,3.13,.17,6.35,2.05,1.8,3.43,1.69,5.54,.09,7.66-5.82,14.77-12.24,21.52-19.07,.37-.38,.63-.88,.92-1.3h0Z"/>
      <path fill="#9235ff" d="M312.84,116.05c3.72,7.11,3.6,14.73,2.9,22.41-.25,2.77-.6,5.53-.95,8.29-.28,2.24-1.64,3.27-3.8,2.71-18.19-4.76-36.34-2.71-54.51,.16-4.62,.73-9.27,1.35-13.93,1.71-2.67,.21-3.8,1.45-4.36,3.91-3.67,16.06-9.53,31.19-19.27,44.63-1.82,2.51-3.84,4.88-5.8,7.29-.33,.4-.83,.66-1.26,.99,.06-.53,.04-1.09,.21-1.59,4.73-13.84,5.48-27.75-.04-41.5-4.45-11.08-10.75-21.04-19.75-29.08-2.57-2.3-5.55-4.03-8.78-5.28-.58-.23-1.31-.06-1.98-.07,.18,.41,.29,.87,.55,1.22,13.45,17.43,13.67,45.38,.45,62.84-1.8,2.37-2.39,.27-2.93-1-6.37-14.86-17.17-24.95-32.41-30.31-1.94-.68-3.9-1.25-5.94-.38,.96,1.79,2.45,3.07,4.13,4.1,12.2,7.48,19.06,22.28,15.78,34.18-.27,.97-.72,1.89-1.09,2.83-1.52-.12-3.05-.16-4.56-.36-16.04-2.1-31.3-6.73-45.57-14.42-21.69-11.69-38.44-28.37-50.03-50.1-10.71-20.08-15.53-41.63-15.08-64.37,10.5-4.28,21.51-6.22,32.77-6.54,14.63-.41,29.24,.37,43.75,2.4,29.79,4.18,58.74,11.61,86.74,22.65,25.88,10.2,51.45,21.48,79.69,23.71,8.38,.66,16.8,1.33,25.08-1.02h0Z"/>
      <path fill="#8d7be4" d="M312.84,116.05c-8.28,2.36-16.69,1.69-25.08,1.02-28.24-2.23-53.81-13.51-79.69-23.71-28.01-11.04-56.95-18.47-86.74-22.65-14.52-2.04-29.12-2.82-43.75-2.4-11.25,.32-22.27,2.26-32.77,6.54-.55,.23-1.12,.42-1.64,.71-7.77,4.24-14.49,9.84-20.84,15.94C35.52,57.52,60.85,36.35,94.24,24.08c34.42-12.65,67.97-8.57,100.73,6.45,2.74,1.25,5.44,2.61,8.27,3.62,4.25,1.51,7.42,.43,9.57-3.5,2.34-4.27,5.47-7.93,8.28-11.84,.58-.81,1.3-1.67,2.37-1.4,1.09,.28,.81,1.44,.87,2.26,.48,7.03,.83,14.07,1.38,21.09,.25,3.17,1.68,5.94,3.77,8.36,9.45,10.94,20.15,20.49,31.86,28.92,2.21,1.59,4.07,3.49,5.96,5.41,2.3,2.35,4.93,3.02,7.96,1.53,4.87-2.39,9.73-4.79,14.6-7.16,.4-.19,.88-.23,1.32-.35,0,.44,.05,.9-.02,1.33-.62,3.47-1.31,6.92-.95,10.48,.76,7.68,8.4,11.68,15.25,7.93,6.24-3.42,10.31-8.92,14.1-14.7,.32-.5,.84-.86,1.27-1.29,.02,.63,.15,1.28,.03,1.88-1.95,10.2-3.87,20.41-8,30.03-.43,.99-.44,1.97,0,2.96h0Z"/>
      <path fill="#8b00e7" d="M22.33,91.49c6.34-6.1,13.07-11.7,20.84-15.94,.52-.28,1.09-.47,1.64-.71-.45,22.74,4.37,44.29,15.08,64.37,11.59,21.73,28.34,38.41,50.03,50.1,14.28,7.7,29.53,12.32,45.57,14.42,1.51,.2,3.04,.24,4.56,.36-7.44,15.52-19.4,25.97-35.92,30.52-33.16,9.13-60.67-.71-83.24-25.93C12.27,176.71,4.67,128.52,22.33,91.49Z"/>
      <path fill="#fefefe" d="M124.21,251.73c-2.34-.19-6.86-.56-11.39-.94-.35-.03-.68-.22-1.02-.34,.34-.1,.68-.22,1.03-.28,12.28-2.24,24.05-5.76,34.23-13.39,18.07-13.55,24.33-34.06,16.89-55.37-.13-.38-.18-.79-.27-1.18,.37,.23,.77,.42,1.09,.71,8.36,7.52,11.41,17.62,13.63,28.12,.09,.43,.21,.86,.31,1.29,.35-.21,.75-.37,1.05-.64,8.31-7.36,13.08-16.82,15.83-27.36,2.83-10.85,2.03-21.69-.6-32.48-.36-1.49-.43-3.05-.63-4.58,.93,1.18,1.99,2.29,2.78,3.57,10.42,16.93,15.26,34.83,9.05,54.5-3.02,9.56-8.6,17.56-16.14,24.09-18.24,15.8-39.37,24.19-65.84,24.31h0Z"/>
      <path fill="#8b57e1" d="M273.41,34.09c-.29,.42-.54,.92-.92,1.3-6.75,6.83-13.86,13.25-21.52,19.07-2.12,1.61-3.49,1.71-5.54-.09-3.68-3.22-3.81-3.09-.17-6.35,7.72-6.9,17.05-10.87,26.51-14.61,.62-.25,1.25-.25,1.64,.67h0Z"/>
      </g></g>
      </svg>
      <span style={{ marginLeft: '.4em'}}>
        Rhino Linux Wiki
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/rhino-linux',
  },
  chat: {
    link: 'https://discord.gg/reSvc8Ztk3',
  },
  docsRepositoryBase: 'https://github.com/rhino-site/rhino-linux-wiki/tree/main',
  footer: {
    text: 'Rhino Linux Wiki',
  },
  primarySaturation: {
    dark: 37,
    light: 80,
  },
  primaryHue: 256,
}

export default config
