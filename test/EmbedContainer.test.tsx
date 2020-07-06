import React from 'react';
import renderer from 'react-test-renderer'; // ES6
import { EmbedContainer } from '../src/EmbedContainer/EmbedContainer';

describe('EmbedContainer Component', () => {
  it('renders default correctly', () => {
    const tree = renderer
      .create(<EmbedContainer>Content</EmbedContainer>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders full correctly', () => {
    const tree = renderer
      .create(<EmbedContainer embed="full">Content</EmbedContainer>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders right correctly', () => {
    const tree = renderer
      .create(<EmbedContainer embed="right">Content</EmbedContainer>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
