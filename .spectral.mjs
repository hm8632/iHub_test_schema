import ruleset from "https://stoplight.io/api/v1/projects/cHJqOjEyNjczNA/spectral.js?branch_slug=dev&token=aeec2811-680f-41fc-8548-d4309d107739";
export default { extends: ruleset };

import * as Ajv from "ajv";

const ajv = new Ajv({ schemaId: "auto", jsonPointers: true });
ajv.addMetaSchema(require("ajv/lib/refs/json-schema-draft-04.json"));

export const validator: IValidator = {
  validate: async (object, schema): Promise<types.IRuleResult[]> => {
    const valid = ajv.validate(schema, object);
    const errors = ajv.errors;
    const results: types.IRuleResult[] = [];

    if (!valid && errors) {
      for (const error of errors) {
        // TODO
        // results.push({
        //   path: null,
        //   rule: null,
        //   error: null,
        // });
      }
    }

    return results;
  }
};