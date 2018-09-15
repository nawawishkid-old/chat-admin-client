import React from "react";
import AdminPage from "~/src/scenes/Admin/components/Page";
import templateApi from "~/src/services/api/template";
import ChatTemplateForm from "~/src/components/ChatTemplateForm";

class All extends React.Component {
  state = {
    data: null
  };

  componentDidMount() {
    templateApi.exec("get", null, data => {
      console.log("data: ", data);
      this.setState({ data: data.doc });
    });
  }

  render() {
    const { data } = this.state;

    return (
      <AdminPage>
        <h1>All templates here!</h1>
        {data === null ? (
          <h1>Such empty :P</h1>
        ) : (
          data.map((item, index) => (
            <ChatTemplateForm
              title={item.name}
              inputSchemes={item.inputs}
              key={index}
              templateId={item._id}
            >
              {item.name}
            </ChatTemplateForm>
          ))
        )}
      </AdminPage>
    );
  }
}

export { All };

export default All;
