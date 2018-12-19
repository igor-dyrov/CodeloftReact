import * as React from 'react';
import { connect } from 'react-redux';
import GameBlock from '../../components/GameBlock/GameBlock';
import { ISignInReducer } from '../../redux/signIn/signIn.reducer';
import { IValidatorReducer } from '../../redux/validator/validation.reducer';
import { ILangReducer } from '../../redux/lang/lang.reducer';
import MultiPlayerHandler from '../../game/MultiPlayer/MultiPlayerHandler.js';
import { Redirect } from 'react-router';
import { PATHS } from '../../routes';

const MULTI_PLAYER_GAME_FIELD = 'multiplayer-block__game-field';

interface IProps {
}

interface IState {
    needRedirect: boolean;
}

class MultiPlayer extends React.Component<IProps, IState> {
    private gameHandler: MultiPlayerHandler;

    public constructor(props) {
        super(props);
        this.state = {
            needRedirect: false,
        };
        this.quitWithEscape = this.quitWithEscape.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className={'multiplayer-block'}>
                {!this.state.needRedirect ? '' : <Redirect to={PATHS.MENU}/>}
                <GameBlock shown={true} className={MULTI_PLAYER_GAME_FIELD}/>
            </div>
        );
    }

    public componentWillMount() {
        window.addEventListener('keydown', this.quitWithEscape);
        const floorElements = document.getElementsByClassName('main-content__logo') as HTMLCollectionOf<HTMLElement>;
        floorElements[0].style.display = 'none';
    }

    public componentDidMount() {
        this.play();
    }

    public componentWillUnmount() {
        window.removeEventListener('keydown', this.quitWithEscape);
        const floorElements = document.getElementsByClassName('main-content__logo') as HTMLCollectionOf<HTMLElement>;
        floorElements[0].style.display = 'block';
    }

    private quitWithEscape(event) {
        if (event.key === 'Escape' && event.type === 'keydown') {
            this.setState({needRedirect: true});
        }
    }

    private play() {
        this.gameHandler = new MultiPlayerHandler([], MULTI_PLAYER_GAME_FIELD);
        this.gameHandler.startGame();
    }
}

const mapStateToProps = (state: { lang: ILangReducer, signIn: ISignInReducer, validator: IValidatorReducer }) => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MultiPlayer);