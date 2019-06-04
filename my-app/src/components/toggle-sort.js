import React from 'react';

function ToggleSort(props) {
    return (
        <div>
            <input className="tgl tgl-skewed" id="tgBtn" type="checkbox" onClick={props.onClick} />
            <label className="tgl-btn" data-tg-off="Ascending" data-tg-on="Descending" htmlFor="tgBtn"></label>
        </div>
    );
}

export default ToggleSort;