import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { isChromatic } from 'storybook-chromatic';

import { Button, Welcome } from '@storybook/react/demo';

const url = URL.createObjectURL(
  new File(['foo'], 'foo.txt', {
    type: 'text/plain',
  })
);
URL.revokeObjectURL(url);
new MutationObserver(() => 0);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add(
    'with text',
    () => (
      <Button style={{ position: 'fixed', top: '100px' }} onClick={action('clicked')}>
        Hello Button {isChromatic() ? 'CHROMATIC 🙆‍' : 'NOT CHROMATIC 🙍🏻‍♀'}
      </Button>
    ),
    {
      chromatic: { noScroll: true },
    }
  )
  .add(
    'with some emoji',
    () => (
      <Button onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    ),
    {
      chromatic: {
        disable: true,
      },
    }
  );
