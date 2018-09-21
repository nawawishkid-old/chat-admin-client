import React from 'react'
import { nameFieldScheme, contentFieldScheme, openTagFieldScheme, closingTagFieldScheme, inputsFieldScheme} from '~/src/data/form-schemes/template-form/builder';
import { withRouter } from 'react-router-dom';
import { FormBuilder } from '~/src/services/form';

const WithoutRouter = ({ location }) => {
	const editedScheme = templateFormBuilderScheme.fields.map(field => {
		// const { name } = field;
		// field.options.initialValue
	});
};

const TheForm = FormBuilder.build(templateFormBuilderScheme);
const handleSubmit = (props, values) => {
  console.log('props: ', props, 'values: ', values);
};
const TemplateFormBuilder = props => {
//  const { handleSubmit } = props;

  return (
    <Card>
      <TheForm handleSubmit={handleSubmit} />
    </Card>
  );
}

export default TemplateFormBuilder;

