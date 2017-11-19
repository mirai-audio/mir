import { helper } from '@ember/component/helper';
import config from '../config/environment';

export function asset(param /* hash */) {
  const rootURL = config.rootURL ? config.rootURL : '';
  return `${rootURL}${param}`;
}

export default helper(asset);
