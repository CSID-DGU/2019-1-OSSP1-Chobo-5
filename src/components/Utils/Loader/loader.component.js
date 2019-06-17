import React, { Component } from "react";
import { LoaderWrapper } from "./loader.style";
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';
import { Label } from 'office-ui-fabric-react/lib/Label';

type Props = {
  delay: Number
};

class Loader extends Component<Props> {
  state = { show: false };

  show = () => this.setState({ show: true });
  render() {
    const { show } = this.state;
    return (
      <LoaderWrapper>
      <Spinner
      size={SpinnerSize.large}
      label="불러오는 중..." />
    </LoaderWrapper>
    );
  }
}


export default Loader;
