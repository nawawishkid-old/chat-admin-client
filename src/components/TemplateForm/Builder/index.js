import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { withForm, FormBuilder } from '~/src/services/form';
import templateFormBuilderScheme from '~/src/data/form-schemes/template-form/builder';

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
