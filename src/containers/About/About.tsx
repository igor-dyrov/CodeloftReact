import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '../../components/Button/Button';
import Label from '../../components/Label/Label';
import { ILangReducer } from '../../redux/lang/lang.reducer';
import { PATHS } from '../../routes';
import { Link } from 'react-router-dom';

/* tslint:disable:variable-name */
const MainWrapper = styled.div`
  // some styles
`;
/* tslint:enable:variable-name */

interface IProps {
    text?: string;
    backText?: string;
}

class About extends React.Component<IProps> {
    public constructor(props) {
        super(props);
    }

    public render(): JSX.Element {
        const {text} = this.props;
        const {backText} = this.props;

        return (
            <MainWrapper>
                <Label
                    text={text}
                />
                <Button
                    link={<Link to={PATHS.MENU} className={'button'}>{backText}</Link>}
                />

            </MainWrapper>
        );
    }

    private goBack() {
        history.pushState({url: PATHS.MENU}, '', PATHS.MENU);
    }
}

const mapStateToProps = (state: { lang: ILangReducer }) => {
    return {
        backText: state.lang.langObject['buttonBack'][state.lang.lang],
        text: state.lang.langObject['rules.text'][state.lang.lang],
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
