import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import '@storybook/addon-console';
import { withGraphQL } from '../addon/decorator';
import brandImage from '../docs/logo.png';

const CMS_TOKEN = 'skUQZAF32YSjlq0JfaTMQPMcaHTZIBocnFhUliy9mhcaSNtdYDEQWqLyNLp1h5zMWdnaVdFCyDxk8uYL1d0XoktvSncpkNWjPXWDe5kp4pR7BlMppj59KByn1DE3vlEc7mqvjAFsWd0MCaFjXGiY1C76F6t4XKADNjTPui5u8jKGtaVtIwwb'
const CMS_ENDPOINT = 'https://7hhh6u8j.api.sanity.io/v1/graphql/production/default'

addDecorator(withGraphQL({ endpoint: CMS_ENDPOINT, token: CMS_TOKEN }))

configure(require.context('../src/stories', true, /\.stories\.js$/), module);
