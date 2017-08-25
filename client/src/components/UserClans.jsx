import React from 'react';
import ClanChip from './ClanChip.jsx';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  clans: state.clans
})


const UserClans = (props) => (
  <div>

    <div className = 'userClanScrollBox' >
      {props.clans.map((clan, i) => {
        return (<ClanChip clan={clan} key={clan.id} />);
      })}
    </div>
  </div>
)

export default connect(mapStateToProps)(UserClans);
