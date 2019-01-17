import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { isChromatic } from 'storybook-chromatic';

import { Button, Welcome } from '@storybook/react/demo';

// const url = URL.createObjectURL(
//   new File(['foo'], 'foo.txt', {
//     type: 'text/plain',
//   })
// );
// URL.revokeObjectURL(url);
// new MutationObserver(() => 0);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add(
    'with text',
    () => (
      <div style={{ background: '#eee', position: 'fixed', top: 0, left: 0, bottom: 0, right: 0 }}>
        <div style={{ position: 'relative', top: '50%' }}>
          <Button onClick={action('clicked')}>
            Hello Button {isChromatic() ? 'CHROMATIC 🙆‍' : 'NOT CHROMATIC 🙍🏻‍♀'}
          </Button>
        </div>
      </div>
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
