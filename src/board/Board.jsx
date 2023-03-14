import React, { useState } from 'react';
import './board.css'
import Names from '../names/Names';
import Message from '../message/Message';

function Board() {

    const [teamA, setTeamA] = useState("Team A");
    const [teamB, setTeamB] = useState("Team B");
    const [activeTeamB, setActiveTeamB] = useState(false);
    const [isLimitUp, setIsLimitUp] = useState(false);
    const [isLimitDown, setIsLimitDown] = useState(false);
    const [isABallChange, setIsABallChange] = useState(false);


    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    const change = () => {
        setActiveTeamB(!activeTeamB);
        setIsABallChange(true);
    }

    const MAX_LIMIT = 18;
    const MIN_LIMIT = 0;
    const addOne = (flag) => {
        if (flag === 'A' && !activeTeamB && countA < MAX_LIMIT) {
            setCountA(countA + 1);
        } else if (flag === 'B' && activeTeamB && countB < MAX_LIMIT) {
            setCountB(countB + 1);
        }
        if (flag === 'A' && countA === MAX_LIMIT || flag === 'B' && countB === MAX_LIMIT) {
            setIsLimitUp(true);
        }
    }

    const susbtractOne = (flag) => {
        if (flag === 'A' && countA > MIN_LIMIT) {
            setCountA(countA - 1);
        } else if (flag === 'B' && countB > MIN_LIMIT) {
            setCountB(countB - 1);
        }

        if (flag === 'A' && countA === MIN_LIMIT || flag === 'B' && countB === MIN_LIMIT) {
            setIsLimitDown(true);
        }
    }

    const restart = () => {
        setCountA(0);
        setCountB(0);
        setActiveTeamB(false);
    }


    return (
        <div className="Board">
            <div className="border border-2 container-sm">
                {isLimitUp ? <Message variant="danger" setShow={() => { setIsLimitUp() }} show={isLimitUp}>Limit up!</Message> : null}
                {isLimitDown ? <Message variant="danger" setShow={() => { setIsLimitDown() }} show={isLimitDown}>Limit down!</Message> : null}
                {isABallChange ? <Message variant="warning" setShow={() => { setIsABallChange() }} show={isABallChange}>Ball change!</Message> : null}

                <div className="Names row flex-spaces flex-middle">
                    <div className={`sm-5 col`}>
                        <h3>
                            <span className="badge success space-1">A</span>
                            <span className={!activeTeamB ? 'yellow-text' : null}>{teamA}</span>
                            {!activeTeamB ? <span className="space-1-left"><i className="fa-solid fa-futbol"></i></span> : null}
                        </h3>
                    </div>
                    <div className="sm-1 col">
                        <fieldset className="form-group">
                            <label className="paper-switch">
                                <input id="paperSwitch7" onChange={change} name="paperSwitch7" type="checkbox" checked={activeTeamB ?? false} />
                                <span className="paper-switch-slider round"></span>
                            </label>
                        </fieldset>
                    </div>
                    <div className="sm-5 col">
                        <h3>
                            <span className="badge warning space-1">B</span>
                            <span className={activeTeamB ? 'yellow-text' : null}>{teamB}</span>
                            {activeTeamB ? <span className="space-1-left"><i className="fa-solid fa-futbol"></i></span> : null}
                        </h3>
                    </div>
                </div>

                <div className="row flex-spaces flex-middle">
                    <div className="sm-4 col"><h1 className={!activeTeamB ? 'yellow-text' : null}>{countA}</h1>
                    </div>
                    <div className="sm-1 col"><button onClick={change}><i className="fa-solid fa-arrows-left-right"></i></button></div>
                    <div className="sm-4 col"><h1 className={activeTeamB ? 'yellow-text' : null}>{countB}</h1></div>
                </div>

                <div className="row flex-spaces">
                    <div className="row flex-spaces">
                        <div className="sm-3 col"><button onClick={() => { addOne('A') }}>+1</button></div>
                        <div className="sm-3 col"><button onClick={() => { susbtractOne('A') }}>-1</button></div>
                    </div>

                    <div className="row flex-spaces">
                        <button onClick={() => { restart() }} ><i className="fa-solid fa-arrow-rotate-left"></i></button>
                    </div>

                    <div className="row flex-spaces">
                        <div className="sm-3 col"><button onClick={() => { addOne('B') }}>+1</button></div>
                        <div className="sm-3 col"><button onClick={() => { susbtractOne('B') }}>-1</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Board
