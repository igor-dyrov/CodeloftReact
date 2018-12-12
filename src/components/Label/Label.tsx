import * as React from 'react';
import b from '../../middleware/b';
import styled from "styled-components";
import './Lable.scss';

interface IProps {
  text: string;
}

interface IState {
}

export default class Label extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    text: 'Error',
  };

  public constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const {text} = this.props;

    return (
        <p className={'error-label'}>{text}</p>
    );
  }
}
