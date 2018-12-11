import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Label from '../../components/Label/Label';
import { ICommonReducer } from '../../redux/common/common.reducer';
import { setUserName } from '../../redux/common/common.action';

/* tslint:disable:variable-name */
const SignInWrapper = styled.div`
  // some styles
`;
/* tslint:enable:variable-name */

interface IProps {
  // text?: string;
  // username?: string;
  // setUserName?: (value: string) => void;
}

interface IState {

}

class SignUp extends React.Component<IProps, IState> {
  public constructor(props) {
    super(props);

    // this.customOnClick = this.customOnClick.bind(this);
  }

  public render(): JSX.Element {
    return (
        <SignInWrapper>
          <form className={'sinIn-block__signIn-form'}>
            <Label text={'Login Error'}/>
            <Input placeholder={'Login'}/>
            <Label text={'Email Error'}/>
            <Input placeholder={'Email'}/>
            <Label text={'Password Error'}/>
            <Input placeholder={'Password'}/>
            <Label text={'Password Confirm Error'}/>
            <Input placeholder={'Password repeat'}/>
            <Button text={ 'Sign In' }/>
          </form>
          <Button text={ 'Back' }/>
        </SignInWrapper>
    );
  }

  // private customOnClick(event) {
  //   const {text, setUserName} = this.props;
  //   setUserName(text);
  // }
}

const mapStateToProps = (state: { common: ICommonReducer; }) => {
  return {
    // username: state.common.userData.name,
    // text: state.common.inputData.value,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // setUserName(value: string) {
    //   dispatch(setUserName(value));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
