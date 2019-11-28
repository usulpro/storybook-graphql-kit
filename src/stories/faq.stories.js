import { Query } from '../../addon/decorator';
import query from '../faq-query'

export default {
  title: 'Label queries',
};


export const rdb = Query({
  name: 'FAQs',
  query,
});
