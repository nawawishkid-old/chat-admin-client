import React from "react";
import AdminPage from "~/src/scenes/Admin/components/Page";
import templateInputApi from "~/src/services/api/templateInput";

class All extends React.Component {
  state = {
    data: null
  };

  componentDidMount() {
    templateInputApi.exec("get", null, data => {
      console.log("data: ", data);
      this.setState({ data: data.doc });
    });
  }

  render() {
    const { data } = this.state;

    return (
      <AdminPage>
        <h1>All template inputs here!</h1>
        {data === null ? (
          <h1>Such empty :P</h1>
        ) : (
          data.map((item, index) => <p key={item._id}>{item.name}</p>)
        )}
      </AdminPage>
    );
  }
}

export { All };

export default All;
