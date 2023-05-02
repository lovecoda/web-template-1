import React from 'react'
import footerAsset from './footerasset.json'
import { SectionBuilder } from '../PageBuilder/PageBuilder'
import { Logo } from '../../components'

const FooterContainer = props => {
  console.log({ props })
  console.log({ footerAsset })


  // TODO: Figure out how logo gets passed to the footer

  return (
    <SectionBuilder
      sections={[footerAsset]}
    />
  )
}

export default FooterContainer;