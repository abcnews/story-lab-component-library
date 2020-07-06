import { EmbedContainer } from '../src';
import { withKnobs, radios } from '@storybook/addon-knobs';
import React, { PropsWithChildren } from 'react';

export default {
  title: 'EmbedContainer',
  component: EmbedContainer,
  decorators: [withKnobs],
};

const content = (
  <div>
    Here's a bunch of content inside the <code>EmbedContainer</code> component.
  </div>
);

const PageFrame = ({ children }: PropsWithChildren<{}>) => (
  <div style={{ margin: 50 }}>
    <p>Content in the page before the embed.</p>
    {children}
    <p>Content in the page after the embed.</p>
  </div>
);

const embedKnob = radios(
  'Embed type',
  {
    Default: undefined,
    Full: 'full',
    Right: 'right',
  },
  undefined
);

export const Default = () => (
  <EmbedContainer embed={embedKnob}>{content}</EmbedContainer>
);

export const Full = () => (
  <PageFrame>
    <EmbedContainer embed="full">{content}</EmbedContainer>
  </PageFrame>
);

export const Right = () => (
  <PageFrame>
    <EmbedContainer embed="right">{content}</EmbedContainer>
  </PageFrame>
);
