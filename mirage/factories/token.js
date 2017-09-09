import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  access_token() {
    return 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.' +
      'eyJhdWQiOiJVc2VyOjEzIiwiZXhwIjoxNTEyNzQyN' +
      'DczLCJpYXQiOjE1MDQ5NjY0NzMsImlzcyI6ImFpIi' +
      'wianRpIjoiNGY1YWUxNjUtYmNiZC00NzVjLWI0MmUt' +
      'NmYyMDg2MDE3NzJhIiwicGVtIjp7fSwic3ViIjoiVXNl' +
      'cjoxMyIsInR5cCI6InRva2VuIn0.lZMJYz-GBAqtlhnx' +
      'AmwTbO2zM6Cg0fNXN24I42_Oy--PJuMncPwMgVwFrjcs514nXQZTyvRg7-Aoqenv0T3ciA';
  },
});
