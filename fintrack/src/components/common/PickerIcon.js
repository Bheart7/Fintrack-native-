import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form } from "native-base";

class PickerIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key0"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  render() {

    return (
          <Form>
            <Picker
              mode="dropdown"
              iosHeader="Select your Category"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
            {this.props.pickerItems.map((item)=>(
                <Picker.Item key={item.id} label={item.label} value={item.value} />
            ))}

            </Picker>
          </Form>
    );
  }
}

export { PickerIcon };
