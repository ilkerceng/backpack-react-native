import React from 'react'
import Helmet from 'react-helmet'

import './icons-page.scss'

import BpkLink from 'bpk-component-link'
import BpkIcon from 'bpk-component-icon'
import BpkHeading from 'bpk-component-heading'
import BpkParagraph from 'bpk-component-paragraph'
import { BpkList, BpkListItem } from 'bpk-component-list'
import PresentationBlock from './../../components/PresentationBlock'

const req = require.context('raw!bpk-svgs/src/icons/sm', false, /\.svg$/)
const icons = req.keys().map((key) => key.replace('./', '').replace('.svg', ''))

const anchors = {
  small: 'icons-page-small',
  large: 'icons-page-large'
}

const IconsPage = () => (
  <section>
    <Helmet title='Icons' />
    <BpkHeading level='h1'>Icons</BpkHeading>
    <BpkParagraph>Icons are available in two sizes - small and large.</BpkParagraph>
    <BpkList>
      <BpkListItem>
        <BpkLink href={`#${anchors.small}`}>Small</BpkLink>
      </BpkListItem>
      <BpkListItem>
        <BpkLink href={`#${anchors.large}`}>Large</BpkLink>
      </BpkListItem>
    </BpkList>
    <BpkHeading id={anchors.small} level='h2'>Small</BpkHeading>
    <PresentationBlock>
      <ol className='bpkdocs-icons-page__icon-list'>
        {icons.map((icon) => (
          <li key={icon} title={icon} className='bpkdocs-icons-page__icon-list-item'>
            <BpkIcon icon={icon} />
          </li>
        ))}
      </ol>
    </PresentationBlock>
    <BpkHeading id={anchors.large} level='h2'>Large</BpkHeading>
    <PresentationBlock>
      <ol className='bpkdocs-icons-page__icon-list'>
        {icons.map((icon) => (
          <li key={icon} title={icon} className='bpkdocs-icons-page__icon-list-item'>
            <BpkIcon icon={icon} large />
          </li>
        ))}
      </ol>
    </PresentationBlock>
  </section>
)

export default IconsPage
