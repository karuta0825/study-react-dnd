// @flow
import * as React from 'react';

type PropsType = {
  black: boolean,
  children: ?React.Element<any>,
};

export default class Square extends React.Component<PropsType> {
  render(): React.Node {
    const { black, children } = this.props;
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';

    return (
      <div
        style={{
          backgroundColor: fill,
          color: stroke,
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </div>
    );
  }
}
