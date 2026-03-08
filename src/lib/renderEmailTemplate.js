import { renderToStaticMarkup } from 'react-dom/server';
import { EmailTemplate } from '@/components/email-template/page';

export function renderEmailTemplate(props) {
  return renderToStaticMarkup(<EmailTemplate {...props} />);
}
