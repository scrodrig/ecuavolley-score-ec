import React, { useState } from 'react';
import './board.css'
import Names from '../names/Names';
import Message from '../message/Message';

function Board() {

    const [teamA, setTeamA] = useState("Team A");
    const [teamB, setTeamB] = useState("Team B");
    const [activeTeamB, setActiveTeamB] = useState(false);
    const [isLimitUp, setIsLimitUp] = useState(false);


    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    const change = () => {
        setActiveTeamB(!activeTeamB)
    }

    const addOne = (flag) => {
        if (flag === 'A' && !activeTeamB && countA < 15) {
            setCountA(countA + 1);
        } else if (flag === 'B' && activeTeamB && countB < 15) {
            setCountB(countB + 1);
        }
        setIsLimitUp(true);
    }

    const susbtractOne = (flag) => {
        if (flag === 'A' && countA > 0) {
            setCountA(countA - 1);
        } else if (flag === 'B' && countB > 0) {
            setCountB(countB - 1);
        }
    }


    return (
        <div className="Board">
            <div className="border border-2 container-sm">
                {isLimitUp ? <Message setShow={()=>{setIsLimitUp()}} show={isLimitUp}>Limit up!</Message> : null}
                {/* <Names /> */}
                {/* <input className="alert-state" id="alert-1" type="checkbox" />
                <div className="alert alert-primary dismissible">
                    Alert-primary
                    <label className="btn-close" for="alert-1">X</label>
                </div> */}

                <div className="Names row flex-spaces flex-middle">
                    <div className={`sm-5 col`}><h3> <span className="badge success space-1">A</span>{teamA}</h3></div>
                    <div className="sm-1 col">
                        <fieldset className="form-group">
                            <label className="paper-switch">
                                <input id="paperSwitch7" onChange={change} name="paperSwitch7" type="checkbox" checked={activeTeamB ?? false} />
                                <span className="paper-switch-slider round"></span>
                            </label>
                        </fieldset>
                    </div>
                    <div className="sm-5 col"><h3> <span className="badge warning space-1">B</span>{teamB}</h3></div>
                </div>

                <div className="row flex-spaces flex-middle">
                    <div className="sm-4 col"><h1>{countA}</h1></div>
                    <div className="sm-1 col"><button onClick={change}><i className="fa-solid fa-arrows-left-right"></i></button></div>
                    <div className="sm-4 col"><h1>{countB}</h1></div>
                </div>

                <div className="row flex-spaces">
                    <div className="row flex-spaces">
                        <div className="sm-3 col"><button onClick={() => { addOne('A') }}>+1</button></div>
                        <div className="sm-3 col"><button onClick={() => { susbtractOne('A') }}>-1</button></div>
                    </div>

                    <div className="row flex-spaces">
                        <button><i className="fa-solid fa-arrow-rotate-left"></i></button>
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
